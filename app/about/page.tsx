import { Metadata } from 'next'
import { createFAQSchema, createOrganizationSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About Xavrito - Game Guides & Wiki Platform',
  description: 'Learn about Xavrito, your ultimate gaming guide platform. Discover our mission to provide comprehensive, accurate, and up-to-date gaming guides for players worldwide.',
  alternates: {
    canonical: 'https://xavrita.com/about/',
  },
}

export default function AboutPage() {
  return (
    <>
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">About Xavrito</h1>
          <p className="text-xl text-gray-400 mb-8">
            Your ultimate destination for comprehensive gaming guides, detailed wikis, and expert build recommendations.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Xavrito was founded with a simple mission: to help gamers master their favorite titles through clear, accurate, and actionable guides. We believe that every player deserves access to quality information, whether they are just starting their journey or looking to optimize their endgame experience.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">What We Cover</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              We focus on the latest and most popular games across multiple genres:
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
              <li><strong className="text-white">Survival Games:</strong> Once Human, Palworld, Soulmask, Dune: Awakening</li>
              <li><strong className="text-white">Action RPGs:</strong> V Rising, Enshrouded</li>
              <li><strong className="text-white">Sandbox:</strong> Core Keeper</li>
              <li><strong className="text-white">Puzzle/Adventure:</strong> Abiotic Factor</li>
              <li><strong className="text-white">Roguelikes:</strong> Rift Wizard 3</li>
              <li><strong className="text-white">Metroidvania:</strong> Solateria</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Content Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Build Guides</h3>
                <p className="text-gray-400 text-sm">Optimized character builds for different playstyles and game modes.</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Boss Strategies</h3>
                <p className="text-gray-400 text-sm">Detailed mechanics breakdown and attack pattern guides.</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Tier Lists</h3>
                <p className="text-gray-400 text-sm">Ranked comparisons of weapons, items, and abilities.</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Wikis</h3>
                <p className="text-gray-400 text-sm">Comprehensive item databases and crafting references.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Our Promise</h2>
            <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
              <li><strong className="text-white">Accuracy:</strong> Every guide is tested and verified by experienced players.</li>
              <li><strong className="text-white">Updates:</strong> Content is revised after major patches and updates.</li>
              <li><strong className="text-white">Community:</strong> We listen to player feedback and adapt our content accordingly.</li>
              <li><strong className="text-white">Free Access:</strong> All guides and resources are freely accessible to everyone.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Editorial Standards</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Our content is created by passionate gamers who have extensive experience with each title. We prioritize clarity, practicality, and actionable information over filler content.
            </p>
            <p className="text-gray-400 leading-relaxed">
              All guides undergo review before publication to ensure they meet our quality standards. We clearly date our content so readers know when information was last verified.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
