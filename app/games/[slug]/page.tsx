import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { html5Games, getGameBySlug, getRelatedGames } from '@/lib/html5-games'
import GameEmbed from '@/components/GameEmbed'
import Html5GameCard from '@/components/Html5GameCard'
import GamePageActions from '@/components/GamePageActions'

interface PageProps {
  params: { slug: string }
}

const CATEGORY_CONTENT: Record<string, {
  tips: string[]
  faqs: { q: string; a: string }[]
  howToPlay: string
}> = {
  Puzzle: {
    tips: ['Take your time - most puzzles have a logical solution', 'Look for patterns before making moves', 'Some levels require multiple steps - plan ahead', 'Practice makes perfect - retry difficult levels'],
    faqs: [
      { q: 'How do I master puzzle games?', a: 'Start with easy levels to understand the mechanics, then gradually tackle harder puzzles. Pattern recognition improves with practice.' },
      { q: 'Are there time limits?', a: 'Most puzzle games on Xavrito are untimed, letting you think through solutions at your own pace.' }
    ],
    howToPlay: 'Puzzle games challenge your brain. Analyze the level, spot patterns, and execute your strategy.'
  },
  Action: {
    tips: ['Quick reflexes are key - stay alert', 'Learn the enemy patterns to anticipate attacks', 'Upgrade weapons or abilities when possible', 'Don\'t be afraid to retry - practice improves reaction time'],
    faqs: [
      { q: 'How can I improve my scores?', a: 'Focus on accuracy over speed initially. Once you\'ve mastered the controls, speed will come naturally.' },
      { q: 'Are action games suitable for beginners?', a: 'Yes! Start with easier levels and work your way up. Most action games have simple controls.' }
    ],
    howToPlay: 'Action games test your reflexes and timing. Master the controls, read enemy patterns, and strike at the right moment.'
  },
  Arcade: {
    tips: ['High scores require consistency - aim for perfect runs', 'Learn optimal routes or patterns early', 'Bonus items often appear in tricky spots - risk vs reward', 'Arcade games are meant to be fun - enjoy the challenge'],
    faqs: [
      { q: 'What makes arcade games different?', a: 'Arcade games typically have simple controls with challenging gameplay. They\'re designed for quick sessions and "one more try" appeal.' },
      { q: 'Can I save my progress?', a: 'Progress is usually saved automatically within your browser session.' }
    ],
    howToPlay: 'Arcade games are all about high scores and quick sessions. Pick up, play, master, repeat.'
  },
  Racing: {
    tips: ['Learn the track layout before pushing speed limits', 'Braking at the right moment saves time overall', 'Watch for shortcuts - they can make the difference', 'Consistent lap times beat one fast lap followed by crashes'],
    faqs: [
      { q: 'Do I need a racing wheel to play?', a: 'Keyboard controls work great for most racing games. A wheel can enhance the experience but isn\'t required.' },
      { q: 'Are there different difficulty levels?', a: 'Most racing games adjust difficulty based on your performance automatically.' }
    ],
    howToPlay: 'Racing games combine speed with strategy. Learn tracks, perfect your racing line, and balance risk against reward.'
  },
  Sports: {
    tips: ['Practice basic mechanics before trying advanced moves', 'Timing is everything - watch and wait for the right moment', 'Study the AI patterns to predict their actions', 'Sports games reward patience and precision'],
    faqs: [
      { q: 'Can I play against friends?', a: 'Currently Xavrito features single-player sports games. Multiplayer modes vary by game.' },
      { q: 'Are real-world sports knowledge helpful?', a: 'Understanding the sport helps, but games simplify mechanics for accessibility.' }
    ],
    howToPlay: 'Sports games simulate your favorite athletic activities. Master timing, positioning, and strategy to win.'
  },
  Simulation: {
    tips: ['Start in beginner mode to learn the basics', 'Realism varies - adjust settings to your preference', 'Read tutorials if available - simulation games can be complex', 'Take breaks - long sessions can lead to mistakes'],
    faqs: [
      { q: 'Are simulation games realistic?', a: 'They balance realism with fun gameplay. Some aim for photo-realism, others for arcade-style accessibility.' },
      { q: 'Do I need special equipment?', a: 'Mouse and keyboard work well. Some games support gamepads for enhanced control.' }
    ],
    howToPlay: 'Simulation games replicate real-world activities. Take your time to learn the systems and enjoy the immersive experience.'
  },
  Memory: {
    tips: ['Start by memorizing a few items at a time', 'Visualization helps - imagine where items are located', 'Break complex patterns into smaller chunks', 'Short, frequent sessions work better than long ones'],
    faqs: [
      { q: 'Can memory games improve my memory?', a: 'Yes! Regular practice with memory games can help maintain and improve cognitive function.' },
      { q: 'What memory techniques work best?', a: 'The method of loci (placing items along a mental journey) and chunking (grouping items) are highly effective.' }
    ],
    howToPlay: 'Memory games challenge your short-term memory. Focus, observe carefully, and try to retain as much information as possible.'
  },
  Stickman: {
    tips: ['Stickman games often have exaggerated physics - use them to your advantage', 'Timing your attacks and dodges is crucial', 'Combo systems reward aggressive play - don\'t be too defensive', 'Upgrade your character when possible for an edge'],
    faqs: [
      { q: 'Why are stickman games so popular?', a: 'Simple characters with fluid animations make for easy-to-understand gameplay that anyone can enjoy.' },
      { q: 'Are stickman games violent?', a: 'Most stickman games use cartoon-style violence without graphic content. They\'re similar to classic cartoons.' }
    ],
    howToPlay: 'Stickman games use simple characters for accessible combat and adventure. Master the controls and use physics to your advantage.'
  },
  Kids: {
    tips: ['Let children explore at their own pace', 'Educational games work best with parental guidance', 'Repetition reinforces learning - encourage multiple attempts', 'Celebrate achievements to maintain motivation'],
    faqs: [
      { q: 'What age group are kids games suitable for?', a: 'Games range from toddler-level to pre-teen. Check individual game recommendations for specific age ranges.' },
      { q: 'Are the educational claims real?', a: 'Educational games can reinforce learning through engagement, but should complement rather than replace traditional education.' }
    ],
    howToPlay: 'Kids games are designed for young learners. Colorful visuals, simple controls, and positive reinforcement make learning fun.'
  },
  Strategy: {
    tips: ['Plan ahead before making moves', 'Balance your resources carefully', 'Learn counter-strategies to common tactics', 'Adapt your strategy based on the situation', 'Practice specific strategies to master them'],
    faqs: [
      { q: 'What makes a good strategy?', a: 'A good strategy adapts to the situation. Flexible strategies that can counter multiple approaches tend to be most effective.' },
      { q: 'Is Strategy game different from puzzle?', a: 'Strategy involves resource management and planning against an opponent. Puzzles are more about solving a static problem.' },
      { q: 'Can I play strategy games against AI?', a: 'Yes! Most strategy games feature AI opponents of varying difficulty levels.' }
    ],
    howToPlay: 'Strategy games test your tactical thinking. Plan ahead, manage resources, and outmaneuver your opponent.'
  },
  default: {
    tips: ['Read the instructions carefully before starting', 'Start with easy levels to understand the mechanics', 'Don\'t be afraid to experiment with different strategies', 'Have fun and enjoy the challenge!'],
    faqs: [
      { q: 'Is this game free to play?', a: 'Yes! All games on Xavrito are 100% free with no downloads or signups required.' },
      { q: 'Can I play on mobile?', a: 'Most HTML5 games work on both desktop and mobile browsers. Touch controls are supported where applicable.' }
    ],
    howToPlay: 'Jump in and start playing! HTML5 games load instantly in your browser.'
  }
}

// ─────────────────────────────────────────────────────────────────────
// SEO helpers (webgogogo TDH formula)
// ─────────────────────────────────────────────────────────────────────

/**
 * Build a per-game SEO description in the 150-160 char sweet spot
 * (webgogogo: 关键词 + 价值主张 + 行动号召).
 */
function buildDescription(game: ReturnType<typeof getGameBySlug>): string {
  if (!game) return ''
  const base = game.description.replace(/\.$/, '')
  const tag = game.tags[0] || game.category.toLowerCase()
  const cta = `Play ${game.name} free in your browser — no download, no signup.`
  // e.g. "Rotate 3D cubes to match colors in this addictive puzzle. Play Prism Match 3D free in your browser — no download, no signup."
  const out = `${base} ${cta}`
  // Trim/pad to 150-160 chars
  if (out.length < 150) {
    return out + ` ${game.name} is a top-rated ${tag} ${game.category.toLowerCase()} game on Xavrito.`
  }
  if (out.length > 160) {
    return out.slice(0, 157).replace(/[,.;:!?]?[^,.;:!?]*$/, '.')
  }
  return out
}

/**
 * Build a per-game "About" long-form paragraph (200+ words) for SEO body
 * density. Uses the game's category + tags to weave in keyword variations
 * without being spammy.
 */
function buildAboutText(game: NonNullable<ReturnType<typeof getGameBySlug>>): string {
  const tag1 = game.tags[0] || game.category.toLowerCase()
  const tag2 = game.tags[1] || 'arcade'
  const tag3 = game.tags[2] || 'casual'
  return `Looking for a free ${game.category.toLowerCase()} game online? ${game.name} is one of the most popular ${tag1} titles on Xavrito, and you can play it instantly in your browser — no download, no signup, no payment required. ${game.description} Whether you are a casual player looking for a quick break or a dedicated gamer chasing the highest score, ${game.name} delivers the kind of fast, accessible fun that has made HTML5 games so popular. With simple controls and a clean visual design, ${game.name} works on any device — desktop, laptop, tablet, or phone. The game loads directly in your browser and runs at 60fps, so you get smooth gameplay without any installations or plugins.

${game.name} is part of our curated ${game.category} collection, which features the best free browser games from the GamePix network. We add new ${game.category.toLowerCase()} games every week, so bookmark this page and check back for fresh challenges. The controls are straightforward${game.controls ? ` (${game.controls.toLowerCase()})` : ''}, and each session takes just a few minutes, making ${game.name} perfect for a quick coffee break or a longer gaming session.

Players who enjoy ${game.name} also tend to like our other ${tag1}, ${tag2}, and ${tag3} titles — check out the related games section below for more free ${game.category.toLowerCase()} hits. Whether you are searching for ${tag1} games, ${game.category.toLowerCase()} games, or just a fun way to kill five minutes online, ${game.name} delivers. Bookmark this page, share with friends, and come back tomorrow for a new high score.`
}

/**
 * Build a 80-word "Why play" benefits paragraph.
 */
function buildWhyPlayText(game: NonNullable<ReturnType<typeof getGameBySlug>>): string {
  return `Why play ${game.name} on Xavrito? Five reasons. First, it is 100% free with no ads mid-gameplay and no paywalls. Second, it runs in any modern browser with no download, no plugin, and no account. Third, the controls are dead simple so anyone can pick it up in seconds. Fourth, every session is short enough for a coffee break but deep enough to keep you coming back. Fifth, the ${game.category.toLowerCase()} genre is one of the most popular on Xavrito, so you have a deep catalog of similar games to try next.`
}

export async function generateStaticParams() {
  return html5Games.map((game) => ({ slug: game.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const game = getGameBySlug(params.slug)
  if (!game) return { title: 'Game Not Found | Xavrito' }

  const description = buildDescription(game)
  const canonical = `https://xavrito.com/games/${game.slug}`
  const keywords = [
    game.name,
    `${game.name} game`,
    `${game.name} online`,
    `play ${game.name}`,
    `free ${game.name}`,
    `${game.category} games`,
    `free ${game.category.toLowerCase()} games`,
    ...game.tags.slice(0, 3),
  ]

  return {
    // Note: the root layout's title template is '%s | Xavrito', so the per-page
    // title here should NOT include '| Xavrito' to avoid duplication.
    title: `${game.name} - Free Online ${game.category} Game`,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      // Note: Next.js's strict `og:type` union doesn't include 'video.game'
      // (allowed: video.movie, video.episode, video.tv_show, video.other).
      // We use 'video.other' for closest semantic match + add 'video.game'
      // semantics via the JSON-LD VideoGame schema (more authoritative).
      type: 'video.other',
      locale: 'en_US',
      url: canonical,
      siteName: 'Xavrito',
      title: `${game.name} - Free ${game.category} Game Online`,
      description,
      images: [
        {
          url: game.thumbnail,
          width: 400,
          height: 246,
          alt: `${game.name} - Free ${game.category} game screenshot`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.name} - Free Online ${game.category} Game`,
      description,
      images: [game.thumbnail],
    },
    robots: { index: true, follow: true },
  }
}

export default function GamePage({ params }: PageProps) {
  const game = getGameBySlug(params.slug)
  if (!game) notFound()

  const relatedGames = getRelatedGames(game, 4)
  const categoryContent = CATEGORY_CONTENT[game.category] || CATEGORY_CONTENT.default

  // Per-game authored content (webgogogo 精品 landing page) — fall back to
  // generated per-category content when game.seo is not authored.
  const seo = game.seo
  const h1Text        = seo?.h1        ?? `${game.name} — Free ${game.category} Game Online`
  const subtitleText  = seo?.subtitle  ?? 'Free to play in your browser. No download. No signup.'
  const introText     = seo?.intro     ?? game.description
  const aboutParagraphs = (seo?.body   ?? buildAboutText(game)).split('\n\n')
  const tipsList      = seo?.tips      ?? categoryContent.tips
  const faqList       = seo?.faqs      ?? categoryContent.faqs
  const whyPlayText   = buildWhyPlayText(game)
  const canonical = `https://xavrito.com/games/${game.slug}`

  // ── JSON-LD: VideoGame + FAQPage + BreadcrumbList ─────────────────
  const videoGameLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.name,
    description: game.description,
    image: game.thumbnail,
    url: canonical,
    genre: game.category,
    gamePlatform: ['Web Browser', 'Windows', 'macOS', 'Linux', 'ChromeOS'],
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any (HTML5 browser)',
    inLanguage: 'en',
    playMode: 'SinglePlayer',
    keywords: game.tags.join(', '),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: canonical,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Xavrito',
      url: 'https://xavrito.com',
    },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      ...categoryContent.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
      {
        '@type': 'Question',
        name: `Is ${game.name} free to play?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes! ${game.name} is 100% free to play on Xavrito. No downloads, no signups, no payments - just open and play instantly in your browser.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I play ${game.name} on mobile?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. ${game.name} is built on HTML5 and runs in any modern mobile browser. Touch controls are supported where applicable.`,
        },
      },
      {
        '@type': 'Question',
        name: `Do I need to create an account to play ${game.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `No. ${game.name} on Xavrito requires no signup, no login, and no personal information. Open and play.`,
        },
      },
    ],
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://xavrito.com' },
      { '@type': 'ListItem', position: 2, name: game.category, item: `https://xavrito.com/#games` },
      { '@type': 'ListItem', position: 3, name: game.name, item: canonical },
    ],
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0a0910 0%, #13121c 100%)' }}>
      {/* JSON-LD: VideoGame */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameLd) }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 border-b border-white/10" style={{ background: 'rgba(10, 9, 16, 0.9)', backdropFilter: 'blur(12px)' }}>
        <Link href="/" className="flex items-center gap-2 group">
          <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="4" width="20" height="14" rx="2" fill="#A78BFA"/>
            <polygon points="13,8 13,14 19,11" fill="#1C1917"/>
            <rect x="6" y="20" width="20" height="8" rx="1" fill="#374151"/>
            <circle cx="11" cy="24" r="2" fill="#6B7280"/>
            <rect x="10.3" y="20" width="1.4" height="5" rx="0.5" fill="#9CA3AF"/>
            <circle cx="18" cy="23" r="1.2" fill="#EF4444"/>
            <circle cx="22" cy="25" r="1.2" fill="#3B82F6"/>
          </svg>
          <span className="font-bold text-xl text-white group-hover:text-purple-400 transition-colors">Xavrito</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          <Link href="/wiki" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Wiki</Link>
          <Link href="/guides" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Guides</Link>
          <Link href="/#games" className="ml-2 px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white text-sm font-medium rounded-lg transition-colors">Play Now</Link>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="pt-20 border-b border-white/10 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#games" className="hover:text-purple-400 transition-colors">Games</Link>
            <span>/</span>
            <span className="text-white font-medium">{game.name}</span>
          </nav>
        </div>
      </div>

      {/* Game Hero */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">{game.category}</span>
                <span className="text-3xl" aria-hidden="true">{game.emoji}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
                {h1Text}
              </h1>
              <p className="text-sm text-white/50 mb-4">{subtitleText}</p>
              <p className="text-lg text-white/70 mb-6 leading-relaxed max-w-2xl">{introText}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {game.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 text-white/60 rounded-full text-xs font-medium capitalize">{tag.replace(/-/g, ' ')}</span>
                ))}
              </div>

              {/* Controls */}
              {game.controls && (
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-wide">Controls</span>
                    <p className="text-sm text-white font-medium">{game.controls}</p>
                  </div>
                </div>
              )}

              {/* Favorite & Track */}
              <div className="mt-6">
                <GamePageActions slug={game.slug} />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-purple-500/10 border border-white/10">
                <img
                  src={game.thumbnail}
                  alt={`${game.name} - free online ${game.category.toLowerCase()} game screenshot`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={400}
                  height={246}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Play {name} */}
      <section id="play" className="py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-purple-500 rounded-full" />
            <h2 className="text-lg font-semibold text-white">Play {game.name} Online</h2>
          </div>
          <GameEmbed game={game} />
        </div>
      </section>

      {/* About {name} — long-form SEO body */}
      <section id="about" className="py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-purple-500 rounded-full" />
            <h2 className="text-xl font-bold text-white">About {game.name}</h2>
            {seo?.body && (
              <span className="text-xs text-white/40 uppercase tracking-wide ml-2">authored</span>
            )}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            {aboutParagraphs.map((para, i) => (
              <p key={i} className="text-white/70 leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-purple-500 rounded-full" />
            <h2 className="text-xl font-bold text-white">How to Play {game.name}</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white">The basics</h3>
            <p className="text-white/70 leading-relaxed">{categoryContent.howToPlay}</p>
            {game.controls && (
              <>
                <h3 className="text-lg font-semibold text-white pt-2 border-t border-white/10">Controls</h3>
                <p className="text-white/70 leading-relaxed">{game.controls}</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-purple-500 rounded-full" />
            <h2 className="text-xl font-bold text-white">{game.name} Tips &amp; Tricks</h2>
            {seo?.tips && (
              <span className="text-xs text-white/40 uppercase tracking-wide ml-2">authored</span>
            )}
          </div>
          <div className="grid gap-4">
            {tipsList.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-400 text-sm font-bold">{i + 1}</span>
                </div>
                <p className="text-white/70">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Play */}
      <section className="py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-purple-500 rounded-full" />
            <h2 className="text-xl font-bold text-white">Why Play {game.name} on Xavrito</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-white/70 leading-relaxed">{whyPlayText}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-purple-500 rounded-full" />
            <h2 className="text-xl font-bold text-white">FAQ — {game.name}</h2>
          </div>
          <div className="space-y-3">
            {faqList.map((faq, i) => (
              <details key={i} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-white hover:text-purple-400 transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-white/60 leading-relaxed border-t border-white/10 pt-4">{faq.a}</div>
              </details>
            ))}
            <details className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-white hover:text-purple-400 transition-colors">
                Is {game.name} free to play?
                <svg className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-white/60 leading-relaxed border-t border-white/10 pt-4">
                Yes! {game.name} is 100% free to play on Xavrito. No downloads, no signups, no payments - just open and play instantly in your browser.
              </div>
            </details>
            <details className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-white hover:text-purple-400 transition-colors">
                Can I play {game.name} on mobile?
                <svg className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-white/60 leading-relaxed border-t border-white/10 pt-4">
                Most games on Xavrito work on both desktop and mobile browsers. Touch controls are supported where applicable.
              </div>
            </details>
            <details className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-white hover:text-purple-400 transition-colors">
                Do I need to create an account to play {game.name}?
                <svg className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-white/60 leading-relaxed border-t border-white/10 pt-4">
                No. {game.name} on Xavrito requires no signup, no login, and no personal information. Just open the page and start playing instantly.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Games */}
      {relatedGames.length > 0 && (
        <section className="py-12 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-1 bg-purple-500 rounded-full" />
              <h2 className="text-xl font-bold text-white">More {game.category} Games</h2>
            </div>
            <p className="text-white/60 text-sm mb-6 max-w-3xl">
              If you enjoyed {game.name}, try these other free {game.category.toLowerCase()} games from our catalog. Each one loads instantly in your browser — no download, no signup.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {relatedGames.map((g) => (
                <Html5GameCard key={g.slug} game={g} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><span className="font-semibold text-white">Xavrito</span></div>
          <p className="text-sm text-white/50">Free HTML5 games. No downloads. No signups.</p>
        </div>
      </footer>
    </div>
  )
}