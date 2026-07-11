import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎮</span>
            <span className="font-display font-bold text-xl text-text-primary">Xavrito</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/games" className="text-sm text-text-muted hover:text-text-primary transition-colors">
              All Games
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
