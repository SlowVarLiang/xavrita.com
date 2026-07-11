import Link from 'next/link'
import { notFound } from 'next/navigation'
import { html5Games, getGameBySlug, getRelatedGames } from '@/lib/html5-games'
import GameEmbed from '@/components/GameEmbed'
import Html5GameCard from '@/components/Html5GameCard'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return html5Games.map((game) => ({
    slug: game.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const game = getGameBySlug(params.slug)
  if (!game) {
    return { title: 'Game Not Found | Xavrito' }
  }

  return {
    title: `${game.name} - Free HTML5 Game | Xavrito`,
    description: `Play ${game.name} for free. ${game.description}`,
  }
}

export default function GamePage({ params }: PageProps) {
  const game = getGameBySlug(params.slug)

  if (!game) {
    notFound()
  }

  const relatedGames = getRelatedGames(game, 4)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-void overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#games" className="hover:text-text-primary transition-colors">Games</Link>
            <span>/</span>
            <span className="text-text-primary">{game.name}</span>
          </nav>

          {/* Game Header */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left: Game Info */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-accent-violet/20 text-accent-violet rounded text-xs font-medium">
                  {game.category}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
                {game.name}
              </h1>

              <p className="text-text-muted text-lg leading-relaxed mb-6 max-w-2xl">
                {game.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-surface border border-border rounded-lg text-xs font-mono text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Play CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#play"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-violet hover:bg-accent-violet/90 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-violet/30 hover:-translate-y-0.5 text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play Now
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-surface hover:bg-border border border-border text-text-primary font-medium rounded-lg transition-all hover:-translate-y-0.5"
                >
                  More Games →
                </Link>
              </div>
            </div>

            {/* Right: Game Thumbnail */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl shadow-accent-violet/10">
                <img
                  src={game.thumbnail}
                  alt={game.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Controls Info */}
          {game.controls && (
            <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-border">
                <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <span className="text-sm text-text-muted">Controls:</span>
                <span className="text-sm text-text-primary font-medium font-mono">{game.controls}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Game Embed */}
      <section id="play" className="py-12 px-4 sm:px-6 bg-void">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Game Player</span>
          </div>
          <GameEmbed game={game} />
        </div>
      </section>

      {/* Related Games */}
      {relatedGames.length > 0 && (
        <section className="py-16 px-4 sm:px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">More Fun</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-8">
              More {game.category} Games
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedGames.map((g) => (
                <Html5GameCard key={g.slug} game={g} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
