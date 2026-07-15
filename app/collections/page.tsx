'use client'

import Link from 'next/link'
import { html5Games } from '@/lib/html5-games'
import { getPopulatedCollections } from '@/lib/collections'
import CollectionCard from '@/components/CollectionCard'

export default function CollectionsPage() {
  const collections = getPopulatedCollections(html5Games)

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0a0910 0%, #13121c 100%)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#0a0910]/90 backdrop-blur-xl">
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
          <span className="font-display font-bold text-xl text-white group-hover:text-purple-400 transition-colors">
            Xavrito
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          <Link href="/collections" className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg">Collections</Link>
          <Link href="/#games" className="ml-2 px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white text-sm font-medium rounded-lg transition-colors">Play Now</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📚</span>
            <span className="font-mono text-[11px] tracking-[0.22em] text-purple-400 uppercase">[ Browse ]</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Game Collections</h1>
          <p className="text-lg text-white/60 max-w-2xl">
            {collections.length} curated collections for every mood and moment
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
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
