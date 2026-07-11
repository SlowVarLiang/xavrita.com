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
      <section className="relative bg-gradient-to-b from-violet-950/50 via-void to-void overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/" className="hover:text-white transition-colors">Games</Link>
            <span>/</span>
            <span className="text-white">{game.name}</span>
          </nav>

          {/* Game Header */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left: Game Info */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-violet-500/20 text-violet-300 rounded text-xs font-medium border border-violet-500/30">
                  {game.category}
                </span>
                <span className="text-slate-500 text-sm">{game.emoji}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {game.name}
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-2xl">
                {game.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs font-medium text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Play CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#play"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-lg transition-all shadow-lg shadow-violet-500/30 hover:-translate-y-0.5 text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play Now
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-lg transition-all hover:-translate-y-0.5"
                >
                  More Games
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: Game Thumbnail */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-violet-500/10 group">
                <img
                  src={game.thumbnail}
                  alt={game.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
                <a
                  href="#play"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-void/50"
                >
                  <div className="w-16 h-16 rounded-full bg-violet-500/90 flex items-center justify-center shadow-xl">
                    <svg className="w-7 h-7 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Controls Info */}
          {game.controls && (
            <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-slate-800">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-800">
                <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <span className="text-sm text-slate-400">Controls:</span>
                <span className="text-sm text-white font-medium font-mono">{game.controls}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Game Embed */}
      <section id="play" className="py-12 px-4 sm:px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-violet-500 to-cyan-500" />
            <span className="text-sm font-medium text-white uppercase tracking-wider">Game Player</span>
          </div>
          <GameEmbed game={game} />
        </div>
      </section>

      {/* Related Games */}
      {relatedGames.length > 0 && (
        <section className="py-16 px-4 sm:px-6 bg-void">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-violet-500 to-cyan-500" />
              <span className="text-sm font-medium text-white uppercase tracking-wider">You May Also Like</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
              More {game.category} Games
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
