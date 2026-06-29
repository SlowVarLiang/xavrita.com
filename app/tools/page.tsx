import { Metadata } from 'next'
import Link from 'next/link'
import { games } from '@/lib/games-data'

export const metadata: Metadata = {
  title: 'Gaming Tools & Calculators - Xavrito',
  description: 'Free gaming tools including build calculators, tier list makers, loot simulators, and interactive planners for your favorite games.',
  alternates: {
    canonical: 'https://xavrita.com/tools/',
  },
}

const tools = [
  {
    title: 'Build Calculator',
    description: 'Plan your perfect character build with our interactive calculator.',
    games: ['Once Human', 'V Rising', 'Core Keeper'],
    icon: '⚔️',
    status: 'Coming Soon',
  },
  {
    title: 'Tier List Maker',
    description: 'Create and share custom tier lists for any game.',
    games: ['All Games'],
    icon: '📊',
    status: 'Coming Soon',
  },
  {
    title: 'Loot Simulator',
    description: 'Test your luck with drop rate simulations.',
    games: ['Palworld', 'Once Human'],
    icon: '🎲',
    status: 'Coming Soon',
  },
  {
    title: 'Crafting Calculator',
    description: 'Calculate optimal crafting routes and resource requirements.',
    games: ['Core Keeper', 'V Rising', 'Soulmask'],
    icon: '🔨',
    status: 'Coming Soon',
  },
  {
    title: 'Map Planner',
    description: 'Plan base layouts and resource gathering routes.',
    games: ['Palworld', 'Once Human', 'Core Keeper'],
    icon: '🗺️',
    status: 'Coming Soon',
  },
  {
    title: 'Challenge Generator',
    description: 'Random challenge generator for replayability.',
    games: ['All Games'],
    icon: '🎯',
    status: 'Coming Soon',
  },
]

export default function ToolsPage() {
  return (
    <>
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Gaming Tools</h1>
          <p className="text-xl text-gray-400 mb-8">
            Free interactive tools to enhance your gaming experience.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-indigo-500 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{tool.icon}</span>
                  <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-400 rounded-full">
                    {tool.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tool.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tool.games.map((game) => (
                    <span
                      key={game}
                      className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                    >
                      {game}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">More Tools Coming Soon</h2>
          <p className="text-gray-400 mb-6">
            We are constantly working on new tools. Follow us on social media or check back regularly for updates.
          </p>
          <Link
            href="/games/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors"
          >
            Browse Games
          </Link>
        </div>
      </section>
    </>
  )
}
