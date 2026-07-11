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
      {featuredGame && (
        <section className="relative bg-void overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-violet/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Game Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-full mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse"></span>
                  <span className="text-xs font-mono text-text-muted">Staff Pick</span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
                  {featuredGame.name}
                </h1>
                <p className="text-text-muted text-lg mb-6 leading-relaxed">
                  {featuredGame.description}
                </p>
                <Link
                  href={`/games/${featuredGame.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-violet hover:bg-accent-violet/90 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-accent-violet/25 hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play Now
                </Link>
              </div>

              {/* Game Preview */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-2xl shadow-accent-violet/20">
                <img
                  src={featuredGame.thumbnail}
                  alt={featuredGame.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Games Catalog */}
      <section className="py-16 px-4 sm:px-6 bg-void">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">All Games</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
                Game Library
              </h2>
            </div>

            {/* Search */}
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-violet/50 transition-colors w-full sm:w-64"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-accent-violet text-white shadow-lg shadow-accent-violet/25'
                    : 'bg-surface border border-border text-text-muted hover:text-text-primary hover:border-accent-violet/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Games Grid */}
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredGames.map((game) => (
                <Html5GameCard key={game.slug} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-2">No games found</h3>
              <p className="text-sm text-text-muted">Try adjusting your search or filter</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                className="mt-4 px-4 py-2 bg-accent-violet text-white rounded-lg text-sm hover:bg-accent-violet/90 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
