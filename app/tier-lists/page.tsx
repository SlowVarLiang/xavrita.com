import { Metadata } from 'next'
import Link from 'next/link'
import { games } from '@/lib/games-data'

export const metadata: Metadata = {
  title: 'Tier Lists - Xavrito',
  description: 'Browse comprehensive tier lists for popular games. Compare weapons, characters, Pals, builds, and more.',
  alternates: {
    canonical: 'https://xavrita.com/tier-lists/',
  },
}

const tierLists = [
  { game: 'Once Human', slug: 'once-human', category: 'Weapons & Builds' },
  { game: 'Core Keeper', slug: 'core-keeper', category: 'Tools & Pickaxes' },
  { game: 'V Rising', slug: 'v-rising', category: 'Spells' },
  { game: 'Palworld', slug: 'palworld', category: 'Pals' },
  { game: 'Enshrouded', slug: 'enshrouded', category: 'Weapons' },
  { game: 'Soulmask', slug: 'soulmask', category: 'Masks' },
]

export default function TierListsPage() {
  return (
    <>
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Tier Lists</h1>
          <p className="text-xl text-gray-400 mb-8">
            Compare and rank the best options across popular games.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tierLists.map((item) => (
              <Link
                key={`${item.slug}-${item.category}`}
                href={`/guides/?game=${item.slug}&category=Tier+Lists/`}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-indigo-500 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">
                    {games.find(g => g.slug === item.slug)?.emoji || '🎮'}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {item.game}
                    </h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium">
                  View Tier List
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">How Tier Lists Are Created</h2>
            <p className="text-gray-400 mb-6">
              Our tier lists are based on extensive testing, community feedback, and analysis of game data. We regularly update rankings to reflect meta changes and new content.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">S+ Tier: Best</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">A Tier: Great</span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">B Tier: Good</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full">C Tier: Average</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
