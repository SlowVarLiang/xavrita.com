'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getRecentGames, addRecentGame } from '@/lib/favorites'
import { getGameBySlug, Html5Game } from '@/lib/html5-games'

export default function RecentGames() {
  const [recentSlugs, setRecentSlugs] = useState<string[]>([])
  const [recentGames, setRecentGames] = useState<Html5Game[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const slugs = getRecentGames()
    setRecentSlugs(slugs)
    const games = slugs.map(slug => getGameBySlug(slug)).filter(Boolean) as Html5Game[]
    setRecentGames(games)
  }, [])

  if (!mounted || recentGames.length === 0) {
    return null
  }

  return (
    <section className="py-12 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Continue Playing
          </h2>
          <span className="text-sm text-white/50">Pick up where you left off</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {recentGames.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-1"
            >
              <div className="absolute top-2 right-2 z-10">
                <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white/80">
                  ▶ Resume
                </span>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={game.thumbnail}
                  alt={game.name}
                  width={320}
                  height={240}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{game.emoji}</span>
                  <h3 className="font-medium text-white text-sm group-hover:text-purple-400 transition-colors truncate">
                    {game.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
