'use client'

import { useState } from 'react'
import Link from 'next/link'
import { html5Games, categories } from '@/lib/html5-games'

function ExternalLinkIcon() {
  return (
    <svg className="w-3 h-3 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  )
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const featuredGames = html5Games.filter(g => g.featured).slice(0, 6)

  return (
    <header className="bg-void/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-display font-bold text-text-primary group-hover:text-accent-violet transition-colors">
              Xavrito
            </span>
            <span className="hidden sm:inline text-xs font-mono text-text-muted bg-surface px-2 py-0.5 rounded border border-border">
              Games
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-surface"
            >
              Home
            </Link>

            {/* Games Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('games')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-sm text-text-primary hover:text-accent-violet transition-colors rounded-lg hover:bg-surface flex items-center gap-1.5">
                Games
                <svg className={"w-4 h-4 transition-transform " + (activeDropdown === 'games' ? 'rotate-180' : '')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'games' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-surface border border-border rounded-xl shadow-2xl shadow-black/50 p-4">
                  <div className="mb-3 pb-3 border-b border-border">
                    <Link href="/games" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-void transition-all text-sm text-accent-violet font-medium">
                      View All Games
                      <span>→</span>
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {featuredGames.map((game) => (
                      <Link
                        key={game.slug}
                        href={`/games/${game.slug}`}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-void group transition-all"
                      >
                        <span className="text-lg">{game.emoji}</span>
                        <span className="text-sm text-text-muted group-hover:text-text-primary transition-colors truncate">{game.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('categories')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-sm text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-surface flex items-center gap-1.5">
                Categories
                <svg className={"w-4 h-4 transition-transform " + (activeDropdown === 'categories' ? 'rotate-180' : '')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'categories' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-surface border border-border rounded-xl shadow-2xl shadow-black/50 p-3">
                  <div className="grid grid-cols-2 gap-1">
                    {categories.filter(c => c !== 'All').map((category) => (
                      <Link
                        key={category}
                        href={`/games?category=${encodeURIComponent(category)}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-text-muted hover:text-text-primary hover:bg-void transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-violet opacity-50"></span>
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/games"
              className="px-4 py-2 text-sm text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-surface"
            >
              All Games
            </Link>
          </div>

          {/* Search Button */}
          <div className="hidden md:flex items-center gap-2">
            <button className="p-2 text-text-muted hover:text-text-primary bg-surface border border-border rounded-lg hover:border-accent-violet/50 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-muted hover:text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-1">
            <Link href="/" className="block px-4 py-2.5 text-sm text-text-muted hover:text-text-primary hover:bg-surface rounded-lg">
              Home
            </Link>
            <div className="px-4 py-2.5">
              <div className="text-xs font-mono text-text-muted mb-2">Featured Games</div>
              <div className="grid grid-cols-2 gap-1">
                {featuredGames.map((game) => (
                  <Link
                    key={game.slug}
                    href={`/games/${game.slug}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface"
                  >
                    <span>{game.emoji}</span>
                    <span className="text-sm truncate">{game.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="px-4 py-2.5">
              <div className="text-xs font-mono text-text-muted mb-2">Categories</div>
              <div className="grid grid-cols-2 gap-1">
                {categories.filter(c => c !== 'All').map((category) => (
                  <Link
                    key={category}
                    href={`/games?category=${encodeURIComponent(category)}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface text-sm"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t border-border pt-4 space-y-1">
              <Link href="/games" className="block px-4 py-2.5 text-sm text-text-muted hover:text-text-primary hover:bg-surface rounded-lg">
                All Games
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
