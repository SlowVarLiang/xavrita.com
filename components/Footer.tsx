import Link from 'next/link'
import { html5Games, categories } from '@/lib/html5-games'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const featuredGames = html5Games.filter(g => g.featured).slice(0, 6)

  return (
    <footer className="bg-void border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-display font-bold text-text-primary">Xavrito</span>
              <span className="text-xs font-mono text-text-muted bg-surface px-2 py-0.5 rounded border border-border">
                Games
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-4 max-w-sm">
              Free HTML5 browser games you can play instantly. No downloads required.
            </p>
            {/* Status Indicator */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-text-muted">All systems operational</span>
            </div>
          </div>

          {/* Games Column */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-text-primary text-sm mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
              Featured Games
            </h4>
            <ul className="space-y-1.5">
              {featuredGames.map((game) => (
                <li key={game.slug}>
                  <Link
                    href={`/games/${game.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-cyan transition-colors"
                  >
                    <span>{game.emoji}</span>
                    <span>{game.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div className="md:col-span-2">
            <h4 className="font-display font-semibold text-text-primary text-sm mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-amber"></span>
              Categories
            </h4>
            <ul className="space-y-1.5">
              {categories.filter(c => c !== 'All').map((category) => (
                <li key={category}>
                  <Link href={`/games?category=${encodeURIComponent(category)}`} className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-text-primary text-sm mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-text-muted"></span>
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/games" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  All Games
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
            <span>© {currentYear} Xavrito</span>
            <span className="w-px h-3 bg-border"></span>
            <span>All rights reserved</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <span>Free HTML5 games</span>
            <span className="text-accent-violet">◆</span>
            <span>No download</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
