#!/usr/bin/env python3
"""
Audit xavrito game thumbnails and embedded game iframes.
Reports any game whose:
  - thumbnail URL returns non-200 OR non-image response
  - iframe game URL returns non-200 OR redirects to a "not found" page
  - thumbnail or iframe response is empty (0 bytes)

Usage:
  python scripts/audit-thumbs.py                 # full audit
  python scripts/audit-thumbs.py --probe-only    # just probe, don't modify blacklist
  python scripts/audit-thumbs.py --refresh       # probe and append broken games to lib/blacklist.ts
  python scripts/audit-thumbs.py --concurrency N # override thread count (default 15)

Outputs:
  - Console report of all 109 games (status, size, content-type)
  - Writes C:/Users/Lumis/game_audit.tsv with machine-readable results
  - With --refresh, appends broken entries to lib/blacklist.ts
"""

import argparse
import json
import os
import re
import subprocess
import sys
import time
import concurrent.futures
from pathlib import Path

# Paths
ROOT = Path(__file__).resolve().parent.parent
LIB = ROOT / 'lib'
GAMES_FILE = LIB / 'html5-games.ts'
BLACKLIST_FILE = LIB / 'blacklist.ts'
REPORT = Path('C:/Users/Lumis/game_audit.tsv') if sys.platform == 'win32' else Path.home() / 'game_audit.tsv'

# Match game object blocks in html5-games.ts
GAME_RE = re.compile(
    r"\{\s*slug:\s*'([^']+)',\s*name:\s*'([^']+)',\s*category:\s*'([^']+)',"
    r"\s*emoji:\s*'([^']+)',\s*thumbnail:\s*'([^']+)',\s*gameUrl:\s*'([^']+)'",
    re.DOTALL,
)


def parse_games():
    """Parse the raw catalog from lib/html5-games.ts."""
    s = GAMES_FILE.read_text(encoding='utf-8')
    return [
        {
            'slug': m.group(1),
            'name': m.group(2),
            'category': m.group(3),
            'emoji': m.group(4),
            'thumbnail': m.group(5),
            'gameUrl': m.group(6),
        }
        for m in GAME_RE.finditer(s)
    ]


def check(url, timeout=12):
    """Return (status, size, content_type, magic) for a URL."""
    try:
        r = subprocess.run(
            f'curl -sL -D - -o /dev/null --max-time {timeout} "{url}"',
            capture_output=True, text=True, shell=True, timeout=timeout + 5,
        )
        code, ct = '?', ''
        for ln in r.stdout.split('\r\n')[:30]:
            if ln.startswith('HTTP/'):
                parts = ln.split()
                if len(parts) > 1:
                    code = parts[1]
            elif 'content-type:' in ln.lower():
                ct = ln.split(':', 1)[1].strip()
        # Get size + magic
        r2 = subprocess.run(
            f'curl -sL -o /tmp/_audit_dl.bin --max-time {timeout} "{url}"',
            capture_output=True, text=True, shell=True, timeout=timeout + 5,
        )
        size = os.path.getsize('/tmp/_audit_dl.bin') if os.path.exists('/tmp/_audit_dl.bin') else 0
        magic = '?'
        if size > 0:
            with open('/tmp/_audit_dl.bin', 'rb') as f:
                head = f.read(16)
            if head.startswith(b'\x89PNG'):
                magic = 'PNG'
            elif head.startswith(b'\xff\xd8'):
                magic = 'JPEG'
            elif head[8:12] == b'WEBP':
                magic = 'WebP'
            elif b'<html' in head.lower() or b'<!doctype' in head.lower():
                magic = 'HTML'
            else:
                magic = f'OTHER({head[:4].hex()})'
        return code, size, ct, magic
    except Exception as e:
        return 'ERR', 0, '', str(e)[:40]


def run_audit(games, concurrency=15):
    print(f'Auditing {len(games)} games (thumbnail + iframe)...')
    tasks = []
    for g in games:
        tasks.append(('thumb', g))
        tasks.append(('game', g))
    results = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=concurrency) as executor:
        futs = {executor.submit(check, t[1]['thumbnail'] if t[0] == 'thumb' else t[1]['gameUrl']): t for t in tasks}
        for fut in concurrent.futures.as_completed(futs):
            kind, g = futs[fut]
            code, size, ct, magic = fut.result()
            results.setdefault(g['slug'], {})[kind] = (code, size, ct, magic)
    return results


def find_broken(results):
    """Return list of (slug, reason)."""
    broken = []
    for slug, kinds in results.items():
        t = kinds.get('thumb', ('?', 0, '', '?'))
        g = kinds.get('game', ('?', 0, '', '?'))
        reasons = []
        if t[0] not in ('200', '304'):
            reasons.append(f'thumb status={t[0]}')
        if t[3] not in ('PNG', 'JPEG', 'WebP'):
            reasons.append(f'thumb magic={t[3]}')
        if 0 < t[1] < 500:
            reasons.append(f'thumb tiny={t[1]}B')
        if g[0] not in ('200', '304'):
            reasons.append(f'game status={g[0]}')
        if g[3] not in ('HTML',) and 0 < g[1] < 1000:
            # Game iframes serve HTML; very small responses are suspicious
            reasons.append(f'game tiny={g[1]}B')
        if reasons:
            broken.append((slug, '; '.join(reasons)))
    return broken


def print_report(results):
    print()
    print('=' * 78)
    print(f'{"SLUG":<28} {"THUMB":<22} {"GAME":<22}')
    print('=' * 78)
    for slug, kinds in sorted(results.items()):
        t = kinds.get('thumb', ('?', 0, '', '?'))
        g = kinds.get('game', ('?', 0, '', '?'))
        t_str = f'{t[0]} {t[1]:>5}B {t[3] or "-"}'
        g_str = f'{g[0]} {g[1]:>5}B'
        marker = '  <-- BROKEN' if (t[0] not in ('200', '304') or g[0] not in ('200', '304')) else ''
        print(f'{slug:<28} {t_str:<22} {g_str:<22}{marker}')


def refresh_blacklist(broken):
    """Append broken slugs to lib/blacklist.ts (avoid duplicates)."""
    if not broken:
        print('\nNo broken games to add.')
        return
    today = time.strftime('%Y-%m-%d')
    s = BLACKLIST_FILE.read_text(encoding='utf-8')
    # Extract existing slugs
    existing = set(re.findall(r"slug:\s*'([^']+)'", s))
    new_entries = []
    for slug, reason in broken:
        if slug in existing:
            print(f'  (skip) {slug} already in blacklist')
            continue
        # Reason must be a single-line string
        safe_reason = reason.replace("'", '').replace('\n', ' ')[:120]
        new_entries.append(f"  {{ slug: '{slug}', reason: '{safe_reason}', date: '{today}' }},")
    if not new_entries:
        print('\nNo new slugs to add (all already in blacklist).')
        return
    # Insert into the BLACKLIST array (after the opening [ line)
    new_block = '\n'.join(new_entries)
    s = re.sub(
        r"(export const BLACKLIST: BlacklistedGame\[\] = \[\n)",
        r"\1" + new_block + "\n",
        s,
        count=1,
    )
    BLACKLIST_FILE.write_text(s, encoding='utf-8')
    print(f'\nAdded {len(new_entries)} new entries to lib/blacklist.ts:')
    for e in new_entries:
        print(f'  {e}')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--probe-only', action='store_true', help='Just probe, do not modify blacklist')
    ap.add_argument('--refresh', action='store_true', help='Probe + append broken games to blacklist')
    ap.add_argument('--concurrency', type=int, default=15)
    args = ap.parse_args()

    games = parse_games()
    print(f'Parsed {len(games)} games from {GAMES_FILE.name}')

    results = run_audit(games, args.concurrency)
    print_report(results)

    broken = find_broken(results)
    print()
    print('=' * 78)
    if broken:
        print(f'BROKEN: {len(broken)} of {len(games)} games')
        for slug, reason in broken:
            print(f'  - {slug}: {reason}')
    else:
        print(f'HEALTHY: all {len(games)} games return valid thumbnails + iframes')

    # Save TSV
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    with open(REPORT, 'w') as f:
        f.write('slug\tthumb_status\tthumb_size\tthumb_magic\tgame_status\tgame_size\tgame_magic\tissues\n')
        for slug, kinds in sorted(results.items()):
            t = kinds.get('thumb', ('?', 0, '', '?'))
            g = kinds.get('game', ('?', 0, '', '?'))
            issues = []
            if t[0] not in ('200', '304'):
                issues.append('thumb_status')
            if t[3] not in ('PNG', 'JPEG', 'WebP'):
                issues.append('thumb_format')
            if g[0] not in ('200', '304'):
                issues.append('game_status')
            f.write(f'{slug}\t{t[0]}\t{t[1]}\t{t[3]}\t{g[0]}\t{g[1]}\t{g[3] or "-"}\t{",".join(issues) or "ok"}\n')
    print(f'\nSaved TSV report to {REPORT}')

    if args.refresh and broken:
        print()
        refresh_blacklist(broken)
    elif not args.probe_only and not args.refresh and broken:
        print()
        print('Run with --refresh to auto-append broken games to lib/blacklist.ts')
    elif not broken:
        print('\nNo broken games to blacklist.')


if __name__ == '__main__':
    main()