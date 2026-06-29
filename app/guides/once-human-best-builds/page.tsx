import { Metadata } from 'next'
import Link from 'next/link'
import { createBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Best Once Human Builds Guide (PvE & PvP) | Xavrito',
  description: 'Discover the top meta builds for Once Human. Complete breakdown of the best weapons, armor, and ability combinations for PvE and PvP combat.',
  alternates: {
    canonical: 'https://xavrita.com/guides/once-human-best-builds/',
  },
}

export default function OnceHumanBuildsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://xavrita.com' },
    { name: 'Games', url: 'https://xavrita.com/games/' },
    { name: 'Once Human', url: 'https://xavrita.com/games/once-human/' },
    { name: 'Best Builds', url: 'https://xavrita.com/guides/once-human-best-builds/' },
  ])

  return (
    <>
      <section className="py-12 px-4 bg-gray-950 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/games/once-human/" className="hover:text-white">Once Human</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Best Builds</span>
          </nav>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded font-medium">Build Guides</span>
            <span className="text-xs text-gray-500">Updated June 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Best Once Human Builds Guide (PvE & PvP)</h1>
          <p className="text-lg text-gray-400">
            Discover the top meta builds for dominating both PvE content and PvP combat.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Overview</h2>
            <p>
              Once Human offers a variety of build configurations that cater to different playstyles. Whether you prefer aggressive close-quarters combat or tactical ranged approaches, this guide covers the best meta builds currently dominating the game.
            </p>

            <h2>Best PvE Build: Devastator</h2>
            <p>The Devastator build is optimized for clearing PvE content efficiently, focusing on high damage output against mobs and bosses.</p>

            <h3>Primary Weapons</h3>
            <ul>
              <li><strong>AR-55 Ursa</strong> - Primary weapon for sustained damage</li>
              <li><strong>SG-45 Wolverine</strong> - Secondary for close encounters</li>
              <li><strong>Cryo Grenade</strong> - Crowd control option</li>
            </ul>

            <h3>Key Stats</h3>
            <ul>
              <li>Strength: 25</li>
              <li> Endurance: 15</li>
              <li>Precision: 10</li>
            </ul>

            <h3>Recommended Perks</h3>
            <ul>
              <li>Rapid Fire - Increase fire rate by 20%</li>
              <li>Armor Penetration - Ignore 30% enemy armor</li>
              <li>Adrenaline Rush - Kills restore 10% health</li>
            </ul>

            <h2>Best PvP Build: Shadow Strike</h2>
            <p>The Shadow Strike build excels in PvP scenarios, prioritizing burst damage and mobility.</p>

            <h3>Primary Weapons</h3>
            <ul>
              <li><strong>SMG-9 Viper</strong> - High mobility primary</li>
              <li><strong>Sniper MK-4 Eagle</strong> - Long-range precision</li>
            </ul>

            <h3>Key Stats</h3>
            <ul>
              <li>Agility: 30</li>
              <li>Precision: 20</li>
              <li>Strength: 5</li>
            </ul>

            <h2>Hybrid Build: Balanced Fighter</h2>
            <p>A versatile build that performs well in both PvE and PvP scenarios.</p>

            <h3>Primary Weapons</h3>
            <ul>
              <li><strong>AR-55 Ursa</strong> - Versatile primary</li>
              <li><strong>Shotgun SG-45</strong> - Close-range backup</li>
            </ul>

            <h3>Key Stats</h3>
            <ul>
              <li>Strength: 18</li>
              <li>Agility: 18</li>
              <li>Endurance: 14</li>
            </ul>

            <h2>Stat Allocation Tips</h2>
            <p>
              When allocating stats, prioritize your primary damage source. For weapon-based builds, focus on matching stats that boost your weapon type. Always keep at least 10 points in Endurance for survivability.
            </p>

            <h2>Armor Recommendations</h2>
            <p>
              Endgame armor sets vary by playstyle. The Stalker set provides bonus stealth for PvP, while the Titan set offers maximum protection for PvE boss fights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/guides/once-human-resource-farming/" className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-4 hover:border-indigo-500 transition-colors">
              <h3 className="font-semibold text-white mb-1">Resource Farming Guide</h3>
              <p className="text-sm text-gray-400">Efficient ways to gather all essential resources.</p>
            </Link>
            <Link href="/guides/once-human-boss-guides/" className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-4 hover:border-indigo-500 transition-colors">
              <h3 className="font-semibold text-white mb-1">Boss Fight Strategies</h3>
              <p className="text-sm text-gray-400">Defeat every boss with detailed mechanics breakdown.</p>
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
