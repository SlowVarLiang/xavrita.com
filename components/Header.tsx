import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
              <span className="text-lg">🎮</span>
            </div>
            <span className="font-display font-bold text-xl text-white group-hover:text-violet-300 transition-colors">
              Xavrito
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
              Games
            </Link>
            <Link
              href="/"
              className="px-4 py-1.5 bg-violet-500/20 text-violet-300 rounded-full text-sm font-medium hover:bg-violet-500/30 transition-colors border border-violet-500/30"
            >
              Play Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
