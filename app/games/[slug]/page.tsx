import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { html5Games, getGameBySlug, getRelatedGames } from '@/lib/html5-games'
import { createHtml5GameSchema, createBreadcrumbSchema, createFAQSchema, createOrganizationSchema, createWebSiteSchema } from '@/lib/seo'
import GameEmbed from '@/components/GameEmbed'
import Html5GameCard from '@/components/Html5GameCard'

interface PageProps {
  params: { slug: string }
}

// Full SEO metadata per game
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const game = getGameBySlug(params.slug)
  if (!game) {
    return { title: 'Game Not Found | Xavrito' }
  }

  const title = `${game.name} - Free ${game.category} HTML5 Game | Play Online`
  const description = `Play ${game.name} for free in your browser. ${game.description} No download needed — start playing instantly on Xavrito.`

  return {
    title,
    description,
    keywords: [
      game.name,
      `play ${game.name}`,
      `${game.name} online`,
      `${game.name} free`,
      `free ${game.category} game`,
      'HTML5 game',
      'browser game',
      'online game',
      ...game.tags,
    ],
    openGraph: {
      title: `${game.name} | Play Free Online`,
      description: description,
      images: [{ url: game.thumbnail, width: 1200, height: 630 }],
      type: 'website',
      locale: 'en_US',
      siteName: 'Xavrito',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.name} - Free Online HTML5 Game`,
      description: description,
      images: [game.thumbnail],
    },
    alternates: {
      canonical: `https://xavrito.com/games/${game.slug}/`,
    },
  }
}

export async function generateStaticParams() {
  return html5Games.map((game) => ({
    slug: game.slug,
  }))
}

export default function GamePage({ params }: PageProps) {
  const game = getGameBySlug(params.slug)

  if (!game) {
    notFound()
  }

  const relatedGames = getRelatedGames(game, 4)

  // SEO Structured Data
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://xavrito.com' },
    { name: 'Games', url: 'https://xavrito.com/games' },
    { name: game.category, url: `https://xavrito.com/games?category=${encodeURIComponent(game.category)}` },
    { name: game.name, url: `https://xavrito.com/games/${game.slug}/` },
  ])

  const gameSchema = createHtml5GameSchema(game)

  const faqs = [
    {
      question: `So what is ${game.name}?`,
      answer: `${game.description} It runs straight in your browser — no install, no account, no drama.`,
    },
    {
      question: `How do I play?`,
      answer: game.controls
        ? `${game.controls}. That\'s it. You\'re ready.`
        : `Click play, game starts. Couldn\'t be simpler if it tried.`,
    },
    {
      question: `Free? For real?`,
      answer: `Zero dollars. Zero cents. Zero catch. ${game.name} is 100% free on Xavrito.`,
    },
    {
      question: `Can I play on my phone?`,
      answer: game.tags.includes('multiplayer')
        ? `${game.name} works on mobile, but if you want the full experience, grab a keyboard and mouse.`
        : `Yep, touch controls work. Phone, tablet, desktop — all good.`,
    },
    {
      question: `What should I expect?`,
      answer: `${game.category} action${game.tags.length > 0 ? ` — tagged: ${game.tags.slice(0, 4).join(', ')}` : ''}. Good times, guaranteed.`,
    },
  ]
  const faqSchema = createFAQSchema(faqs)

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/games" className="hover:text-text-primary transition-colors">Games</Link>
            <span>/</span>
            <Link href={`/games?category=${encodeURIComponent(game.category)}`} className="hover:text-text-primary transition-colors">
              {game.category}
            </Link>
            <span>/</span>
            <span className="text-text-primary">{game.name}</span>
          </nav>

          {/* Game Header */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left: Game Info (2 cols) */}
            <div className="lg:col-span-3">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-accent-violet/20 text-accent-violet rounded text-xs font-medium">
                  {game.category}
                </span>
                <span className="text-xs font-mono text-text-muted">Free HTML5 Game</span>
              </div>

              {/* H1 */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
                {game.name} — Jump Right In
              </h1>

              {/* Description */}
              <p className="text-text-muted text-lg leading-relaxed mb-6 max-w-2xl">
                {game.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-surface border border-border rounded-lg text-xs font-mono text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Play CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#play"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-violet hover:bg-accent-violet/90 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-violet/30 hover:-translate-y-0.5 text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play Now
                </a>
                <Link
                  href="/games"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-surface hover:bg-border border border-border text-text-primary font-medium rounded-lg transition-all hover:-translate-y-0.5"
                >
                  Browse All Games →
                </Link>
              </div>
            </div>

            {/* Right: Game Thumbnail (3 cols) */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl shadow-accent-violet/10">
                <img
                  src={game.thumbnail}
                  alt={`${game.name} - Free Online HTML5 ${game.category} Game`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
                {/* Play badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-void/80 backdrop-blur-sm rounded-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-mono text-text-muted">Play Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* Game Info Pills */}
          <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-border">
            {game.developer && (
              <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-border">
                <svg className="w-4 h-4 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-text-muted">Developer:</span>
                <span className="text-sm text-text-primary font-medium">{game.developer}</span>
              </div>
            )}
            <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-border">
              <svg className="w-4 h-4 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0h4a1 1 0 011 1v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a1 1 0 011-1h4" />
              </svg>
              <span className="text-sm text-text-muted">Platform:</span>
              <span className="text-sm text-text-primary font-medium">Web Browser</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-border">
              <svg className="w-4 h-4 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-text-muted">Cost:</span>
              <span className="text-sm text-emerald-400 font-medium">100% Free</span>
            </div>
            {game.controls && (
              <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-border">
                <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <span className="text-sm text-text-muted">Controls:</span>
                <span className="text-sm text-text-primary font-medium font-mono">{game.controls}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Game Embed - The Star of the Page */}
      <section id="play" className="py-12 px-4 sm:px-6 bg-void">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Game Player</span>
          </div>
          <GameEmbed game={game} />
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-16 px-4 sm:px-6 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Getting Started</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-6">
            Ready to Play?
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-text-muted leading-relaxed text-lg mb-4">
              {game.description}
            </p>
            {game.controls && (
              <div className="bg-void border border-border rounded-xl p-5 mb-4">
                <h3 className="font-display font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  Controls
                </h3>
                <p className="text-text-primary font-mono text-sm">{game.controls}</p>
              </div>
            )}
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-void border border-border rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">1️⃣</div>
                <h4 className="font-display font-semibold text-text-primary mb-1">Hit Play</h4>
                <p className="text-sm text-text-muted">Scroll up, click the button, game starts instantly</p>
              </div>
              <div className="bg-void border border-border rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">2️⃣</div>
                <h4 className="font-display font-semibold text-text-primary mb-1">No Waiting</h4>
                <p className="text-sm text-text-muted">It loads right in your tab. Zero downloads.</p>
              </div>
              <div className="bg-void border border-border rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">3️⃣</div>
                <h4 className="font-display font-semibold text-text-primary mb-1">Have a Blast</h4>
                <p className="text-sm text-text-muted">{game.name} is yours to master. Go for it!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Rich SEO Content */}
      <section className="py-16 px-4 sm:px-6 bg-void">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-amber"></span>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-8">
            Quick Questions, Answered
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-surface border border-border rounded-xl overflow-hidden"
                open={index === 0}
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

      {/* Related Games */}
      {relatedGames.length > 0 && (
        <section className="py-16 px-4 sm:px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">You May Also Like</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-8">
              More Free {game.category} Games
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedGames.map((g) => (
                <Html5GameCard key={g.slug} game={g} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
