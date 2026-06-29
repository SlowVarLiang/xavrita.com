import { Metadata } from 'next'
import Link from 'next/link'
import { getGameBySlug } from '@/lib/games-data'
import PalCatcher from './PalCatcher'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = getGameBySlug(params.slug)
  if (!game) return { title: 'Tool Not Found' }

  return {
    title: `${game.name} Pal Catcher | Xavrito`,
    description: `Catch random Pals in ${game.name}. Test your luck and see what Pal you get!`,
    alternates: {
      canonical: `https://xavrita.com/games/${params.slug}/tools/pal-catcher/`,
    },
  }
}

const PALS = [
  { name: 'Lamball', type: 'Neutral', color: '#8B5A2B', rarity: 'Common', use: 'Ranching' },
  { name: 'Cattiva', type: 'Neutral', color: '#6B4423', rarity: 'Common', use: 'Ranching' },
  { name: 'Chikipi', type: 'Neutral', color: '#F4A460', rarity: 'Common', use: 'Ranching' },
  { name: 'Lifmunk', type: 'Grass', color: '#228B22', rarity: 'Common', use: 'Planting' },
  { name: 'Foxparks', type: 'Fire', color: '#FF4500', rarity: 'Common', use: 'Kindling' },
  { name: 'Fuack', type: 'Water', color: '#1E90FF', rarity: 'Common', use: 'Watering' },
  { name: 'Sparkit', type: 'Electric', color: '#FFD700', rarity: 'Common', use: 'Electric' },
  { name: 'Woolipop', type: 'Neutral', color: '#FF69B4', rarity: 'Uncommon', use: 'Ranching' },
  { name: 'Mossanda', type: 'Grass', color: '#32CD32', rarity: 'Uncommon', use: 'Transporting' },
  { name: 'Swee', type: 'Ice', color: '#87CEEB', rarity: 'Uncommon', use: 'Cooling' },
  { name: 'Jormuntide', type: 'Water/Dragon', color: '#4169E1', rarity: 'Rare', use: 'Farming' },
  { name: 'Suzaku', type: 'Fire', color: '#FF6347', rarity: 'Rare', use: 'Ranching' },
  { name: 'Kingpaca', type: 'Neutral', color: '#D2691E', rarity: 'Rare', use: 'Mining' },
  { name: 'Elizidon', type: 'Water', color: '#00CED1', rarity: 'Rare', use: 'Farming' },
  { name: 'Incineram', type: 'Fire/Dark', color: '#8B0000', rarity: 'Rare', use: 'Ranching' },
  { name: 'Anubis', type: 'Ground', color: '#DAA520', rarity: 'Epic', use: 'Mining' },
  { name: 'Faleris', type: 'Fire', color: '#DC143C', rarity: 'Epic', use: 'Kindling' },
  { name: 'Shadowbeak', type: 'Dark', color: '#4B0082', rarity: 'Epic', use: 'Night Monster' },
  { name: 'Paladius', type: 'Neutral', color: '#C0C0C0', rarity: 'Legendary', use: 'Combat' },
  { name: 'Necromus', type: 'Dark', color: '#2F4F4F', rarity: 'Legendary', use: 'Combat' },
]

export default function PalCatcherPage({ params }: Props) {
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
            <span className="text-white">Pal Catcher</span>
          </nav>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded font-medium">Interactive Tool</span>
            <span className="text-xs text-gray-500">Fun + Collection</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Palworld Pal Catcher</h1>
          <p className="text-lg text-gray-400">
            Test your luck! Catch a random Pal and add it to your collection.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900 min-h-[70vh]">
        <div className="max-w-2xl mx-auto">
          <PalCatcher pals={PALS} />
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">All Pal Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {PALS.map((pal) => (
              <div key={pal.name} className="bg-gray-900 rounded-lg p-3 border border-gray-800">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pal.color }} />
                  <span className="text-white font-medium text-xs">{pal.name}</span>
                </div>
                <p className="text-xs text-gray-500">{pal.type}</p>
                <p className="text-xs text-indigo-400 mt-1">{pal.use}</p>
                <span className={`inline-block mt-1 text-xs px-1.5 py-0.5 rounded ${
                  pal.rarity === 'Common' ? 'bg-gray-700 text-gray-300' :
                  pal.rarity === 'Uncommon' ? 'bg-green-900 text-green-300' :
                  pal.rarity === 'Rare' ? 'bg-blue-900 text-blue-300' :
                  pal.rarity === 'Epic' ? 'bg-purple-900 text-purple-300' :
                  'bg-amber-900 text-amber-300'
                }`}>{pal.rarity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/guides/palworld-paldeck/" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-4 hover:border-indigo-500 transition-colors">
              <h3 className="font-semibold text-white mb-1">Complete Paldeck</h3>
              <p className="text-sm text-gray-400">Every Pal with stats, skills, and breeding combos.</p>
            </Link>
            <Link href="/guides/palworld-breeding/" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl p-4 hover:border-indigo-500 transition-colors">
              <h3 className="font-semibold text-white mb-1">Breeding Guide</h3>
              <p className="text-sm text-gray-400">Learn how to breed Pals with the best traits.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
