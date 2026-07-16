import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Game Guides - Xavrito',
  description: 'In-depth game guides, builds, and strategies for popular games. Each guide comes with a themed HTML5 mini game to test your skills.',
}

const gameGuides = [
  {
    slug: 'once-human-best-builds',
    title: 'Once Human',
    subtitle: 'Best Builds Guide',
    category: 'Survival',
    genre: 'Survival / Open World',
    excerpt: 'Master Once Human with the best weapon builds, perk recommendations, and survival strategies. Includes themed mini game.',
    emoji: '🎯',
    gradient: 'from-orange-600 to-red-700',
    accentColor: '#ff6b35',
    hasMiniGame: true,
    miniGameSlug: 'mutant-survival',
    image: '/images/once-human/hero_wide.png',
    updatedAt: '2026-07-15',
    externalUrl: null,
  },
  {
    slug: 'solateria',
    title: 'Solateria',
    subtitle: 'Guides & Strategy',
    category: 'Action RPG',
    genre: 'Action / Soulslike',
    excerpt: 'Comprehensive guides for Solateria — boss strategies, build recommendations, collectibles, and Pyron combat system breakdown.',
    emoji: '⚔️',
    gradient: 'from-amber-600 to-orange-700',
    accentColor: '#f97316',
    hasMiniGame: true,
    miniGameSlug: 'perfect-parry',
    image: '',
    updatedAt: '2026-07-15',
    externalUrl: 'https://solateria.com',
  },
  {
    slug: 'rift-wizard-3',
    title: 'Rift Wizard 3',
    subtitle: 'Beginner & Crafting Guides',
    category: 'Roguelike',
    genre: 'Strategy / Dungeon Crawler',
    excerpt: 'Deep strategy guides for Rift Wizard 3 — class builds, crafting mechanics, forge system, and boss fight tactics.',
    emoji: '🧙',
    gradient: 'from-purple-600 to-indigo-700',
    accentColor: '#8b5cf6',
    hasMiniGame: false,
    miniGameSlug: '',
    image: '',
    updatedAt: '2026-07-15',
    externalUrl: 'https://riftwizard3.com',
  },
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
        <div className="max-w-6xl mx-auto text-center">
          <span className="font-mono text-[11px] tracking-[0.22em] text-purple-400 uppercase mb-4 block">[ Strategy Hub ]</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Game Guides
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Comprehensive strategy guides for popular games. Each guide includes a themed HTML5 mini game to practice what you learn.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="text-purple-400">📚</span>
              <span className="text-white/70 text-sm">{gameGuides.length} Game Guides</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="text-orange-400">🎮</span>
              <span className="text-white/70 text-sm">{gameGuides.filter(g => g.hasMiniGame).length} Mini Games</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {gameGuides.map((guide) => {
              const href = guide.externalUrl || `/guides/${guide.slug}/`
              const isExternal = !!guide.externalUrl
              const Wrapper = isExternal ? 'a' : Link
              const wrapperProps = isExternal
                ? { href, target: '_blank', rel: 'noopener noreferrer' }
                : { href }

              return (
                <Wrapper
                  key={guide.slug}
                  {...wrapperProps}
                  className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  {guide.image ? (
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${guide.gradient} opacity-30`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13121c] via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`px-3 py-1 bg-gradient-to-r ${guide.gradient} text-white text-xs font-semibold rounded-full shadow-lg`}>
                      {guide.category}
                    </span>
                    {guide.hasMiniGame && (
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-orange-400 text-xs font-medium rounded-full border border-orange-500/30">
                        🎮 +Mini Game
                      </span>
                    )}
                  </div>

                  {/* Emoji */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-black/40 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl border border-white/10">
                    {guide.emoji}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {guide.title}
                    </h2>
                    <span className="text-white/50 text-sm">{guide.subtitle}</span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/40">{guide.genre}</span>
                      <span className="text-xs text-white/30">•</span>
                      <span className="text-xs text-white/40">
                        {new Date(guide.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <span className="text-sm text-purple-400 font-medium group-hover:underline flex items-center gap-1">
                      View Guide
                      {isExternal ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </span>
                  </div>
                </div>
              </Wrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 border-t border-white/10" style={{ background: '#0a0910' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want a Guide for Your Favorite Game?</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            We create in-depth strategy guides paired with themed mini games. Request a game guide and help us grow the collection.
          </p>
          <Link
            href="/#games"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-500/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play Mini Games
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
