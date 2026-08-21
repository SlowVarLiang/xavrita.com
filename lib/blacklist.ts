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
  // Example:
  // { slug: 'broken-game-slug', reason: 'thumbnail returns 404', date: '2026-08-21' },
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
}