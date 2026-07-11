import Link from 'next/link'
import { notFound } from 'next/navigation'
import { html5Games, getGameBySlug, getRelatedGames } from '@/lib/html5-games'
import GameEmbed from '@/components/GameEmbed'
import Html5GameCard from '@/components/Html5GameCard'

interface PageProps {
  params: { slug: string }
}

// Category-specific content and tips
const CATEGORY_CONTENT: Record<string, {
  tips: string[]
  faqs: { q: string; a: string }[]
  howToPlay: string
}> = {
  Puzzle: {
    tips: [
      'Take your time - most puzzles have a logical solution',
      'Look for patterns before making moves',
      'Some levels require multiple steps - plan ahead',
      'Practice makes perfect - retry difficult levels'
    ],
    faqs: [
      { q: 'How do I master puzzle games?', a: 'Start with easy levels to understand the mechanics, then gradually tackle harder puzzles. Pattern recognition improves with practice.' },
      { q: 'Are there time limits?', a: 'Most puzzle games on Xavrito are untimed, letting you think through solutions at your own pace.' }
    ],
    howToPlay: 'Puzzle games challenge your brain. Analyze the level, spot patterns, and execute your strategy.'
  },
  Action: {
    tips: [
      'Quick reflexes are key - stay alert',
      'Learn the enemy patterns to anticipate attacks',
      'Upgrade weapons or abilities when possible',
      'Don\'t be afraid to retry - practice improves reaction time'
    ],
    faqs: [
      { q: 'How can I improve my scores?', a: 'Focus on accuracy over speed initially. Once you\'ve mastered the controls, speed will come naturally.' },
      { q: 'Are action games suitable for beginners?', a: 'Yes! Start with easier levels and work your way up. Most action games have simple controls.' }
    ],
    howToPlay: 'Action games test your reflexes and timing. Master the controls, read enemy patterns, and strike at the right moment.'
  },
  Arcade: {
    tips: [
      'High scores require consistency - aim for perfect runs',
      'Learn optimal routes or patterns early',
      'Bonus items often appear in tricky spots - risk vs reward',
      'Arcade games are meant to be fun - enjoy the challenge'
    ],
    faqs: [
      { q: 'What makes arcade games different?', a: 'Arcade games typically have simple controls with challenging gameplay. They\'re designed for quick sessions and "one more try" appeal.' },
      { q: 'Can I save my progress?', a: 'Progress is usually saved automatically within your browser session.' }
    ],
    howToPlay: 'Arcade games are all about high scores and quick sessions. Pick up, play, master, repeat.'
  },
  Racing: {
    tips: [
      'Learn the track layout before pushing speed limits',
      'Braking at the right moment saves time overall',
      'Watch for shortcuts - they can make the difference',
      'Consistent lap times beat one fast lap followed by crashes'
    ],
    faqs: [
      { q: 'Do I need a racing wheel to play?', a: 'Keyboard controls work great for most racing games. A wheel can enhance the experience but isn\'t required.' },
      { q: 'Are there different difficulty levels?', a: 'Most racing games adjust difficulty based on your performance automatically.' }
    ],
    howToPlay: 'Racing games combine speed with strategy. Learn tracks, perfect your racing line, and balance risk against reward.'
  },
  Sports: {
    tips: [
      'Practice basic mechanics before trying advanced moves',
      'Timing is everything - watch and wait for the right moment',
      'Study the AI patterns to predict their actions',
      'Sports games reward patience and precision'
    ],
    faqs: [
      { q: 'Can I play against friends?', a: 'Currently Xavrito features single-player sports games. Multiplayer modes vary by game.' },
      { q: 'Are real-world sports knowledge helpful?', a: 'Understanding the sport helps, but games simplify mechanics for accessibility.' }
    ],
    howToPlay: 'Sports games simulate your favorite athletic activities. Master timing, positioning, and strategy to win.'
  },
  Simulation: {
    tips: [
      'Start in beginner mode to learn the basics',
      'Realism varies - adjust settings to your preference',
      'Read tutorials if available - simulation games can be complex',
      'Take breaks - long sessions can lead to mistakes'
    ],
    faqs: [
      { q: 'Are simulation games realistic?', a: 'They balance realism with fun gameplay. Some aim for photo-realism, others for arcade-style accessibility.' },
      { q: 'Do I need special equipment?', a: 'Mouse and keyboard work well. Some games support gamepads for enhanced control.' }
    ],
    howToPlay: 'Simulation games replicate real-world activities. Take your time to learn the systems and enjoy the immersive experience.'
  },
  Memory: {
    tips: [
      'Start by memorizing a few items at a time',
      'Visualization helps - imagine where items are located',
      'Break complex patterns into smaller chunks',
      'Short, frequent sessions work better than long ones'
    ],
    faqs: [
      { q: 'Can memory games improve my memory?', a: 'Yes! Regular practice with memory games can help maintain and improve cognitive function.' },
      { q: 'What memory techniques work best?', a: 'The method of loci (placing items along a mental journey) and chunking (grouping items) are highly effective.' }
    ],
    howToPlay: 'Memory games challenge your short-term memory. Focus, observe carefully, and try to retain as much information as possible.'
  },
  Stickman: {
    tips: [
      'Stickman games often have exaggerated physics - use them to your advantage',
      'Timing your attacks and dodges is crucial',
      'Combo systems reward aggressive play - don\'t be too defensive',
      'Upgrade your character when possible for an edge'
    ],
    faqs: [
      { q: 'Why are stickman games so popular?', a: 'Simple characters with fluid animations make for easy-to-understand gameplay that anyone can enjoy.' },
      { q: 'Are stickman games violent?', a: 'Most stickman games use cartoon-style violence without graphic content. They\'re similar to classic cartoons.' }
    ],
    howToPlay: 'Stickman games use simple characters for accessible combat and adventure. Master the controls and use physics to your advantage.'
  },
  Kids: {
    tips: [
      'Let children explore at their own pace',
      'Educational games work best with parental guidance',
      'Repetition reinforces learning - encourage multiple attempts',
      'Celebrate achievements to maintain motivation'
    ],
    faqs: [
      { q: 'What age group are kids games suitable for?', a: 'Games range from toddler-level to pre-teen. Check individual game recommendations for specific age ranges.' },
      { q: 'Are the educational claims real?', a: 'Educational games can reinforce learning through engagement, but should complement rather than replace traditional education.' }
    ],
    howToPlay: 'Kids games are designed for young learners. Colorful visuals, simple controls, and positive reinforcement make learning fun.'
  },
  default: {
    tips: [
      'Read the instructions carefully before starting',
      'Start with easy levels to understand the mechanics',
      'Don\'t be afraid to experiment with different strategies',
      'Have fun and enjoy the challenge!'
    ],
    faqs: [
      { q: 'Is this game free to play?', a: 'Yes! All games on Xavrito are 100% free with no downloads or signups required.' },
      { q: 'Can I play on mobile?', a: 'Most HTML5 games work on both desktop and mobile browsers. Touch controls are supported where applicable.' }
    ],
    howToPlay: 'Jump in and start playing! HTML5 games load instantly in your browser.'
  }
}

export async function generateStaticParams() {
  return html5Games.map((game) => ({
    slug: game.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const game = getGameBySlug(params.slug)
  if (!game) {
    return { title: 'Game Not Found | Xavrito' }
  }

  const categoryContent = CATEGORY_CONTENT[game.category] || CATEGORY_CONTENT.default

  return {
    title: `${game.name} - Free Online ${game.category} Game | Xavrito`,
    description: `${game.description} Play instantly in your browser. ${game.category} game with ${game.controls ? 'controls: ' + game.controls : 'no download required'}.`,
    keywords: [
      game.name,
      `play ${game.name}`,
      `free ${game.category} game`,
      `${game.name} online`,
      `${game.category} games`,
      ...game.tags,
      'HTML5 game',
      'browser game',
      'free online game'
    ],
    openGraph: {
      title: `${game.name} | Free ${game.category} Game`,
      description: game.description,
      images: [{ url: game.thumbnail, width: 800, height: 600 }],
      type: 'website',
    },
  }
}

export default function GamePage({ params }: PageProps) {
  const game = getGameBySlug(params.slug)

  if (!game) {
    notFound()
  }

  const relatedGames = getRelatedGames(game, 4)
  const categoryContent = CATEGORY_CONTENT[game.category] || CATEGORY_CONTENT.default

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#FAFAF9] border-b border-[#E7E5E4] py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#78716C]">
            <Link href="/" className="hover:text-[#F97316] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/" className="hover:text-[#F97316] transition-colors">Games</Link>
            <span>/</span>
            <span className="text-[#1C1917] font-medium">{game.name}</span>
          </nav>
        </div>
      </div>

      {/* Game Hero */}
      <section className="bg-[#FAFAF9] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left: Info (3 cols) */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#F97316]/10 text-[#F97316] rounded-full text-sm font-medium">
                  {game.category}
                </span>
                <span className="text-2xl">{game.emoji}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mb-4 leading-tight">
                {game.name}
              </h1>

              <p className="text-lg text-[#78716C] mb-6 leading-relaxed max-w-2xl">
                {game.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#F5F5F4] text-[#78716C] rounded-full text-xs font-medium capitalize"
                  >
                    {tag.replace('-', ' ')}
                  </span>
                ))}
              </div>

              {/* Controls */}
              {game.controls && (
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E7E5E4] shadow-sm">
                  <svg className="w-5 h-5 text-[#F97316] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  <div>
                    <span className="text-xs text-[#A8A29E] uppercase tracking-wide">Controls</span>
                    <p className="text-sm text-[#1C1917] font-medium">{game.controls}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Thumbnail (2 cols) */}
            <div className="lg:col-span-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-orange-500/10 border border-[#E7E5E4]">
                <img
                  src={game.thumbnail}
                  alt={game.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Embed */}
      <section id="play" className="bg-white py-12 px-4 sm:px-6 border-t border-[#E7E5E4]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#F97316] rounded-full" />
            <h2 className="font-display text-lg font-semibold text-[#1C1917]">Play {game.name}</h2>
          </div>
          <GameEmbed game={game} />
        </div>
      </section>

      {/* How to Play */}
      <section className="bg-[#FAFAF9] py-12 px-4 sm:px-6 border-t border-[#E7E5E4]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-[#F97316] rounded-full" />
            <h2 className="font-display text-xl font-bold text-[#1C1917]">How to Play {game.name}</h2>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#E7E5E4]">
            <p className="text-[#78716C] leading-relaxed">
              {categoryContent.howToPlay}
            </p>
            {game.controls && (
              <div className="mt-4 pt-4 border-t border-[#E7E5E4]">
                <h3 className="font-semibold text-[#1C1917] mb-2">Controls</h3>
                <p className="text-[#78716C]">{game.controls}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-white py-12 px-4 sm:px-6 border-t border-[#E7E5E4]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-[#F97316] rounded-full" />
            <h2 className="font-display text-xl font-bold text-[#1C1917]">{game.name} Tips & Tricks</h2>
          </div>
          <div className="grid gap-4">
            {categoryContent.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-[#FAFAF9] rounded-xl border border-[#E7E5E4]">
                <div className="w-6 h-6 bg-[#F97316]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#F97316] text-sm font-bold">{i + 1}</span>
                </div>
                <p className="text-[#78716C]">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#FAFAF9] py-12 px-4 sm:px-6 border-t border-[#E7E5E4]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-[#F97316] rounded-full" />
            <h2 className="font-display text-xl font-bold text-[#1C1917]">FAQ - {game.name}</h2>
          </div>
          <div className="space-y-3">
            {categoryContent.faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-[#E7E5E4] rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-[#1C1917] hover:text-[#F97316] transition-colors">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-[#A8A29E] group-open:rotate-180 transition-transform flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-[#78716C] leading-relaxed border-t border-[#E7E5E4] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
            <details className="group bg-white border border-[#E7E5E4] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-[#1C1917] hover:text-[#F97316] transition-colors">
                Is {game.name} free to play?
                <svg
                  className="w-5 h-5 text-[#A8A29E] group-open:rotate-180 transition-transform flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-[#78716C] leading-relaxed border-t border-[#E7E5E4] pt-4">
                Yes! {game.name} is 100% free to play on Xavrito. No downloads, no signups, no payments - just open and play instantly in your browser.
              </div>
            </details>
            <details className="group bg-white border border-[#E7E5E4] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-[#1C1917] hover:text-[#F97316] transition-colors">
                Can I play {game.name} on mobile?
                <svg
                  className="w-5 h-5 text-[#A8A29E] group-open:rotate-180 transition-transform flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-[#78716C] leading-relaxed border-t border-[#E7E5E4] pt-4">
                Most games on Xavrito work on both desktop and mobile browsers. Touch controls are supported where applicable. For the best experience, we recommend playing on a larger screen with a keyboard and mouse.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Games */}
      {relatedGames.length > 0 && (
        <section className="bg-white py-12 px-4 sm:px-6 border-t border-[#E7E5E4]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-1 bg-[#F97316] rounded-full" />
              <h2 className="font-display text-xl font-bold text-[#1C1917]">More {game.category} Games</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {relatedGames.map((g) => (
                <Html5GameCard key={g.slug} game={g} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
