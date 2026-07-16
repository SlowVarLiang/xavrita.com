import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mutant Survival Guide - Xavrito',
  description: 'Master the Mutant Survival mini game. Learn combat strategies, mutant patterns, and high score techniques in this Once Human themed survival shooter.',
}

export default function MutantSurvivalGuidePage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #1a0a0a 0%, #0d0808 100%)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 border-b border-orange-900/30" style={{ background: 'rgba(15, 5, 5, 0.9)', backdropFilter: 'blur(12px)' }}>
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
      <section className="pt-32 pb-12 px-4 sm:px-6 border-b border-orange-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Survival Combat</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Mutant Survival Guide
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Fight off endless waves of mutants in this Once Human themed survival shooter. Learn enemy patterns, optimal positioning, and high score strategies.
          </p>
        </div>
      </section>

      {/* Game Embed */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">🎮 Play the Game</h2>
            <p className="text-white/50 text-sm">Click to start • WASD to move • Mouse to aim and shoot</p>
          </div>
          <div className="relative rounded-lg overflow-hidden border-2 border-orange-500/50 shadow-lg shadow-orange-500/20">
            <iframe
              src="/games/mutant-survival/index.html"
              width="480"
              height="360"
              frameBorder="0"
              allow="fullscreen"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Getting Started */}
            <div className="bg-white/5 border border-orange-900/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-sm">1</span>
                Getting Started
              </h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span><strong className="text-white">WASD / Arrow Keys</strong> — Move your character around the arena to dodge incoming mutants</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span><strong className="text-white">Mouse</strong> — Aim your weapon. The orange circle always faces your cursor</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span><strong className="text-white">Left Click</strong> — Fire bullets. Rate of fire is limited, so make each shot count</span>
                </li>
              </ul>
            </div>

            {/* Enemy Types */}
            <div className="bg-white/5 border border-orange-900/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-sm">2</span>
                Enemy Types
              </h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex gap-3">
                  <span className="text-red-400 mt-1">●</span>
                  <span><strong className="text-white">Standard Mutant</strong> — Red, medium-sized. Takes 1-3 hits depending on wave. Deals 10 damage on contact.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 mt-1">●</span>
                  <span><strong className="text-white">Brute Mutant</strong> — Larger, brownish. Takes more hits and deals 15 damage. Prioritize clearing these!</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span><strong className="text-white">Eye Glow</strong> — All mutants have glowing eyes that track your position. Use this to predict their movement.</span>
                </li>
              </ul>
            </div>

            {/* Combat Tips */}
            <div className="bg-white/5 border border-orange-900/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-sm">3</span>
                Combat Tips
              </h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span><strong className="text-white">Kite Enemies</strong> — Keep moving! Stand still and you'll get surrounded quickly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span><strong className="text-white">Lead Shots</strong> — Mutants wobble as they move. Aim slightly ahead of their path</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span><strong className="text-white">Prioritize Brutes</strong> — Their higher HP and damage make them the biggest threat</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span><strong className="text-white">Wave Clear Bonus</strong> — Surviving more waves multiplies your score significantly</span>
                </li>
              </ul>
            </div>

            {/* Scoring */}
            <div className="bg-white/5 border border-orange-900/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-sm">4</span>
                Scoring System
              </h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex gap-3">
                  <span className="text-yellow-400">★</span>
                  <span><strong className="text-white">Standard Kill</strong> — 10 points × current wave number</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">★</span>
                  <span><strong className="text-white">Brute Kill</strong> — 25 points × current wave number</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span><strong className="text-white">Wave Progression</strong> — Each wave spawns more mutants with higher HP</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span><strong className="text-white">100% Health Bonus</strong> — The higher your health when clearing waves, the safer you are for the next</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Related Games */}
      <section className="py-12 px-4 sm:px-6 border-t border-orange-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">More Once Human Content</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/guides/once-human-best-builds/"
              className="group flex items-center gap-4 p-4 bg-white/5 border border-orange-900/30 rounded-xl hover:bg-white/10 hover:border-orange-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-2xl">
                🎯
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">Once Human Best Builds</h3>
                <p className="text-xs text-white/50">Guide</p>
              </div>
            </Link>
            <a
              href="https://oncehuman.game"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-white/5 border border-orange-900/30 rounded-xl hover:bg-white/10 hover:border-orange-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-2xl">
                🌐
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">Official Once Human Site</h3>
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
