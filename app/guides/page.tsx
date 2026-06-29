import { Metadata } from 'next'
import Link from 'next/link'
import { games } from '@/lib/games-data'
import GuideCard from '@/components/GuideCard'

export const metadata: Metadata = {
  title: 'Game Guides - Xavrito',
  description: 'Browse comprehensive game guides for the latest PC and console games. Walkthroughs, builds, tips, and strategies.',
  alternates: {
    canonical: 'https://xavrita.com/guides/',
  },
}

const guidesData = [
  { slug: 'once-human-best-builds', title: 'Best Builds for Once Human', category: 'Build Guides', game: 'once-human', excerpt: 'Discover the top meta builds for combat and survival in Once Human.', updatedAt: '2026-06-28' },
  { slug: 'core-keeper-resources', title: 'Complete Resource Guide', category: 'Resources', game: 'core-keeper', excerpt: 'A comprehensive guide to all resources in Core Keeper.', updatedAt: '2026-06-27' },
  { slug: 'v-rising-boss-guide', title: 'V Rising Boss Tier List', category: 'Boss Guides', game: 'v-rising', excerpt: 'Ranked list of all bosses from weakest to strongest.', updatedAt: '2026-06-26' },
  { slug: 'abiotic-factor-walkthrough', title: 'Full Walkthrough', category: 'Quests', game: 'abiotic-factor', excerpt: 'Complete walkthrough covering all puzzle solutions.', updatedAt: '2026-06-25' },
  { slug: 'soulmask-tier-list', title: 'Best Masks Tier List', category: 'Tier Lists', game: 'soulmask', excerpt: 'Every mask ranked by effectiveness and abilities.', updatedAt: '2026-06-24' },
  { slug: 'palworld-pals', title: 'Pal Breeding Guide', category: 'Guides', game: 'palworld', excerpt: 'Tips and tricks for breeding rare Pals.', updatedAt: '2026-06-23' },
  { slug: 'enshrouded-boss-guide', title: 'Boss Fight Strategies', category: 'Boss Guides', game: 'enshrouded', excerpt: 'Detailed strategies for every boss encounter.', updatedAt: '2026-06-22' },
  { slug: 'dune-spice-farming', title: 'Spice Farming Guide', category: 'Resources', game: 'dune-awakening', excerpt: 'Efficient Spice harvesting routes and locations.', updatedAt: '2026-06-21' },
]

const GAME_EMOJIS: Record<string, string> = {
  'once-human': '🔫',
  'core-keeper': '⛏️',
  'v-rising': '🧛',
  'abiotic-factor': '🔬',
  'soulmask': '🎭',
  'palworld': '🐾',
  'enshrouded': '🔥',
  'dune-awakening': '🏜️',
}

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-void overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-amber/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-amber"></span>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Strategy Hub</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Game Guides
            </h1>
            <p className="text-lg text-text-muted">
              Comprehensive guides, walkthroughs, and strategies for popular games. Updated regularly.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guidesData.map((guide) => {
              const game = games.find(g => g.slug === guide.game)
              return (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}/`}
                  className="group block bg-void border border-border rounded-xl p-5 hover:border-accent-violet/50 transition-all hover:-translate-y-0.5"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{GAME_EMOJIS[guide.game] || '🎮'}</span>
                    <span className="px-2 py-1 bg-accent-violet/10 text-accent-violet text-xs font-medium rounded">
                      {guide.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-text-primary group-hover:text-white mb-2 transition-colors line-clamp-2">
                    {guide.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-text-muted leading-relaxed line-clamp-2 mb-3">
                    {guide.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted font-mono">
                      {new Date(guide.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="text-xs text-accent-cyan opacity-0 group-hover:opacity-100 transition-all">
                      Read →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Browse by Game */}
      <section className="py-16 px-4 sm:px-6 bg-void">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
            <h2 className="font-display text-lg font-semibold text-text-primary">Browse by Game</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {games.filter(g => !g.external).map((game) => (
              <Link
                key={game.slug}
                href={`/games/${game.slug}/`}
                className="flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded-xl hover:border-accent-violet/50 transition-all group"
              >
                <span className="text-xl">{game.emoji}</span>
                <span className="text-sm text-text-muted group-hover:text-text-primary transition-colors">
                  {game.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
