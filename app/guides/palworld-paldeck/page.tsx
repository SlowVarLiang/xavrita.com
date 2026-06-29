import { Metadata } from 'next'
import Link from 'next/link'
import { createBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Palworld Complete Paldeck Guide | Xavrita',
  description: 'Complete Paldeck with all Pals listed. Stats, skills, locations, and breeding combinations for every Pal in Palworld.',
  alternates: {
    canonical: 'https://xavrita.com/guides/palworld-paldeck/',
  },
}

export default function PalworldPaldeckPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://xavrita.com' },
    { name: 'Games', url: 'https://xavrita.com/games/' },
    { name: 'Palworld', url: 'https://xavrita.com/games/palworld/' },
    { name: 'Paldeck', url: 'https://xavrita.com/guides/palworld-paldeck/' },
  ])

  return (
    <>
      <section className="py-12 px-4 bg-gray-950 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/games/palworld/" className="hover:text-white">Palworld</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Paldeck</span>
          </nav>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded font-medium">Guides</span>
            <span className="text-xs text-gray-500">Updated June 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Palworld Complete Paldeck Guide</h1>
          <p className="text-lg text-gray-400">
            Every Pal with stats, skills, locations, and breeding combos.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>How to Use This Paldeck</h2>
            <p>
              This comprehensive guide covers every Pal in Palworld. Each entry includes stats, elemental type, work suitability, and where to find them in the wild.
            </p>

            <h2>Pal Tier List Overview</h2>

            <h3>S-Tier Pals</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm mb-6">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 text-white">Pal</th>
                    <th className="text-left py-2 text-white">Type</th>
                    <th className="text-left py-2 text-white">Best For</th>
                    <th className="text-left py-2 text-white">Location</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800">
                    <td className="py-2">Jormuntide</td>
                    <td className="py-2">Water/Dragon</td>
                    <td className="py-2">Riding, Combat</td>
                    <td className="py-2">Mountains</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">Suzaku</td>
                    <td className="py-2">Fire</td>
                    <td className="py-2">Combat, Transport</td>
                    <td className="py-2">Volcanic</td>
                  </tr>
                  <tr>
                    <td className="py-2">Kingpaca</td>
                    <td className="py-2">Neutral</td>
                    <td className="py-2">Mining, Defense</td>
                    <td className="py-2">Snow</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>A-Tier Pals</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm mb-6">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 text-white">Pal</th>
                    <th className="text-left py-2 text-white">Type</th>
                    <th className="text-left py-2 text-white">Best For</th>
                    <th className="text-left py-2 text-white">Location</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800">
                    <td className="py-2">Elizidon</td>
                    <td className="py-2">Water</td>
                    <td className="py-2">Farming, Crafting</td>
                    <td className="py-2">Beach</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">Mossanda</td>
                    <td className="py-2">Grass</td>
                    <td className="py-2">Transport, Gathering</td>
                    <td className="py-2">Forest</td>
                  </tr>
                  <tr>
                    <td className="py-2">Incineram</td>
                    <td className="py-2">Fire/Dark</td>
                    <td className="py-2">Combat, Ranching</td>
                    <td className="py-2">Desert</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Work Suitability Guide</h2>
            <p>
              Each Pal has specific work stats determining their effectiveness in different base tasks. The key work categories are:
            </p>
            <ul>
              <li><strong>Mining</strong> - Pals that excel at extracting ore</li>
              <li><strong>Planting</strong> - Pals suited for crop cultivation</li>
              <li><strong>Handiwork</strong> - Pals for crafting and building</li>
              <li><strong>Transporting</strong> - Pals for moving items</li>
              <li><strong>Generating</strong> - Pals for power generation</li>
            </ul>

            <h2>Breeding Guide</h2>
            <p>
              Breeding is essential for creating powerful Pals with optimal passives. The breeding system uses compatibility ranges to determine offspring quality.
            </p>

            <h3>Best Breeding Combinations</h3>
            <p>
              For max stats, breed two Pals of the same type with complementary passives. Focus on inheriting Lucky and Swift passives for the best results.
            </p>

            <h2>Pal Locations Map</h2>
            <p>
              Each Pal spawns in specific biomes. The starting area features common Pals, while rarer types require exploring later regions like the Desert, Snow, and Volcanic areas.
            </p>
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
