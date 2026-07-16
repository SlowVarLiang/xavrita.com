import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { html5Games, getGameBySlug } from '@/lib/html5-games'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return html5Games.map((game) => ({ slug: game.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const game = getGameBySlug(params.slug)
  if (!game) return { title: 'Wiki Not Found | Xavrito' }
  return {
    title: `${game.name} Wiki - Tips, Guide & Strategy | Xavrito`,
    description: `Complete wiki for ${game.name}. ${game.description} Learn tips, strategies, and how to master this ${game.category} game.`,
  }
}

const WIKI_CONTENT: Record<string, {
  overview: string
  mechanics: string[]
  advancedTips: string[]
  commonMistakes: string[]
  faqs: { q: string; a: string }[]
}> = {
  Puzzle: {
    overview: 'Puzzle games challenge your brain with logic, pattern recognition, and problem-solving. Each level presents a unique challenge that requires creative thinking to solve.',
    mechanics: ['Pattern matching and recognition', 'Logical deduction and sequencing', 'Spatial reasoning and visualization', 'Time-based challenges in some levels', 'Multi-step solution planning'],
    advancedTips: ['Look at the entire puzzle before making moves', 'Work backwards from the goal when stuck', 'Break complex puzzles into smaller parts', 'Practice pattern recognition with daily puzzles', 'Take breaks to refresh your perspective'],
    commonMistakes: ['Rushing without analyzing the puzzle first', 'Ignoring hint systems available in-game', 'Sticking to one approach when rotation helps', 'Not using undo features to experiment', 'Giving up too quickly on harder levels'],
    faqs: [
      { q: 'How do I improve at puzzle games?', a: 'Start with easier puzzles to build pattern recognition skills. Gradually increase difficulty. Practice regularly, even just 10-15 minutes daily.' },
      { q: 'Are there in-app purchases?', a: 'Most puzzle games on Xavrito are completely free with no purchases required.' },
      { q: 'Can I play offline?', a: 'Yes! HTML5 games load in your browser and can often be played offline once loaded.' }
    ]
  },
  Action: {
    overview: 'Action games test your reflexes, timing, and spatial awareness. Fast-paced gameplay requires quick reactions and precise controls.',
    mechanics: ['Real-time combat and movement', 'Timing-based attacks and dodges', 'Combo systems and special moves', 'Enemy pattern recognition', 'Precision aiming and shooting'],
    advancedTips: ['Learn enemy attack patterns before engaging', 'Master the dodge/roll timing windows', 'Chain combos for maximum damage output', 'Use the environment to your advantage', 'Practice difficult sections repeatedly'],
    commonMistakes: ['Button mashing instead of strategic play', 'Ignoring health/skill cooldowns', 'Fighting multiple enemies without crowd control', 'Not upgrading weapons/abilities when possible', 'Rushing into combat without a plan'],
    faqs: [
      { q: 'How can I get better at action games?', a: 'Practice the basics until they become muscle memory. Focus on dodging and timing before worrying about damage combos.' },
      { q: 'What controls work best?', a: 'Keyboard and mouse provide the most precision. Some games also support gamepads.' },
      { q: 'Are there checkpoints?', a: 'Most action games have auto-save or checkpoint systems. Check individual game descriptions for details.' }
    ]
  },
  Arcade: {
    overview: 'Arcade games deliver classic "one more try" gameplay with simple controls and addictive high-score chasing mechanics.',
    mechanics: ['Simple one or two-button controls', 'High score and combo tracking', 'Procedural or designed challenge layouts', 'Power-ups and bonus items', 'Increasing difficulty progression'],
    advancedTips: ['Focus on consistency over risky plays', 'Learn optimal routes through levels', 'Time power-up collection strategically', 'Watch for patterns in enemy/obstacle placement', 'Set personal score goals for motivation'],
    commonMistakes: ['Taking unnecessary risks for bonus points', 'Not watching the full game over screen for tips', 'Playing too fast without precision', 'Ignoring combo multipliers', 'Not practicing easier levels first'],
    faqs: [
      { q: 'How are high scores saved?', a: 'Scores are typically saved locally in your browser. Clearing browser data may reset scores.' },
      { q: 'Can I pause the game?', a: 'Most arcade games support pause. Look for a pause button or press ESC.' },
      { q: 'Are there multiple difficulty levels?', a: 'Difficulty varies by game. Some automatically adjust, others let you choose.' }
    ]
  },
  Racing: {
    overview: 'Racing games combine speed with strategy. Master your vehicle, learn the tracks, and push your limits for the best times.',
    mechanics: ['Acceleration and braking control', 'Steering and drift mechanics', 'Speed management on curves', 'Shortcut discovery and usage', 'Lap time optimization'],
    advancedTips: ['Learn the optimal racing line for each track', 'Master braking points for corners', 'Use draft/slipstream for speed boosts', 'Find and utilize shortcuts consistently', 'Practice one track until mastered'],
    commonMistakes: ['Braking too late or too early into corners', 'Taking unfamiliar shortcuts under pressure', 'Racing too aggressively and crashing', 'Not watching replay of faster drivers', 'Ignoring tire/vehicle condition'],
    faqs: [
      { q: 'Do I need a racing wheel?', a: 'No! Keyboard controls work great for most racing games.' },
      { q: 'How do I find shortcuts?', a: 'Watch skilled players, explore tracks thoroughly, and look for gaps or elevated paths.' },
      { q: 'Are there different vehicles?', a: 'Many racing games offer multiple vehicles with different stats.' }
    ]
  },
  Sports: {
    overview: 'Sports games simulate your favorite athletic activities with realistic physics and game-feel. Master timing and positioning to dominate.',
    mechanics: ['Timing-based action execution', 'Player/team positioning', 'Physics-based ball/object interaction', 'AI opponent behavior reading', 'Special moves and techniques'],
    advancedTips: ['Study the AI patterns and tendencies', 'Master fundamental controls before tricks', 'Use practice mode to perfect moves', 'Focus on defense as well as offense', 'Learn advanced techniques progressively'],
    commonMistakes: ['Only focusing on scoring, neglecting defense', 'Using advanced moves before mastering basics', 'Not adjusting strategy based on opponent', 'Rushing actions instead of waiting for openings', 'Ignoring tutorial/training modes'],
    faqs: [
      { q: 'Can I play with friends?', a: 'Most sports games on Xavrito are single-player. Check individual game descriptions.' },
      { q: 'Are real-world sports skills helpful?', a: 'Understanding the sport helps, but games simplify mechanics for accessibility.' },
      { q: 'Do I need good reflexes?', a: 'Good timing is important, but strategic thinking matters equally.' }
    ]
  },
  Simulation: {
    overview: 'Simulation games replicate real-world activities with varying degrees of realism. Take your time to learn the systems and enjoy the immersive experience.',
    mechanics: ['Realistic physics and systems', 'Resource management and planning', 'Learning curves specific to each activity', 'Long-term progression and upgrades', 'Environmental interaction'],
    advancedTips: ['Start in beginner mode to learn basics', 'Read tutorials and tooltips carefully', 'Save frequently as decisions have consequences', 'Experiment in safe environments first', 'Join communities for tips specific to the sim'],
    commonMistakes: ['Skipping tutorials and missing key mechanics', 'Not saving frequently enough', 'Overwhelm by systems - learn progressively', 'Not adjusting realism settings to match skill', 'Giving up too quickly on the learning curve'],
    faqs: [
      { q: 'Are simulation games realistic?', a: 'They balance realism with fun. Some aim for authenticity, others for accessible arcade-style simulation.' },
      { q: 'Do I need special equipment?', a: 'Mouse and keyboard work for most. Some games support gamepads for enhanced control.' },
      { q: 'How do I save progress?', a: 'Most sims have auto-save. Check pause menu for manual save options.' }
    ]
  },
  Memory: {
    overview: 'Memory games train your short-term memory through pattern recognition, sequence recall, and cognitive challenges.',
    mechanics: ['Pattern exposure and memorization', 'Sequence recall challenges', 'Increasing difficulty through longer sequences', 'Time-limited memory challenges', 'Chunking information for recall'],
    advancedTips: ['Use mnemonic devices to remember sequences', 'Chunk information into manageable pieces', 'Practice visualization of item locations', 'Take deep breaths to reduce anxiety', 'Play regularly for improvement'],
    commonMistakes: ['Trying to memorize everything at once', 'Panicking under time pressure', 'Not using systematic approaches', 'Getting frustrated after mistakes', 'Not reviewing why mistakes happened'],
    faqs: [
      { q: 'Can memory games actually improve memory?', a: 'Yes! Regular practice can help maintain and improve cognitive function.' },
      { q: 'What memory techniques work best?', a: 'The method of loci (mental journeys) and chunking (grouping) are highly effective.' },
      { q: 'How long should sessions be?', a: 'Short, frequent sessions (10-15 minutes) are more effective than long ones.' }
    ]
  },
  Stickman: {
    overview: 'Stickman games feature simple characters with fluid animations for accessible combat, adventure, and physics-based gameplay.',
    mechanics: ['Simple ragdoll physics', 'Combo-based combat systems', 'Exaggerated physics for gameplay', 'One or two-button basic actions', 'Upgrade and unlock systems'],
    advancedTips: ['Use physics to your advantage (bounces, momentum)', 'Time attacks and dodges carefully', 'Don\'t be too defensive - combos reward aggression', 'Upgrade character for significant advantages', 'Learn each enemy type\'s attack patterns'],
    commonMistakes: ['Button mashing without strategy', 'Not utilizing the environment', 'Ignoring upgrade opportunities', 'Being too defensive and missing combo chances', 'Underestimating simple-looking enemies'],
    faqs: [
      { q: 'Why are stickman games so popular?', a: 'Simple characters with fluid animations make for easy-to-understand gameplay that anyone can enjoy.' },
      { q: 'Are stickman games violent?', a: 'Most use cartoon-style violence without graphic content, similar to classic cartoons.' },
      { q: 'Do I need quick reflexes?', a: 'Some stickman games require good timing, but many are accessible to all skill levels.' }
    ]
  },
  Kids: {
    overview: 'Kids games are designed for young learners with colorful visuals, simple controls, and positive reinforcement for learning through play.',
    mechanics: ['Simple point-and-click or tap controls', 'Color and shape recognition', 'Basic math and reading challenges', 'Matching and sorting activities', 'Creative expression tools'],
    advancedTips: ['Let children explore at their own pace', 'Celebrate achievements to maintain motivation', 'Replay levels for mastery and repetition', 'Use educational games as conversation starters', 'Balance screen time with other activities'],
    commonMistakes: ['Pushing too hard for completion', 'Not allowing exploration and experimentation', 'Comparing progress to other children', 'Using games as a substitute for interaction', 'Not taking breaks during long sessions'],
    faqs: [
      { q: 'What age group are these games for?', a: 'Games range from toddler to pre-teen. Check individual game recommendations for specific ages.' },
      { q: 'Are they truly educational?', a: 'Educational games reinforce learning through engagement. They complement rather than replace traditional education.' },
      { q: 'Can multiple children play?', a: 'Most kids games are single-player. Check individual game descriptions.' }
    ]
  },
  Strategy: {
    overview: 'Strategy games challenge your tactical thinking and resource management. Plan ahead, anticipate opponent moves, and execute your strategy to victory.',
    mechanics: ['Resource gathering and management', 'Strategic unit placement and composition', 'Terrain and map control', 'Tech tree and upgrade progression', 'Multi-turn planning and execution'],
    advancedTips: ['Always scout before committing to a strategy', 'Balance economy (resources) vs military (units)', 'Learn counter-strategies for common tactics', 'Adapt your strategy based on opponent\'s moves', 'Practice specific strategies in tutorial modes'],
    commonMistakes: ['Neglecting economy for military too early', 'Not adapting strategy when it\'s clearly countered', 'Overextending without backup plans', 'Ignoring the minimap or intelligence', 'Trying to execute complex strategies too early'],
    faqs: [
      { q: 'How can I improve at strategy games?', a: 'Start with simple strategies and master them before adding complexity. Watch replays of better players to learn optimal timings.' },
      { q: 'Should I focus on attack or defense first?', a: 'Most strategy games benefit from a balanced approach. Secure your base before aggressive expansion.' },
      { q: 'Are real-time and turn-based strategies different?', a: 'Yes! Real-time requires multitasking and quick decisions. Turn-based allows time for thoughtful planning.' }
    ]
  },
  default: {
    overview: 'HTML5 games offer instant browser-based entertainment across many genres. Each game has unique mechanics and strategies to master.',
    mechanics: ['Varies by game type and genre', 'Typically mouse or keyboard controls', 'Progressive difficulty increases', 'Score tracking and high scores', 'No downloads or installations needed'],
    advancedTips: ['Read instructions before starting', 'Start with easier levels to learn mechanics', 'Practice regularly for improvement', 'Watch for patterns in gameplay', 'Have fun and enjoy the challenge!'],
    commonMistakes: ['Skipping tutorials and instructions', 'Getting frustrated after mistakes', 'Not experimenting with different strategies', 'Playing too quickly without focus', 'Giving up too soon on difficult levels'],
    faqs: [
      { q: 'Is this game free?', a: 'Yes! All games on Xavrito are 100% free with no downloads or signups required.' },
      { q: 'Can I play on mobile?', a: 'Most HTML5 games work on both desktop and mobile browsers.' },
      { q: 'Do I need to create an account?', a: 'No account needed! Just click and play instantly in your browser.' }
    ]
  }
}

export default function WikiGamePage({ params }: PageProps) {
  const game = getGameBySlug(params.slug)
  if (!game) notFound()

  const content = WIKI_CONTENT[game.category] || WIKI_CONTENT.default

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0a0910 0%, #13121c 100%)' }}>
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
          <Link href="/wiki" className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg">Wiki</Link>
          <Link href="/guides" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Guides</Link>
          <Link href="/#games" className="ml-2 px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white text-sm font-medium rounded-lg transition-colors">Play Now</Link>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="pt-20 border-b border-white/10 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/wiki" className="hover:text-purple-400 transition-colors">Wiki</Link>
            <span>/</span>
            <span className="text-white font-medium">{game.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">{game.category}</span>
                <span className="text-3xl">{game.emoji}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">{game.name} Wiki</h1>
              <p className="text-lg text-white/60 mb-6 max-w-2xl">{content.overview}</p>
              <Link href={`/games/${game.slug}`} className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-500/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                Play Now
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-purple-500/10 border border-white/10">
                <img src={game.thumbnail} alt={game.name} className="w-full h-full object-cover" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Info Cards */}
      <section className="py-8 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Category', value: game.category },
              { label: 'Controls', value: game.controls ? 'Yes' : 'Touch' },
              { label: 'Difficulty', value: 'Medium' },
              { label: 'Type', value: 'HTML5' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <span className="text-white/50 block text-sm mb-1">{item.label}</span>
                <span className="text-xl font-bold text-white">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {game.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/10 text-white/60 rounded-full text-sm capitalize">{tag.replace('-', ' ')}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanics */}
      <section className="py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-purple-500 rounded-full" />
            <h2 className="text-2xl font-bold text-white">Game Mechanics</h2>
          </div>
          <div className="grid gap-3">
            {content.mechanics.map((mechanic, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-white/60">{mechanic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Tips */}
      <section className="py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-purple-500 rounded-full" />
            <h2 className="text-2xl font-bold text-white">Advanced Tips</h2>
          </div>
          <div className="grid gap-4">
            {content.advancedTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-white/60">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-purple-500 rounded-full" />
            <h2 className="text-2xl font-bold text-white">Common Mistakes to Avoid</h2>
          </div>
          <div className="grid gap-3">
            {content.commonMistakes.map((mistake, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <p className="text-white/60">{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-purple-500 rounded-full" />
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {content.faqs.map((faq, i) => (
              <details key={i} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-medium text-white hover:text-purple-400 transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-white/40 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed border-t border-white/10 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Play Section */}
      <section className="py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Play?</h2>
          <p className="text-white/50 mb-6">Now that you know the strategies, put them to the test!</p>
          <Link href={`/games/${game.slug}`} className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-500/30 text-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            Play {game.name} Now
          </Link>
        </div>
      </section>

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
