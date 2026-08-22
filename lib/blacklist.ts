/**
 * Game Blacklist
 * ----------------------------------------------------------------------
 * Central registry of game slugs that should NOT be imported into the
 * xavrito.com catalog. Use:
 *   - thumbnail URL returns 404 / non-image / placeholder
 *   - iframe game URL returns 404 / "game not found"
 *   - game has been removed by its developer
 *   - any other reason the game is unfit for production
 *
 * Pipeline (in html5-games.ts):
 *   1. Imports `html5Games` array (raw catalog)
 *   2. Filters out any slug in `blacklistedSlugs`
 *   3. Exports the clean list as the public `html5Games`
 *
 * To add a blacklisted game:
 *   - Append `{ slug, reason, date }` to BLACKLIST below
 *   - Commit + push; the next build / re-render drops it from the site
 *   - To restore, remove the line and commit
 *
 * To audit before adding (run from project root):
 *   python scripts/audit-thumbs.py     # checks all 109 thumbnails + game iframes
 *   python scripts/audit-thumbs.py --probe-only     # just probe, don't modify
 */

export interface BlacklistedGame {
  /** Game slug as it appears in html5-games.ts (must match exactly) */
  slug: string
  /** Human-readable reason — visible in build logs and audit output */
  reason: string
  /** ISO date when added (YYYY-MM-DD) — used for staleness audits */
  date: string
}

/**
 * MASTER BLACKLIST
 *
 * Order doesn't matter. Keep sorted by date (newest first) so audits can
 * spot stale entries.
 */
export const BLACKLIST: BlacklistedGame[] = [
  // Auto-discovered 2026-08-21 via scripts/audit-thumbs.py + Playwright DOM audit.
  // All 33 games return 400x400 placeholder thumbnails from img.gamepix.com
  // instead of the expected 400x246 / 400x250 game artwork. Cards still link
  // to the game pages but the missing visuals make the catalog look broken.
  // Next step: source replacement games from the same categories.
  { slug: 'candy-crush',         reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'temple-run',          reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'angry-birds',         reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'subway-surfers',      reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'tetris',              reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'pac-man',             reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'pinball',             reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'tennis-open',         reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'tower-blocks',        reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'stickman-hook',       reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'mario-kart',          reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'ice-breaker',         reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'skating-free',        reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'cannon-basketball',   reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'rope-swing',          reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'pet-save',            reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'sushi-party',         reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'drum-taps',           reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'jump-color',          reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'pixel-puzzle',        reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'gravity-balls',       reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'slide-puzzle',        reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'unblock-me',          reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'brain-quest',         reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'matching-cards',      reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'find-the-pair',       reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'concentration',       reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'reaction-test',       reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'aim-trainer',         reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'gravity-run',         reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'crafting',            reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
  { slug: 'city-builder',        reason: '400x400 placeholder thumbnail (no artwork)', date: '2026-08-21' },
]

/**
 * Fast-lookup Set (recomputed at module load — O(1) per check).
 * Re-export the slugs as a Set for cheap membership tests.
 */
export const blacklistedSlugs: Set<string> = new Set(BLACKLIST.map(g => g.slug))

/** Helper: is this slug blacklisted? */
export function isBlacklisted(slug: string): boolean {
  return blacklistedSlugs.has(slug)
}

/** Helper: get the reason for blacklisting (or null if not blacklisted) */
export function blacklistReason(slug: string): string | null {
  const entry = BLACKLIST.find(g => g.slug === slug)
  return entry ? entry.reason : null
}

/**
 * Filter pipeline: drop any game whose slug is in the blacklist.
 * Import in html5-games.ts as:
 *   import { isBlacklisted } from './blacklist'
 *   export const html5Games = rawCatalog.filter(g => !isBlacklisted(g.slug))
 */
export function applyBlacklist<T extends { slug: string }>(games: T[]): T[] {
  return games.filter(g => !blacklistedSlugs.has(g.slug))
}/* Vercel trigger */
