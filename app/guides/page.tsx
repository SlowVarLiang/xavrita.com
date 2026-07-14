import { Metadata } from 'next'
import Link from 'next/link'
import { html5Games } from '@/lib/html5-games'

export const metadata: Metadata = {
  title: 'Game Guides - Xavrito',
  description: 'Comprehensive game guides, walkthroughs, and strategies for HTML5 games. Tips, tricks, and how-to-play guides for all game categories.',
}

const guidesData = [
  {
    slug: 'puzzle-mastery-guide',
    title: 'Puzzle Games: From Beginner to Master',
    category: 'Strategy',
    excerpt: 'Master puzzle games with these proven strategies. Learn pattern recognition, logical deduction, and advanced solving techniques.',
    updatedAt: '2026-07-14',
    emoji: '🧩',
    level: 'All Levels'
  },
  {
    slug: 'action-games-combat-guide',
    title: 'Action Games Combat Guide',
    category: 'Combat',
    excerpt: 'Dominate action games with expert combat tips. Master timing, combos, and enemy pattern recognition.',
    updatedAt: '2026-07-13',
    emoji: '⚔️',
    level: 'Intermediate'
  },
  {
    slug: 'arcade-high-score-guide',
    title: 'Arcade Games: High Score Strategies',
    category: 'Competition',
    excerpt: 'Become an arcade master! Learn optimal routes, combo building, and consistency techniques for top scores.',
    updatedAt: '2026-07-12',
    emoji: '🏆',
    level: 'All Levels'
  },
  {
    slug: 'racing-mastery-guide',
    title: 'Racing Games: Track Mastery Guide',
    category: 'Performance',
    excerpt: 'Master racing games with professional techniques. Learn racing lines, braking points, and shortcut discovery.',
    updatedAt: '2026-07-11',
    emoji: '🏎️',
    level: 'Advanced'
  },
  {
    slug: 'memory-training-guide',
    title: 'Memory Games: Brain Training Guide',
    category: 'Cognitive',
    excerpt: 'Improve your memory with proven techniques. Scientific approaches to pattern recognition and recall.',
    updatedAt: '2026-07-10',
    emoji: '🧠',
    level: 'All Levels'
  },
  {
    slug: 'stickman-fighting-guide',
    title: 'Stickman Games: Fighting Techniques',
    category: 'Combat',
    excerpt: 'Master stickman combat with fluid animations and physics-based fighting. From basic combos to advanced techniques.',
    updatedAt: '2026-07-09',
    emoji: '🦸',
    level: 'Beginner'
  },
  {
    slug: 'sports-games-strategy',
    title: 'Sports Games: Strategy & Tactics',
    category: 'Strategy',
    excerpt: 'Dominate sports games with strategic gameplay. Master timing, positioning, and advanced tactics.',
    updatedAt: '2026-07-08',
    emoji: '⚽',
    level: 'Intermediate'
  },
  {
    slug: 'simulation-games-guide',
    title: 'Simulation Games: Immersive Guide',
    category: 'Gameplay',
    excerpt: 'Get the most out of simulation games. Learn realistic mechanics, resource management, and progression tips.',
    updatedAt: '2026-07-07',
    emoji: '🎮',
    level: 'All Levels'
  }
]

export default function GuidesPage() {
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
          <Link href="/wiki" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Wiki</Link>
          <Link href="/guides" className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg">Guides</Link>
          <Link href="/#games" className="ml-2 px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white text-sm font-medium rounded-lg transition-colors">Play Now</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-mono text-[11px] tracking-[0.22em] text-purple-400 uppercase mb-4 block">[ Strategy Hub ]</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Game Guides</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Comprehensive guides, strategies, and walkthroughs for HTML5 games. Learn from experts and improve your gameplay.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidesData.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}/`}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{guide.emoji}</span>
                    <div>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded">{guide.category}</span>
                      <span className="ml-2 text-xs text-white/50">{guide.level}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors mb-2 text-lg">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-white/50">
                      {new Date(guide.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="text-xs text-purple-400 font-medium group-hover:underline">Read Guide →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Puzzle', emoji: '🧩' },
              { name: 'Action', emoji: '⚔️' },
              { name: 'Arcade', emoji: '🕹️' },
              { name: 'Racing', emoji: '🏎️' },
              { name: 'Memory', emoji: '🧠' },
              { name: 'Sports', emoji: '⚽' },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={`/wiki?category=${cat.name}`}
                className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all"
              >
                <span className="text-3xl">{cat.emoji}</span>
                <span className="text-sm font-medium text-white">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 border-t border-white/10" style={{ background: '#0a0910' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Test Your Skills?</h2>
          <p className="text-white/60 mb-8">Put these strategies to the test by playing our free HTML5 games.</p>
          <Link
            href="/#games"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-500/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Browse All Games
          </Link>
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
