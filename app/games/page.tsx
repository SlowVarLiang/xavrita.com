import { Metadata } from 'next'
import Link from 'next/link'
import { games } from '@/lib/games-data'
import GameCard from '@/components/GameCard'

export const metadata: Metadata = {
  title: 'Browse Games - Xavrito',
  description: 'Explore our collection of game guides. From survival games to RPGs, find the perfect guide for your favorite game.',
  alternates: {
    canonical: 'https://xavrita.com/games/',
  },
}

export default function GamesPage() {
  const internalGames = games.filter(g => !g.external)
  const externalGames = games.filter(g => g.external)

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-violet/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Game Library</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Browse Games
            </h1>
            <p className="text-lg text-text-muted">
              Explore our collection of game guides and resources. Each game has its own interactive tools and detailed walkthroughs.
            </p>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
            <h2 className="font-display text-lg font-semibold text-text-primary">Our Games</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {internalGames.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* External Games */}
      {externalGames.length > 0 && (
        <section className="py-16 px-4 sm:px-6 bg-void">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-amber"></span>
              <h2 className="font-display text-lg font-semibold text-text-primary">Partner Sites</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {externalGames.map((game) => (
                <GameCard key={game.slug} game={game} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
            Missing a Game?
          </h2>
          <p className="text-text-muted mb-6">
            We are always adding new games to our collection. Let us know which game you would like to see covered next.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-violet hover:bg-accent-violet/90 text-white font-medium rounded-lg transition-all hover:-translate-y-0.5"
          >
            Request a Game
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
