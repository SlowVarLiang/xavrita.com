'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getFavorites, removeFavorite } from '@/lib/favorites'
import { getGameBySlug, Html5Game } from '@/lib/html5-games'
import Html5GameCard from '@/components/Html5GameCard'

export default function FavoritesPage() {
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>([])
  const [favoriteGames, setFavoriteGames] = useState<Html5Game[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    loadFavorites()
  }, [])

  const loadFavorites = () => {
    const slugs = getFavorites()
    setFavoriteSlugs(slugs)
    const games = slugs.map(slug => getGameBySlug(slug)).filter(Boolean) as Html5Game[]
    setFavoriteGames(games)
  }

  const handleRemove = (slug: string) => {
    removeFavorite(slug)
    loadFavorites()
  }

  if (!mounted) {
    return (
      <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0a0910 0%, #13121c 100%)' }}>
        <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#0a0910]/90 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display font-bold text-xl text-white">Xavrito</span>
          </Link>
        </nav>
        <div className="pt-32 px-4 text-center">
          <div className="animate-pulse text-white/50">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0a0910 0%, #13121c 100%)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#0a0910]/90 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2 group">
          <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="4" width="20" height="14" rx="2" fill="#A78BFA"/>
            <polygon points="13,8 13,14 19,11" fill="#1C1917"/>
            <rect x="6" y="20" width="20" height="8" rx="1" fill="#374151"/>
            <circle cx="11" cy="24" r="2" fill="#6B7280"/>
            <rect x="10.3" y="20" width="1.4" height="5" rx="0.5" fill="#9CA3AF"/>
            <circle cx="18" cy="23" r="1.2" fill="#EF4444"/>
            <circle cx="22" cy="25" r="1.2" fill="#3B82F6"/>
          </svg>
          <span className="font-display font-bold text-xl text-white group-hover:text-purple-400 transition-colors">
            Xavrito
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          <Link href="/favorites" className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg">My Favorites</Link>
          <Link href="/#games" className="ml-2 px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white text-sm font-medium rounded-lg transition-colors">Play Now</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">❤️</span>
            <span className="font-mono text-[11px] tracking-[0.22em] text-red-400 uppercase">[ My Collection ]</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">My Favorites</h1>
          <p className="text-lg text-white/60 max-w-2xl">
            {favoriteGames.length > 0
              ? `${favoriteGames.length} game${favoriteGames.length > 1 ? 's' : ''} in your collection`
              : 'No favorites yet. Start adding games you love!'
            }
          </p>
        </div>
      </section>

      {/* Favorites Grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {favoriteGames.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-white/50">
                  Sorted by most recently added
                </p>
                <button
                  onClick={() => {
                    if (confirm('Remove all favorites?')) {
                      favoriteSlugs.forEach(slug => removeFavorite(slug))
                      loadFavorites()
                    }
                  }}
                  className="text-sm text-red-400/70 hover:text-red-400 transition-colors"
                >
                  Clear all
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {favoriteGames.map((game) => (
                  <div key={game.slug} className="relative">
                    <Html5GameCard game={game} />
                    <button
                      onClick={() => handleRemove(game.slug)}
                      className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white/70 hover:text-red-400 hover:border-red-400/50 transition-all z-10"
                      aria-label="Remove from favorites"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🎮</div>
              <h2 className="text-2xl font-bold text-white mb-4">No favorites yet</h2>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Start exploring our collection and tap the heart icon on games you love to save them here.
              </p>
              <Link
                href="/#games"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white font-medium rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Browse Games
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Tips Section */}
      {favoriteGames.length > 0 && (
        <section className="py-12 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-semibold text-white mb-2">Tip</h3>
                  <p className="text-sm text-white/50">
                    Your favorites are saved locally on this device. They won't appear if you switch browsers or devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Xavrito</span>
          </div>
          <p className="text-sm text-white/50">Free HTML5 games. No downloads. No signups.</p>
        </div>
      </footer>
    </div>
  )
}
