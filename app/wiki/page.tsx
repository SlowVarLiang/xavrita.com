import { Metadata } from 'next'
import Link from 'next/link'
import { html5Games } from '@/lib/html5-games'

export const metadata: Metadata = {
  title: 'Game Wikis - Xavrito',
  description: 'Comprehensive wikis for popular HTML5 games. Item databases, game mechanics, character stats, tips, and more.',
}

export default function WikiPage() {
  const wikiGames = html5Games.slice(0, 56)

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0a0910 0%, #13121c 100%)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 border-b border-white/10" style={{ background: 'rgba(10, 9, 16, 0.9)', backdropFilter: 'blur(12px)' }}>
        <Link href="/" className="flex items-center gap-2 group">
          <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="4" width="20" height="14" rx="2" fill="#A78BFA"/>
            <polygon points="13,8 13,14 19,11" fill="#1C1917"/>
            <rect x="6" y="20" width="20" height="8" rx="1" fill="#374151"/>
            <circle cx="11" cy="24" r="2" fill="#6B7280"/>
            <rect x="10.3" y="20" width="1.4" height="5" rx="0.5" fill="#9CA3AF"/>
            <circle cx="18" cy="23" r="1.2" fill="#EF4444"/>
            <circle cx="22" cy="25" r="1.2" fill="#3B82F6"/>
          </svg>
          <span className="font-bold text-xl text-white group-hover:text-purple-400 transition-colors">Xavrito</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          <Link href="/wiki" className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg">Wiki</Link>
          <Link href="/guides" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Guides</Link>
          <Link href="/#games" className="ml-2 px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white text-sm font-medium rounded-lg transition-colors">Play Now</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-mono text-[11px] tracking-[0.22em] text-purple-400 uppercase mb-4 block">[ Knowledge Base ]</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Game Wikis</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Comprehensive databases for popular games. Game mechanics, tips, strategies, and more.
          </p>
        </div>
      </section>

      {/* Wiki Grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {wikiGames.map((game) => (
              <Link
                key={game.slug}
                href={`/wiki/${game.slug}/`}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={game.thumbnail}
                    alt={game.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{game.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors text-sm">
                        {game.name}
                      </h3>
                      <p className="text-xs text-white/50">{game.category}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs px-2 py-0.5 bg-white/10 text-white/60 rounded">Tips</span>
                    <span className="text-xs px-2 py-0.5 bg-white/10 text-white/60 rounded">Guides</span>
                    <span className="text-xs px-2 py-0.5 bg-white/10 text-white/60 rounded">Wiki</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Wiki Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '💡', title: 'Game Tips', desc: 'Expert tips and strategies for each game category.' },
              { icon: '📖', title: 'How to Play', desc: 'Detailed gameplay instructions and controls.' },
              { icon: '⚡', title: 'Strategy Guides', desc: 'Winning strategies for every game type.' },
              { icon: '✓', title: 'Proven Methods', desc: 'Tested techniques that actually work.' },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-sm text-white/50">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Xavrito</span>
          </div>
          <p className="text-sm text-white/50">Free HTML5 games. No downloads. No signups.</p>
        </div>
      </footer>
    </div>
  )
}
