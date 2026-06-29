import { Metadata } from 'next'
import Link from 'next/link'
import { getGameBySlug } from '@/lib/games-data'
import BloodTypeSpinner from './BloodTypeSpinner'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = getGameBySlug(params.slug)
  if (!game) return { title: 'Tool Not Found' }

  return {
    title: `${game.name} Blood Type Spinner | Xavrito`,
    description: `Spin the wheel to get a random ${game.name} blood type recommendation. Find your perfect blood type build.`,
    alternates: {
      canonical: `https://xavrita.com/games/${params.slug}/tool/`,
    },
  }
}

const BLOOD_TYPES = [
  { name: 'Worker Blood', color: '#3B82F6', bonus: '+25% Resource Gathering', description: 'Perfect for base building and progression', rarity: 'Common' },
  { name: 'Brute Blood', color: '#EF4444', bonus: '+30% Physical Power', description: 'Dominate in PvP and melee combat', rarity: 'Common' },
  { name: 'Scholar Blood', color: '#EAB308', bonus: '+35% Spell Power', description: 'Maximize your magic build potential', rarity: 'Common' },
  { name: 'Rogue Blood', color: '#A855F7', bonus: '+20% Movement, +15% Attack Speed', description: 'Ideal for ganking and hit-and-run tactics', rarity: 'Uncommon' },
  { name: 'Merchant Blood', color: '#22C55E', bonus: '+40% Trade Value', description: 'Master the economy and get rich fast', rarity: 'Uncommon' },
  { name: 'Guardian Blood', color: '#64748B', bonus: '+30% Damage Resistance', description: 'Become an unbreakable tank', rarity: 'Rare' },
  { name: 'Hunter Blood', color: '#F97316', bonus: '+35% Critical Chance', description: 'Strike with deadly precision', rarity: 'Rare' },
  { name: 'Dread Blood', color: '#EC4899', bonus: '+25% Life Steal', description: 'Sustain through any fight', rarity: 'Epic' },
]

export default function BloodTypeSpinnerPage({ params }: Props) {
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
            <span className="text-white">Blood Type Spinner</span>
          </nav>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded font-medium">Interactive Tool</span>
            <span className="text-xs text-gray-500">Fun + Useful</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">V Rising Blood Type Spinner</h1>
          <p className="text-lg text-gray-400">
            Spin the wheel to discover your perfect blood type build.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900 min-h-[70vh]">
        <div className="max-w-2xl mx-auto">
          <BloodTypeSpinner />
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">All Blood Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {BLOOD_TYPES.map((blood) => (
              <div key={blood.name} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: blood.color }} />
                  <span className="text-white font-semibold text-sm">{blood.name}</span>
                </div>
                <p className="text-xs text-indigo-400 mb-1">{blood.bonus}</p>
                <p className="text-xs text-gray-500">{blood.description}</p>
                <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded ${
                  blood.rarity === 'Common' ? 'bg-gray-700 text-gray-300' :
                  blood.rarity === 'Uncommon' ? 'bg-green-900 text-green-300' :
                  blood.rarity === 'Rare' ? 'bg-blue-900 text-blue-300' :
                  'bg-purple-900 text-purple-300'
                }`}>{blood.rarity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/guides/v-rising-blood-types/" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-4 hover:border-indigo-500 transition-colors">
              <h3 className="font-semibold text-white mb-1">Blood Types Guide</h3>
              <p className="text-sm text-gray-400">Complete breakdown of every blood type and where to farm them.</p>
            </Link>
            <Link href="/guides/v-rising-castle-builds/" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-4 hover:border-indigo-500 transition-colors">
              <h3 className="font-semibold text-white mb-1">Castle Building Guide</h3>
              <p className="text-sm text-gray-400">Build the ultimate vampire castle with efficient layouts.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
