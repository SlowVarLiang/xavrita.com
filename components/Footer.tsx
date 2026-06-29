import Link from 'next/link'
import { games } from '@/lib/games-data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
                v2.0
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-4 max-w-sm">
              Your command center for mastering the latest games. 
              Comprehensive guides, interactive tools, and detailed wikis.
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
              Games
            </h4>
            <ul className="space-y-1.5">
              {games.slice(0, 6).map((game) => (
                <li key={game.slug}>
                  <Link 
                    href={game.external || `/games/${game.slug}`}
                    {...(game.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-cyan transition-colors"
                  >
                    <span>{game.emoji}</span>
                    <span>{game.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-2">
            <h4 className="font-display font-semibold text-text-primary text-sm mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-amber"></span>
              Resources
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/guides/" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  All Guides
                </Link>
              </li>
              <li>
                <Link href="/wiki/" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  Wikis
                </Link>
              </li>
              <li>
                <Link href="/tools/" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  Interactive Tools
                </Link>
              </li>
              <li>
                <Link href="/tier-lists/" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  Tier Lists
                </Link>
              </li>
              <li>
                <Link href="/maps/" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  Maps
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-text-primary text-sm mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-text-muted"></span>
              Legal
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/about/" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy/" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/dmca/" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  DMCA
                </Link>
              </li>
              <li>
                <Link href="/cookies/" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
                  Cookies
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
            <span>Built for gamers</span>
            <span className="text-accent-violet">◆</span>
            <span>by gamers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
