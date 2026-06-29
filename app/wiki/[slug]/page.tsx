import { Metadata } from 'next'
import Link from 'next/link'
import { games, getGameBySlug } from '@/lib/games-data'
import { createBreadcrumbSchema } from '@/lib/seo'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const game = getGameBySlug(params.slug)
  if (!game) {
    return { title: 'Wiki Not Found | Xavrito' }
  }
  return {
    title: `${game.name} Wiki | Xavrito`,
    description: `Complete wiki database for ${game.name}. Items, crafting recipes, locations, and more.`,
    alternates: {
      canonical: `https://xavrita.com/wiki/${game.slug}/`,
    },
  }
}

export default function WikiPage({ params }: PageProps) {
  const game = getGameBySlug(params.slug)

  if (!game) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Wiki Not Found</h1>
        <p className="text-gray-400 mb-8">The wiki you are looking for does not exist.</p>
        <Link href="/wiki/" className="text-indigo-400 hover:text-indigo-300">
          Browse All Wikis
        </Link>
      </div>
    )
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://xavrita.com' },
    { name: 'Wiki', url: 'https://xavrita.com/wiki/' },
    { name: game.name, url: `https://xavrita.com/wiki/${game.slug}/` },
  ])

  return (
    <>
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-950 py-16 px-4">
        {game.image && (
          <div className="absolute inset-0 overflow-hidden">
            <img src={game.image} alt={game.name} className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-950" />
          </div>
        )}
        <div className="relative max-w-6xl mx-auto">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/wiki/" className="hover:text-white transition-colors">Wiki</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{game.name}</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{game.emoji}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{game.name} Wiki</h1>
              <span className="text-gray-400">{game.category}</span>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Complete wiki database for {game.name}. Everything you need to know about items, crafting, and game mechanics.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <span className="text-gray-400 block mb-2">Items</span>
              <span className="text-3xl font-bold text-white">500+</span>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <span className="text-gray-400 block mb-2">Recipes</span>
              <span className="text-3xl font-bold text-white">200+</span>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <span className="text-gray-400 block mb-2">Locations</span>
              <span className="text-3xl font-bold text-white">85+</span>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <span className="text-gray-400 block mb-2">Bosses</span>
              <span className="text-3xl font-bold text-white">15</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {['Items', 'Weapons', 'Armor', 'Resources', 'Crafting', 'Mobs', 'Bosses', 'Maps'].map((cat) => (
              <Link
                key={cat}
                href={`/wiki/${params.slug}/${cat.toLowerCase()}/`}
                className="bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-indigo-500 rounded-lg p-4 text-center text-gray-300 hover:text-white transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href={`/games/${game.slug}/`}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center justify-between hover:border-indigo-500 transition-colors"
            >
              <span className="text-white">View Game Hub</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={`/guides/?game=${game.slug}/`}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center justify-between hover:border-indigo-500 transition-colors"
            >
              <span className="text-white">View Guides</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
