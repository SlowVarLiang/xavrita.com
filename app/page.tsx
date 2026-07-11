'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { html5Games, categories, getFeaturedGame } from '@/lib/html5-games'
import Html5GameCard from '@/components/Html5GameCard'

const featuredGame = getFeaturedGame()

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredGames = useMemo(() => {
    return html5Games.filter((game) => {
      const matchesCategory = activeCategory === 'All' || game.category === activeCategory
      const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-violet-950/50 via-void to-void overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/20 border border-violet-500/30 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-violet-300">Play instantly in your browser</span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                Free HTML5 Games
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-400">No downloads. No signups.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {html5Games.length}+ browser games. Action, puzzle, io, arcade and more.
            </p>
          </div>

          {/* Featured Game */}
          {featuredGame && (
            <div className="max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                  <div className="aspect-video relative">
                    <img
                      src={featuredGame.thumbnail}
                      alt={featuredGame.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                    {/* Play Button Overlay */}
                    <Link
                      href={`/games/${featuredGame.slug}`}
                      className="absolute inset-0 flex items-center justify-center group/play"
                    >
                      <div className="w-20 h-20 rounded-full bg-violet-500/90 flex items-center justify-center shadow-2xl shadow-violet-500/50 transform transition-all duration-300 group-hover/play:scale-110">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </Link>
                  </div>

                  {/* Info Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-violet-500/30 text-violet-300 rounded text-xs font-medium">
                          {featuredGame.category}
                        </span>
                        <span className="text-white font-semibold text-lg">{featuredGame.name}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{featuredGame.description}</p>
                    </div>
                    <Link
                      href={`/games/${featuredGame.slug}`}
                      className="hidden sm:flex items-center gap-2 px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white rounded-lg font-medium transition-colors"
                    >
                      Play
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Category Pills */}
      <section className="sticky top-0 z-40 bg-void/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}

            {/* Search */}
            <div className="flex-1 min-w-[200px] max-w-[300px] ml-auto">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12 px-4 sm:px-6 bg-void">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-8 rounded-full bg-gradient-to-b from-violet-500 to-cyan-500" />
              <h2 className="font-display text-xl font-bold text-white">
                {activeCategory === 'All' ? 'All Games' : activeCategory}
              </h2>
              <span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded-full text-xs">
                {filteredGames.length}
              </span>
            </div>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredGames.map((game) => (
                <Html5GameCard key={game.slug} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-2xl bg-slate-800/50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">No games found</h3>
              <p className="text-slate-500 mb-4">Try a different search or category</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                className="px-4 py-2 bg-violet-500 text-white rounded-lg text-sm hover:bg-violet-400 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-void to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-5 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Instant Play</h3>
                <p className="text-sm text-slate-400">Click, load, play. No waiting around.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">100% Free</h3>
                <p className="text-sm text-slate-400">Zero cost, always. No hidden stuff.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Safe & Secure</h3>
                <p className="text-sm text-slate-400">No malware, no sketchy ads.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  )
}
