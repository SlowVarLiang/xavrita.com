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
      {/* Hero - Featured Game */}
      {featuredGame && (
        <section className="bg-[#FAFAF9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F97316]/10 text-[#F97316] rounded-full text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></span>
                  Featured Game
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] mb-4 leading-[1.1]">
                  {featuredGame.name}
                </h1>
                <p className="text-lg text-[#78716C] mb-6 leading-relaxed">
                  {featuredGame.description}
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href={`/games/${featuredGame.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Free
                  </Link>
                  <span className="text-sm text-[#78716C]">
                    {featuredGame.category}
                  </span>
                </div>
              </div>

              {/* Poster */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10">
                  <img
                    src={featuredGame.thumbnail}
                    alt={featuredGame.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/20 to-transparent" />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F97316]/10 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="bg-white border-y border-[#E7E5E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-sm text-[#78716C] font-medium flex-shrink-0 mr-2">Browse:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[#1C1917] text-white shadow-md'
                    : 'bg-[#F5F5F4] text-[#78716C] hover:bg-[#E7E5E4] hover:text-[#1C1917]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="bg-[#FAFAF9] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold text-[#1C1917]">
              {activeCategory === 'All' ? 'All Games' : activeCategory}
            </h2>
            <span className="text-sm text-[#78716C]">
              {filteredGames.length} games
            </span>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredGames.map((game) => (
                <Html5GameCard key={game.slug} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-[#F5F5F4] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#A8A29E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-[#1C1917] mb-2">No games found</h3>
              <p className="text-[#78716C] mb-4">Try a different search or category</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                className="px-4 py-2 bg-[#F97316] text-white rounded-lg text-sm hover:bg-[#EA580C] transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white border-t border-[#E7E5E4] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-[#1C1917] mb-1">Instant Play</h3>
              <p className="text-sm text-[#78716C]">No downloads, no signups. Just click and play.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-[#1C1917] mb-1">100% Free</h3>
              <p className="text-sm text-[#78716C]">Always free, forever. No hidden costs.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-[#1C1917] mb-1">Safe & Secure</h3>
              <p className="text-sm text-[#78716C]">No malware, no sketchy ads. Just games.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
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
