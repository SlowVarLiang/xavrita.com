import Link from 'next/link'
import { html5Games, getFeaturedGame, categories } from '@/lib/html5-games'
import Html5GameCard from '@/components/Html5GameCard'
import { createGameSchema } from '@/lib/seo'

const featuredGame = getFeaturedGame()
const featuredGames = html5Games.filter(g => g.featured).slice(0, 6)
const latestGames = html5Games.slice(0, 8)

const faqs = [
  {
    question: 'What is Xavrito?',
    answer: 'Your new favorite way to kill time. Free browser games, no downloads, no signup — just click and play.'
  },
  {
    question: 'Wait, actually free?',
    answer: 'Yes, really. No microtransactions, no premium pass, no "you\'ve watched an ad" every 30 seconds. Just games.'
  },
  {
    question: 'Do I need an account?',
    answer: 'Nope. Click, play, done. Your privacy thanks you.'
  },
  {
    question: 'What about mobile?',
    answer: 'Most games work on phones and tablets too. Touch controls where supported.'
  },
  {
    question: 'New games incoming?',
    answer: 'We add fresh games regularly. Bookmark the page and check back whenever you\'re bored.'
  }
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      {featuredGame && (
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

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Game Info */}
              <div>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-mono text-text-muted">Staff Pick</span>
                </div>

                {/* Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4 leading-tight tracking-tight">
                  {featuredGame.name}
                </h1>

                {/* Description */}
                <p className="text-lg text-text-muted mb-8 max-w-xl leading-relaxed">
                  {featuredGame.description}
                </p>

                {/* Controls */}
                {featuredGame.controls && (
                  <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    <span className="font-mono">{featuredGame.controls}</span>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/games/${featuredGame.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-violet hover:bg-accent-violet/90 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-accent-violet/25 hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Now
                  </Link>
                  <Link
                    href="/games"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-surface hover:bg-border border border-border text-text-primary font-medium rounded-lg transition-all hover:-translate-y-0.5"
                  >
                    Browse All Games
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Game Preview */}
              <div className="relative">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl shadow-accent-violet/20">
                  <img
                    src={featuredGame.thumbnail}
                    alt={featuredGame.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                  {/* Play Button Overlay */}
                  <Link
                    href={`/games/${featuredGame.slug}`}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-20 h-20 rounded-full bg-accent-violet/90 flex items-center justify-center shadow-xl shadow-accent-violet/40 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </Link>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-violet/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-cyan/5 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Bar */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-center">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-accent-violet">{html5Games.length}+</div>
              <div className="text-xs font-mono text-text-muted mt-1">Free Games</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-accent-cyan">{categories.length - 1}</div>
              <div className="text-xs font-mono text-text-muted mt-1">Genres</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-accent-amber">Zero</div>
              <div className="text-xs font-mono text-text-muted mt-1">Cost</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-500">Instant</div>
              <div className="text-xs font-mono text-text-muted mt-1">Play</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-rose-500">24/7</div>
              <div className="text-xs font-mono text-text-muted mt-1">Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 px-4 sm:px-6 bg-void">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Top Picks</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
                Featured Games
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredGames.map((game) => (
              <Html5GameCard key={game.slug} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Browser */}
      <section className="py-20 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Browse by Type</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              Find Your Favorite
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {categories.filter(c => c !== 'All').map((category) => (
              <Link
                key={category}
                href={`/games?category=${encodeURIComponent(category)}`}
                className="group flex items-center gap-3 px-5 py-4 bg-void border border-border rounded-xl hover:border-accent-violet/50 hover:bg-void/80 transition-all"
              >
                <span className="w-10 h-10 rounded-lg bg-accent-violet/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  {category === 'Action' && '⚔️'}
                  {category === 'Puzzle' && '🧩'}
                  {category === 'io' && '🔵'}
                  {category === 'Arcade' && '🎮'}
                  {category === 'Multiplayer' && '👥'}
                  {category === 'Racing' && '🏎️'}
                  {category === 'Strategy' && '♟️'}
                </span>
                <span className="font-medium text-text-primary group-hover:text-accent-violet transition-colors">
                  {category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Games */}
      <section className="py-20 px-4 sm:px-6 bg-void">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-amber"></span>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Just Added</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
                Latest Games
              </h2>
            </div>
            <Link
              href="/games"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-accent-cyan hover:text-accent-cyan/80 transition-colors"
            >
              See More
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {latestGames.map((game) => (
              <Html5GameCard key={game.slug} game={game} />
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
              Why Hang Here?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-6 bg-void border border-border rounded-xl hover:border-accent-violet/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-text-primary mb-2">Instant Play</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Click a game, game starts. No waiting, no installing, no "update in progress."
              </p>
            </div>

            <div className="group p-6 bg-void border border-border rounded-xl hover:border-accent-cyan/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-text-primary mb-2">Always Free</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Every game. Every feature. Every day. Zero dollars spent.
              </p>
            </div>

            <div className="group p-6 bg-void border border-border rounded-xl hover:border-accent-amber/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent-amber/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-text-primary mb-2">New Games Weekly</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Bored of the same rotation? New arrivals every week. Check in often.
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
              Got Questions?
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createGameSchema(html5Games)) }}
      />
    </>
  )
}
