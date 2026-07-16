import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Mutant Survival Guide - Xavrito',
  description: 'Master the Mutant Survival mini game. Learn combat strategies, mutant patterns, and high score techniques in this Once Human themed survival shooter.',
}

const guideSections = [
  {
    id: 'controls',
    emoji: '🎮',
    title: 'Controls',
    color: '#ff6b35',
    items: [
      { label: 'Move', desc: 'WASD / Arrow Keys' },
      { label: 'Aim', desc: 'Mouse Cursor' },
      { label: 'Shoot', desc: 'Left Click' },
    ]
  },
  {
    id: 'enemies',
    emoji: '👾',
    title: 'Enemies',
    color: '#ff4444',
    items: [
      { label: 'Standard', desc: 'Red mutants, 1-3 hits to kill' },
      { label: 'Brute', desc: 'Large brown mutants, more HP & damage' },
      { label: 'Eyes', desc: 'Glowing eyes track your position' },
    ]
  },
  {
    id: 'combat',
    emoji: '⚔️',
    title: 'Combat',
    color: '#ffaa00',
    items: [
      { label: 'Kite', desc: 'Keep moving to avoid being surrounded' },
      { label: 'Lead', desc: 'Aim ahead of wobbling mutants' },
      { label: 'Prioritize', desc: 'Clear Brutes first' },
    ]
  },
  {
    id: 'scoring',
    emoji: '🏆',
    title: 'Scoring',
    color: '#ffdd00',
    items: [
      { label: 'Standard Kill', desc: '10 pts × wave' },
      { label: 'Brute Kill', desc: '25 pts × wave' },
      { label: 'Wave Clear', desc: 'More waves = higher multiplier' },
    ]
  },
]

export default function MutantSurvivalGuidePage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #1a0a0a 0%, #0d0808 100%)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 border-b border-orange-900/30" style={{ background: 'rgba(15, 5, 5, 0.92)', backdropFilter: 'blur(12px)' }}>
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

      {/* Hero with Background Image */}
      <section className="relative pt-24 pb-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/once-human/hero_wide.png"
            alt="Once Human"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0808]/80 to-[#0d0808]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-xs font-medium uppercase tracking-wider">Survival Combat</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight" style={{ textShadow: '0 0 60px rgba(255,68,0,0.5)' }}>
            Mutant Survival
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Fight endless waves of mutants in this Once Human themed survival shooter. How long can you survive?
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href="/games/mutant-survival/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-orange-500/30"
            >
              <span>▶</span>
              Play Game
            </a>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all border border-white/20"
            >
              ← All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Game Embed */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border-2 border-orange-500/40 shadow-2xl shadow-orange-500/10">
            <iframe
              src="/games/mutant-survival/index.html"
              width="480"
              height="360"
              frameBorder="0"
              allow="fullscreen"
              className="w-full"
              style={{ display: 'block' }}
            />
          </div>
          <p className="text-center text-white/40 text-sm mt-4">
            Click to start • WASD to move • Mouse to aim • Click to fire
          </p>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guideSections.map((section) => (
              <div
                key={section.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-orange-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${section.color}20`, border: `1px solid ${section.color}40` }}
                  >
                    {section.emoji}
                  </div>
                  <h3 className="font-bold text-white text-lg" style={{ color: section.color }}>
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex flex-col gap-0.5">
                      <span className="text-white font-medium text-sm">{item.label}</span>
                      <span className="text-white/50 text-xs">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enemy Visual */}
      <section className="py-12 px-4 sm:px-6 border-t border-orange-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Enemy Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Standard Mutant */}
            <div className="relative bg-gradient-to-br from-red-900/20 to-red-950/40 border border-red-900/40 rounded-2xl p-6 overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 opacity-20">
                <svg viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="30" fill="#ff4444"/>
                  <circle cx="32" cy="35" r="6" fill="#ff0000"/>
                  <circle cx="48" cy="35" r="6" fill="#ff0000"/>
                  <circle cx="32" cy="35" r="3" fill="#000"/>
                  <circle cx="48" cy="35" r="3" fill="#000"/>
                </svg>
              </div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 mb-4 flex items-center justify-center shadow-lg shadow-red-500/30" style={{ boxShadow: '0 0 30px rgba(255,68,68,0.4)' }}>
                  <svg viewBox="0 0 40 40" className="w-10 h-10">
                    <circle cx="20" cy="20" r="14" fill="#cc2222"/>
                    <circle cx="15" cy="17" r="3" fill="#ff0000"/>
                    <circle cx="25" cy="17" r="3" fill="#ff0000"/>
                    <circle cx="15" cy="17" r="1.5" fill="#000"/>
                    <circle cx="25" cy="17" r="1.5" fill="#000"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Standard Mutant</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Health</span>
                    <span className="text-white font-medium">1-3 hits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Damage</span>
                    <span className="text-white font-medium">10 HP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Points</span>
                    <span className="text-yellow-400 font-medium">10 × wave</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brute Mutant */}
            <div className="relative bg-gradient-to-br from-amber-900/20 to-amber-950/40 border border-amber-900/40 rounded-2xl p-6 overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 opacity-20">
                <svg viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="30" fill="#8B4513"/>
                  <circle cx="30" cy="34" r="6" fill="#ff8800"/>
                  <circle cx="50" cy="34" r="6" fill="#ff8800"/>
                  <circle cx="30" cy="34" r="3" fill="#000"/>
                  <circle cx="50" cy="34" r="3" fill="#000"/>
                </svg>
              </div>
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 mb-4 flex items-center justify-center shadow-lg shadow-amber-500/30" style={{ boxShadow: '0 0 30px rgba(255,136,0,0.4)' }}>
                  <svg viewBox="0 0 50 50" className="w-12 h-12">
                    <circle cx="25" cy="25" r="18" fill="#884400"/>
                    <circle cx="18" cy="21" r="4" fill="#ff8800"/>
                    <circle cx="32" cy="21" r="4" fill="#ff8800"/>
                    <circle cx="18" cy="21" r="2" fill="#000"/>
                    <circle cx="32" cy="21" r="2" fill="#000"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-2">Brute Mutant</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Health</span>
                    <span className="text-white font-medium">4-6 hits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Damage</span>
                    <span className="text-white font-medium">15 HP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Points</span>
                    <span className="text-yellow-400 font-medium">25 × wave</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Banner */}
      <section className="py-12 px-4 sm:px-6 border-t border-orange-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                Pro Tips
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-3 bg-orange-500/20 rounded-xl flex items-center justify-center text-2xl">
                    🏃
                  </div>
                  <h3 className="font-semibold text-white mb-1">Keep Moving</h3>
                  <p className="text-white/50 text-sm">Standing still is death. Kite enemies in circles</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-3 bg-orange-500/20 rounded-xl flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <h3 className="font-semibold text-white mb-1">Lead Your Shots</h3>
                  <p className="text-white/50 text-sm">Mutants wobble. Aim ahead of their path</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-3 bg-orange-500/20 rounded-xl flex items-center justify-center text-2xl">
                    ⚠️
                  </div>
                  <h3 className="font-semibold text-white mb-1">Kill Brutes First</h3>
                  <p className="text-white/50 text-sm">Their high damage melts your health fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 px-4 sm:px-6 border-t border-orange-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">More Once Human</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/guides/once-human-best-builds/"
              className="group flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-orange-500/50 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl flex items-center justify-center text-2xl border border-orange-500/30">
                🎯
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">Once Human Best Builds</h3>
                <p className="text-xs text-white/50">Strategy guide with game images and videos</p>
              </div>
            </Link>
            <a
              href="https://oncehuman.game"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-orange-500/50 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl flex items-center justify-center text-2xl border border-orange-500/30">
                🌐
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">Official Once Human</h3>
                <p className="text-xs text-white/50">oncehuman.game</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-orange-900/30 px-4 sm:px-6 py-8">
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
