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
    description: game.description,
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
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FAFAF9]/95 backdrop-blur-sm border-b border-[#E7E5E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-[#F97316] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/20">
                X
              </div>
              <span className="font-display font-bold text-xl text-[#1C1917] group-hover:text-[#F97316] transition-colors">
                Xavrito
              </span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F5F4] hover:bg-[#E7E5E4] text-[#1C1917] rounded-lg text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Games
            </Link>
          </div>
        </div>
      </nav>

      {/* Game Hero */}
      <section className="bg-[#FAFAF9] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left: Info (3 cols) */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#F97316]/10 text-[#F97316] rounded-full text-sm font-medium">
                  {game.category}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mb-4 leading-tight">
                {game.name}
              </h1>

              <p className="text-lg text-[#78716C] mb-6 leading-relaxed max-w-2xl">
                {game.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#F5F5F4] text-[#78716C] rounded-full text-xs font-medium capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Controls */}
              {game.controls && (
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E7E5E4]">
                  <svg className="w-5 h-5 text-[#F97316] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  <div>
                    <span className="text-xs text-[#A8A29E] uppercase tracking-wide">Controls</span>
                    <p className="text-sm text-[#1C1917] font-medium">{game.controls}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Thumbnail (2 cols) */}
            <div className="lg:col-span-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-orange-500/10 border border-[#E7E5E4]">
                <img
                  src={game.thumbnail}
                  alt={game.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Embed */}
      <section id="play" className="bg-white py-12 px-4 sm:px-6 border-t border-[#E7E5E4]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#F97316] rounded-full" />
            <h2 className="font-display text-lg font-semibold text-[#1C1917]">Play {game.name}</h2>
          </div>
          <GameEmbed game={game} />
        </div>
      </section>

      {/* Related Games */}
      {relatedGames.length > 0 && (
        <section className="bg-[#FAFAF9] py-12 px-4 sm:px-6 border-t border-[#E7E5E4]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-1 bg-[#F97316] rounded-full" />
              <h2 className="font-display text-xl font-bold text-[#1C1917]">More {game.category} Games</h2>
            </div>
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
