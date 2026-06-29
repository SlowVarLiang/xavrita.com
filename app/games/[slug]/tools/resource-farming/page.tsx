import { Metadata } from 'next'
import Link from 'next/link'
import { getGameBySlug } from '@/lib/games-data'
import ResourceFarmingSimulator from './ResourceFarmingSimulator'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = getGameBySlug(params.slug)
  if (!game) return { title: 'Tool Not Found' }

  return {
    title: `${game.name} Resource Farming Simulator | Xavrito`,
    description: `Plan your optimal resource farming route in ${game.name}. Calculate the best paths for gathering.`,
    alternates: {
      canonical: `https://xavrita.com/games/${params.slug}/tools/resource-farming/`,
    },
  }
}

const RESOURCES = [
  { name: 'Iron Ore', icon: '🪨', category: 'Ores', efficiency: 1.0 },
  { name: 'Copper Ore', icon: '🔶', category: 'Ores', efficiency: 1.2 },
  { name: 'Coal', icon: '⚫', category: 'Ores', efficiency: 1.5 },
  { name: 'Crystal', icon: '💎', category: 'Ores', efficiency: 2.5 },
  { name: 'Starlight Ore', icon: '⭐', category: 'Rare', efficiency: 5.0 },
  { name: 'Wood', icon: '🪵', category: 'Materials', efficiency: 0.8 },
  { name: 'Fiber', icon: '🌿', category: 'Materials', efficiency: 1.0 },
  { name: 'Stone', icon: '🪨', category: 'Materials', efficiency: 0.6 },
  { name: 'Gold', icon: '🪙', category: 'Rare', efficiency: 8.0 },
]

const ZONES = [
  { name: 'Starting Area', recommended: ['Wood', 'Stone', 'Fiber'], danger: 'Low' },
  { name: 'Mid Game Zone', recommended: ['Iron Ore', 'Copper Ore', 'Coal'], danger: 'Medium' },
  { name: 'End Game Zone', recommended: ['Crystal', 'Gold', 'Starlight Ore'], danger: 'High' },
]

export default function ResourceFarmingSimulatorPage({ params }: Props) {
  const game = getGameBySlug(params.slug)

  return (
    <>
      <section className="py-12 px-4 bg-gray-950 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/games/" className="hover:text-white">Games</Link>
            <span className="mx-2">/</span>
            <Link href={`/games/${params.slug}/`} className="hover:text-white">{game?.name || params.slug}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Resource Farming Simulator</span>
          </nav>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded font-medium">Interactive Tool</span>
            <span className="text-xs text-gray-500">Planning + Efficiency</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Once Human Resource Farming Simulator</h1>
          <p className="text-lg text-gray-400">
            Plan your optimal farming route. Select resources and calculate the most efficient path.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-900 min-h-[70vh]">
        <div className="max-w-4xl mx-auto">
          <ResourceFarmingSimulator resources={RESOURCES} zones={ZONES} />
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">All Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Ores', 'Materials', 'Rare'].map((cat) => (
              <div key={cat} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <h3 className="text-white font-semibold mb-3">{cat}</h3>
                <div className="space-y-2">
                  {RESOURCES.filter(r => r.category === cat).map((res) => (
                    <div key={res.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>{res.icon}</span>
                        <span className="text-gray-300 text-sm">{res.name}</span>
                      </div>
                      <span className="text-indigo-400 text-xs">x{res.efficiency.toFixed(1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/guides/once-human-resource-farming/" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-4 hover:border-indigo-500 transition-colors">
              <h3 className="font-semibold text-white mb-1">Resource Farming Guide</h3>
              <p className="text-sm text-gray-400">Efficient ways to gather all essential resources.</p>
            </Link>
            <Link href="/guides/once-human-best-builds/" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-4 hover:border-indigo-500 transition-colors">
              <h3 className="font-semibold text-white mb-1">Best Builds Guide</h3>
              <p className="text-sm text-gray-400">Top meta builds for PvE and PvP combat.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
