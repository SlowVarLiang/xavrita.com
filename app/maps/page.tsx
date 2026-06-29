import { Metadata } from 'next'
import Link from 'next/link'
import { games } from '@/lib/games-data'

export const metadata: Metadata = {
  title: 'Interactive Maps - Xavrito',
  description: 'Explore interactive maps for popular games. Find item locations, boss positions, resource nodes, and hidden secrets.',
  alternates: {
    canonical: 'https://xavrita.com/maps/',
  },
}

const mapGames = [
  { game: 'Once Human', slug: 'once-human', features: ['Resource Nodes', 'Boss Locations', 'POIs'] },
  { game: 'Core Keeper', slug: 'core-keeper', features: ['Ore Deposits', 'Dungeon Entrances', 'Biomes'] },
  { game: 'V Rising', slug: 'v-rising', features: ['Blood Pools', 'Castle Locations', 'Dungeons'] },
  { game: 'Palworld', slug: 'palworld', features: ['Pal Spawns', 'Resources', 'Dungeons'] },
  { game: 'Dune: Awakening', slug: 'dune-awakening', features: ['Spice Locations', 'Settlements'] },
  { game: 'Soulmask', slug: 'soulmask', features: ['Tribe Locations', 'Resource Areas'] },
]

export default function MapsPage() {
  return (
    <>
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Interactive Maps</h1>
          <p className="text-xl text-gray-400 mb-8">
            Navigate game worlds with ease. Find locations, track resources, and discover secrets.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mapGames.map((item) => (
              <div
                key={item.slug}
                className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-indigo-500 transition-colors"
              >
                <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <span className="text-6xl opacity-50">
                    {games.find(g => g.slug === item.slug)?.emoji || '🗺️'}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">
                      {games.find(g => g.slug === item.slug)?.emoji || '🎮'}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{item.game}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/wiki/${item.slug}/`}
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center gap-1"
                  >
                    Coming Soon
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Interactive Map Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8">
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Markers</h3>
              <p className="text-gray-400 text-sm">Add your own pins and notes to track your progress.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Layer System</h3>
              <p className="text-gray-400 text-sm">Toggle between different map layers for resources, enemies, and more.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Share Maps</h3>
              <p className="text-gray-400 text-sm">Share your annotated maps with friends and the community.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
