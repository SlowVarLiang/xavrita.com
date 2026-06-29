import Link from 'next/link'
import { games, categories } from '@/lib/games-data'
import GameCard from '@/components/GameCard'
import GuideCard from '@/components/GuideCard'
import { createFAQSchema, createOrganizationSchema, createWebSiteSchema } from '@/lib/seo'

const faqs = [
  {
    question: 'What games does Xavrito cover?',
    answer: 'Xavrito covers the latest and most popular games including Once Human, Core Keeper, V Rising, Abiotic Factor, Dune: Awakening, Soulmask, Enshrouded, Palworld, Solateria, Rift Wizard 3, and many more survival, RPG, and action games.'
  },
  {
    question: 'Are the guides free to use?',
    answer: 'Yes, all guides, wikis, tier lists, and resources on Xavrito are completely free to use. We believe in providing quality gaming information to all players.'
  },
  {
    question: 'How often are guides updated?',
    answer: 'Our guides are regularly updated to reflect the latest game patches, updates, and community discoveries. We strive to keep all information current and accurate.'
  },
  {
    question: 'Can I request a specific guide?',
    answer: 'While we do not have a formal request system yet, we actively monitor popular game communities and prioritize creating guides for the most requested topics.'
  },
  {
    question: 'Do you have interactive maps?',
    answer: 'Yes! Xavrito features interactive maps for supported games, allowing you to easily locate items, bosses, resources, and other points of interest.'
  }
]

const latestGuides = [
  { slug: 'once-human-best-builds', title: 'Best Builds for Once Human', category: 'Build Guides', excerpt: 'Discover the top meta builds for combat and survival in Once Human.', updatedAt: '2026-06-28' },
  { slug: 'core-keeper-resources', title: 'Complete Resource Guide', category: 'Resources', excerpt: 'A comprehensive guide to all resources in Core Keeper.', updatedAt: '2026-06-27' },
  { slug: 'v-rising-boss-guide', title: 'V Rising Boss Tier List', category: 'Boss Guides', excerpt: 'Ranked list of all bosses from weakest to strongest.', updatedAt: '2026-06-26' },
  { slug: 'abiotic-factor-walkthrough', title: 'Full Walkthrough', category: 'Quests', excerpt: 'Complete walkthrough covering all puzzle solutions.', updatedAt: '2026-06-25' },
  { slug: 'soulmask-tier-list', title: 'Best Masks Tier List', category: 'Tier Lists', excerpt: 'Every mask ranked by effectiveness and abilities.', updatedAt: '2026-06-24' },
  { slug: 'palworld-pals', title: 'Pal Breeding Guide', category: 'Guides', excerpt: 'Tips and tricks for breeding rare Pals.', updatedAt: '2026-06-23' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-void overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        {/* Gradient Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent-violet/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-text-muted">Command Center Online</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight tracking-tight">
              Game Guides,
              <br />
              <span className="bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-amber bg-clip-text text-transparent">
                Built Different
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
              Your ultimate companion for mastering the latest games. Comprehensive guides, 
              detailed wikis, optimized builds, and interactive tools.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/games"
                className="px-6 py-3 bg-accent-violet hover:bg-accent-violet/90 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-accent-violet/25 hover:-translate-y-0.5"
              >
                Explore Games
              </Link>
              <Link
                href="/guides"
                className="px-6 py-3 bg-surface hover:bg-border border border-border text-text-primary font-medium rounded-lg transition-all hover:-translate-y-0.5"
              >
                Browse Guides
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-text-primary">8</div>
                <div className="text-xs font-mono text-text-muted mt-1">Games Covered</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="font-display text-2xl sm:text-3xl font-bold text-text-primary">50+</div>
                <div className="text-xs font-mono text-text-muted mt-1">Guides</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-text-primary">8</div>
                <div className="text-xs font-mono text-text-muted mt-1">Interactive Tools</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-20 px-4 sm:px-6 bg-void">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Featured Games</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
                Command Your Next Adventure
              </h2>
            </div>
            <Link
              href="/games"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-accent-cyan hover:text-accent-cyan/80 transition-colors"
            >
              View All
              <span>→</span>
            </Link>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {games.filter(g => !g.external).map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>

          <div className="sm:hidden mt-6 text-center">
            <Link
              href="/games"
              className="inline-flex items-center gap-1 text-sm text-accent-cyan hover:text-accent-cyan/80 transition-colors"
            >
              View All Games
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Guides Section */}
      <section className="py-20 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-amber"></span>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Latest Updates</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
                Fresh Intel
              </h2>
            </div>
            <Link
              href="/guides"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-accent-cyan hover:text-accent-cyan/80 transition-colors"
            >
              All Guides
              <span>→</span>
            </Link>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>

          <div className="sm:hidden mt-6 text-center">
            <Link
              href="/guides"
              className="inline-flex items-center gap-1 text-sm text-accent-cyan hover:text-accent-cyan/80 transition-colors"
            >
              View All Guides
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Browser */}
      <section className="py-20 px-4 sm:px-6 bg-void">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Browse by Category</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              Find What You Need
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/guides/?category=${encodeURIComponent(category)}`}
                className="group flex flex-col items-center gap-2 px-4 py-4 bg-surface border border-border rounded-xl hover:border-accent-violet/50 hover:bg-surface/80 transition-all text-center"
              >
                <span className="w-8 h-8 rounded-lg bg-accent-violet/10 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-accent-violet group-hover:scale-150 transition-transform"></span>
                </span>
                <span className="text-sm text-text-muted group-hover:text-text-primary transition-colors">
                  {category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Xavrito Section */}
      <section className="py-20 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              The Xavrito Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group p-6 bg-void border border-border rounded-xl hover:border-accent-violet/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-text-primary mb-2">Verified Intel</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Every guide is tested by experienced players and updated with the latest patch changes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-6 bg-void border border-border rounded-xl hover:border-accent-cyan/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-text-primary mb-2">Interactive Tools</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Exclusive calculators, planners, and simulators built specifically for each game.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-6 bg-void border border-border rounded-xl hover:border-accent-amber/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-amber/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-text-primary mb-2">Always Fresh</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Guides are continuously updated as games evolve with new patches and discoveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 bg-void">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              Common Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-surface border border-border rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-text-primary hover:text-accent-cyan transition-colors">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-text-muted leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createFAQSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createWebSiteSchema()) }}
      />
    </>
  )
}
