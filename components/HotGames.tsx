'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getFavorites, getHotGames } from '@/lib/favorites'
import { html5Games, Html5Game } from '@/lib/html5-games'
import FavoritesButton from './FavoritesButton'

export default function HotGames() {
  const [hotGames, setHotGames] = useState<Html5Game[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get hot games based on user favorites + recency
    const hot = getHotGames(html5Games, 10)
    setHotGames(hot)
  }, [])

  if (!mounted) {
    return null
  }

  // Only show if we have some games that user has interacted with
  const favorites = getFavorites()
  const hasData = favorites.length > 0

  if (!hasData) {
    return null
  }

  return (
    <section className="py-12 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">🔥</span>
            <h2 className="text-2xl font-bold text-white">Hot Right Now</h2>
          </div>
          <span className="text-sm text-white/50">Based on your activity</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {hotGames.map((game, index) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-1"
            >
              {index < 3 && (
                <div className="absolute top-2 left-2 z-10">
                  <span className={`text-xs px-2 py-1 backdrop-blur-sm rounded-full font-medium ${
                    index === 0 ? 'bg-orange-500/90 text-white' :
                    index === 1 ? 'bg-gray-400/90 text-white' :
                    'bg-amber-600/90 text-white'
                  }`}>
                    #{index + 1}
                  </span>
                </div>
              )}
              <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <FavoritesButton slug={game.slug} size="sm" />
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={game.thumbnail}
                  alt={game.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{game.emoji}</span>
                  <h3 className="font-medium text-white text-sm group-hover:text-purple-400 transition-colors truncate">
                    {game.name}
                  </h3>
                </div>
                <p className="text-xs text-white/50">{game.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
