import { Metadata } from 'next'
import Link from 'next/link'
import { generateGuideMetadata, createBreadcrumbSchema, createFAQSchema } from '@/lib/seo'
import GuideCard from '@/components/GuideCard'

interface PageProps {
  params: { slug: string }
}

const guidesData: Record<string, {
  title: string
  game: string
  gameSlug: string
  category: string
  date: string
  description: string
  content: Array<{ type: 'h2' | 'h3'; text: string; id: string }>
}> = {
  'once-human-best-builds': {
    title: 'Best Builds for Once Human',
    game: 'Once Human',
    gameSlug: 'once-human',
    category: 'Build Guides',
    date: '2026-06-28',
    description: 'Discover the top meta builds for combat and survival in Once Human, optimized for the latest patch.',
    content: [
      { type: 'h2', text: 'Introduction', id: 'introduction' },
      { type: 'h2', text: 'Best DPS Build', id: 'best-dps-build' },
      { type: 'h3', text: 'Primary Stats', id: 'primary-stats' },
      { type: 'h3', text: 'Recommended Gear', id: 'recommended-gear' },
      { type: 'h2', text: 'Best Tank Build', id: 'best-tank-build' },
      { type: 'h3', text: 'Defensive Stats', id: 'defensive-stats' },
      { type: 'h2', text: 'Best Support Build', id: 'best-support-build' },
      { type: 'h2', text: 'Conclusion', id: 'conclusion' },
    ],
  },
}

const relatedGuides = [
  { slug: 'once-human-resources', title: 'Resource Gathering Guide', category: 'Resources', excerpt: 'Efficient ways to gather all resources in Once Human.', updatedAt: '2026-06-27' },
  { slug: 'once-human-bosses', title: 'Boss Fight Strategies', category: 'Boss Guides', excerpt: 'Complete strategies for defeating all bosses.', updatedAt: '2026-06-26' },
  { slug: 'once-human-crafting', title: 'Crafting Complete Guide', category: 'Crafting', excerpt: 'All recipes and crafting tips.', updatedAt: '2026-06-25' },
]

const faqs = [
  {
    question: 'What is the best DPS build in Once Human?',
    answer: 'The best DPS build focuses on maximizing weapon damage through critical hits and fire rate modifications. Check our detailed guide for the optimal stats and gear.',
  },
  {
    question: 'How do I get started with building in Once Human?',
    answer: 'Start by gathering basic resources like wood and stone from the environment. Build a small base to store items and protect yourself from enemies.',
  },
  {
    question: 'What weapons work best for beginners?',
    answer: 'For beginners, we recommend starting with assault rifles for their versatility and ease of use. Shotguns are excellent for close-range combat.',
  },
]

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = guidesData[params.slug]
  if (!guide) {
    return { title: 'Guide Not Found | Xavrito' }
  }
  return {
    ...generateGuideMetadata(guide.title, guide.game, guide.description),
    alternates: {
      canonical: `https://xavrita.com/guides/${params.slug}/`,
    },
  }
}

export default function GuidePage({ params }: PageProps) {
  const guide = guidesData[params.slug]

  if (!guide) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-text-primary mb-4">Guide Not Found</h1>
          <p className="text-text-muted mb-8">The guide you are looking for does not exist.</p>
          <Link href="/guides" className="text-accent-cyan hover:text-accent-cyan/80">
            Browse All Guides
          </Link>
        </div>
      </div>
    )
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://xavrita.com' },
    { name: 'Guides', url: 'https://xavrita.com/guides' },
    { name: guide.game, url: `https://xavrita.com/games/${guide.gameSlug}` },
    { name: guide.title, url: `https://xavrita.com/guides/${params.slug}/` },
  ])

  const faqSchema = createFAQSchema(faqs)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-void overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-text-primary transition-colors">Guides</Link>
            <span>/</span>
            <Link href={`/games/${guide.gameSlug}`} className="hover:text-text-primary transition-colors">{guide.game}</Link>
            <span>/</span>
            <span className="text-text-primary">{guide.title}</span>
          </nav>

          {/* Category Badge */}
          <div className="mb-4">
            <Link
              href={`/guides?category=${encodeURIComponent(guide.category)}`}
              className="inline-block px-3 py-1 bg-accent-violet/10 text-accent-violet text-sm font-medium rounded-full border border-accent-violet/20 hover:bg-accent-violet/20 transition-colors"
            >
              {guide.category}
            </Link>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {guide.title}
          </h1>

          <div className="flex items-center gap-4 text-text-muted text-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-amber"></span>
              {guide.game}
            </span>
            <span>•</span>
            <span className="font-mono">{guide.date}</span>
          </div>

          <p className="text-lg text-text-muted mt-6 max-w-3xl leading-relaxed">
            {guide.description}
          </p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <aside className="lg:col-span-1">
              <div className="bg-void border border-border rounded-xl p-6 sticky top-20">
                <h2 className="font-display font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
                  Contents
                </h2>
                <nav className="space-y-1">
                  {guide.content.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm text-text-muted hover:text-accent-cyan transition-colors py-1 ${
                        item.type === 'h3' ? 'pl-4' : ''
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3">
              <div className="bg-void border border-border rounded-xl p-6 sm:p-8">
                <p className="text-text-muted mb-8 leading-relaxed">
                  This guide provides comprehensive information about {guide.title.toLowerCase()} in {guide.game}.
                  Use the table of contents to navigate to specific sections.
                </p>

                {guide.content.map((item) => (
                  <div key={item.id} id={item.id} className="mb-8 scroll-mt-24">
                    {item.type === 'h2' ? (
                      <h2 className="font-display text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                        <span className="w-8 h-0.5 bg-accent-violet rounded"></span>
                        {item.text}
                      </h2>
                    ) : (
                      <h3 className="font-display text-xl font-semibold text-text-primary mb-3 pl-4 border-l-2 border-accent-violet/30">
                        {item.text}
                      </h3>
                    )}
                    <p className="text-text-muted leading-relaxed pl-4 sm:pl-11">
                      Content for this section is being developed. Check back soon for detailed information.
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 px-4 sm:px-6 bg-void">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-amber"></span>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Related Guides</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
            More {guide.game} Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
