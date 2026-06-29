import { Metadata } from 'next'
import Link from 'next/link'
import { createBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'V Rising Blood Types Guide & Farming | Xavrito',
  description: 'Complete guide to blood types in V Rising. Learn which blood type is best for each build and where to find high-quality hosts.',
  alternates: {
    canonical: 'https://xavrita.com/guides/v-rising-blood-types/',
  },
}

export default function VRisingBloodPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://xavrita.com' },
    { name: 'Games', url: 'https://xavrita.com/games/' },
    { name: 'V Rising', url: 'https://xavrita.com/games/v-rising/' },
    { name: 'Blood Types', url: 'https://xavrita.com/guides/v-rising-blood-types/' },
  ])

  return (
    <>
      <section className="py-12 px-4 bg-gray-950 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/games/v-rising/" className="hover:text-white">V Rising</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blood Types</span>
          </nav>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded font-medium">Resources</span>
            <span className="text-xs text-gray-500">Updated June 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">V Rising Blood Types Guide & Farming</h1>
          <p className="text-lg text-gray-400">
            Master the blood system to optimize your vampire builds.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Blood Types Overview</h2>
            <p>
              In V Rising, blood is your primary resource for powering abilities and maintaining your vampiric strength. Each blood type provides unique bonuses tailored to different playstyles.
            </p>

            <h2>Blood Type Tier List</h2>

            <h3>S-Tier Blood Types</h3>
            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <h4 className="text-white font-semibold mb-2">Worker Blood (Blue)</h4>
              <p className="text-gray-400 text-sm mb-2">+25% Resource Gathering Efficiency</p>
              <p className="text-gray-500 text-xs">Best for: Base building and progression</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <h4 className="text-white font-semibold mb-2">Brute Blood (Red)</h4>
              <p className="text-gray-400 text-sm mb-2">+30% Physical Power</p>
              <p className="text-gray-500 text-xs">Best for: PvP and melee combat</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <h4 className="text-white font-semibold mb-2">Scholar Blood (Yellow)</h4>
              <p className="text-gray-400 text-sm mb-2">+35% Spell Power</p>
              <p className="text-gray-500 text-xs">Best for: Magic builds and spell casting</p>
            </div>

            <h3>A-Tier Blood Types</h3>
            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <h4 className="text-white font-semibold mb-2">Rogue Blood (Purple)</h4>
              <p className="text-gray-400 text-sm mb-2">+20% Movement Speed, +15% Attack Speed</p>
              <p className="text-gray-500 text-xs">Best for: Ganking and hit-and-run tactics</p>
            </div>

            <h2>Where to Find High-Quality Blood</h2>
            <p>
              The Farbane Woods offer common hosts, while Dunley Farmlands provides superior blood quality. For the best results, hunt in the silver mines and vampire settlements.
            </p>

            <h2>Blood Farming Tips</h2>
            <ul>
              <li><strong>Equip Blood Hunter Ability</strong> - Highlights nearby hosts</li>
              <li><strong>Use Beast Hunts</strong> - Efficient for gathering large amounts</li>
              <li><strong>Build Blood Press</strong> - Extract more blood from each harvest</li>
              <li><strong>Chain Kills</strong> - Maintain momentum bonuses for better drops</li>
            </ul>

            <h2>Best Blood for Each Build</h2>

            <h3>Castle Building Build</h3>
            <p>
              Worker Blood is essential for efficient castle construction and servant management. The bonus to resource gathering accelerates your progression significantly.
            </p>

            <h3>PvP Combat Build</h3>
            <p>
              Brute Blood provides the raw physical power needed to dominate other players. Combine with the appropriate weapon abilities for maximum effectiveness.
            </p>

            <h3>Spell Caster Build</h3>
            <p>
              Scholar Blood amplifies your spell damage, making it the preferred choice for magical builds. The increased spell power stacks with equipment bonuses.
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
