import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = GUIDE_DATA[params.slug]
  if (!guide) return { title: 'Guide Not Found | Xavrito' }
  return { title: `${guide.title} | Xavrito Guides`, description: guide.excerpt }
}

const GUIDE_DATA: Record<string, {
  title: string; category: string; excerpt: string; emoji: string; updatedAt: string; readingTime: string;
  content: { overview: string; sections: { title: string; content: string; tips?: string[] }[] }
}> = {
  'once-human-best-builds': {
    title: 'Once Human: Best Builds Guide', category: 'Survival', excerpt: 'Master the post-apocalyptic wasteland with the most powerful builds in Once Human.',
    emoji: '🔧', updatedAt: '2026-07-15', readingTime: '12 min read',
    content: {
      overview: 'Once Human (also known as Seven Days World / 七日世界) is a NetEase-developed multiplayer survival game set in a bizarre post-apocalyptic world. Hunt bosses, build bases, craft legendary weapons, and survive the chaos with your squad.',
      sections: [
        { title: 'The Memetic Specialization System', content: 'Your power in Once Human comes from Memory Anomalies - strange abilities unlocked through the mod system. There are three core specializations: Devourers (burst damage), Wanderers (mobility), and Tidecaller (support). Choose wisely, as respeccing costs resources.',
          tips: ['Devourer = glass cannon damage dealer', 'Wanderer = mobile scout and flanker', 'Tidecaller = healer and buffer for groups'] },
        { title: 'The Devourer Sniper Build - One Shot, One Kill', content: 'Devourer snipers dominate the damage charts. Stack Critical Hit Rate and Critical Damage on your mods. The SR-25 and AWP-style weapons reign supreme. Find high ground, stay hidden, and delete enemies before they know what hit them.',
          tips: ['Use suppressors for stealth kills', 'Pair with a Wanderer spotter', 'Aim for headshots - 2.5x multiplier'] },
        { title: 'The Wanderer SMG Rush Build - In Your Face', content: 'Wanderers with SMGs are terrifying up close. High mobility lets you flank and melt enemies before they can react. The Vector and UMP45 are popular choices. Stack fire rate and movement speed mods.',
          tips: ['Always keep moving - standing still is death', 'Use smokes to close distance', 'Flank from unexpected angles'] },
        { title: 'The Brute Shotgun Build - Point Blank Chaos', content: 'Nothing beats the satisfaction of a point-blank shotgun blast. The SPAS-12 and M870 are devastating at close range. Brutes can tank some damage too - perfect for aggressive push strategies into enemy bases.',
          tips: ['Wait until enemies are within 5 meters', 'Aim center-mass for maximum pellet spread', 'Bring a secondary SMG for emergencies'] },
        { title: 'The Tidecaller Support Build - Keep Your Squad Alive', content: 'Tidecallers are the backbone of any serious squad. Healing output, damage buffs, and utility skills make them invaluable. Don\'t underestimate support - a good Tidecaller can turn the tide of any fight.',
          tips: ['Position behind frontliners', 'Save emergency heal for critical moments', 'Mark enemy positions for the team'] },
        { title: 'Best Weapons Tier List', content: 'S-Tier: SR-25 (sniper), Vector (SMG), M870 (shotgun). A-Tier: AK-47 (assault), MP5 (SMG), AWM (sniper). B-Tier: M4A1 (assault), Desert Eagle (pistol). Always upgrade weapons at the Blacksmith using materials from boss kills.',
          tips: ['Craft weapons at Tier 3+ for full potential', 'Check stats before equipping - base variants vary', 'Dupes aren\'t necessary - focus on one main weapon'] },
        { title: 'Early Game Progression Tips', content: 'Day 1-3: Focus on gathering basic resources and completing main quests. Day 4-7: Start building your base and farming event bosses. Week 2+: Join a faction for PvE events and territory wars. Don\'t waste resources on throwaway builds early!',
          tips: ['Prioritize a weapon over armor initially', 'Do daily bosses for mod materials', 'Trading post is your friend for economics'] }
      ]
    }
  },
  'puzzle-mastery-guide': {
    title: 'Puzzle Games: From Beginner to Master', category: 'Strategy', excerpt: 'Master puzzle games with proven strategies.',
    emoji: '🧩', updatedAt: '2026-07-14', readingTime: '8 min read',
    content: {
      overview: 'Puzzle games challenge your brain with logic, pattern recognition, and problem-solving.',
      sections: [
        { title: 'Getting Started with Puzzles', content: 'Beginner puzzle players should start with simple games that introduce one concept at a time.',
          tips: ['Start with easy levels', 'Read tutorials carefully', 'Take breaks when frustrated', 'Practice pattern recognition'] },
        { title: 'Pattern Recognition Techniques', content: 'Pattern recognition is the foundation of puzzle solving.',
          tips: ['Look at the entire puzzle', 'Use process of elimination', 'Visualize solutions before committing'] },
        { title: 'Advanced Solving Strategies', content: 'Work backwards from the goal, break complex puzzles into smaller parts.',
          tips: ['Work backwards from desired end state', 'Break complex puzzles into parts', 'Use trial and error with undo'] },
        { title: 'Building Speed and Efficiency', content: 'Speed comes with practice. Focus on accuracy first.',
          tips: ['Accuracy before speed', 'Memorize common patterns', 'Use keyboard shortcuts'] }
      ]
    }
  },
  'action-games-combat-guide': {
    title: 'Action Games Combat Guide', category: 'Combat', excerpt: 'Dominate action games with expert combat tips.',
    emoji: '⚔️', updatedAt: '2026-07-13', readingTime: '6 min read',
    content: {
      overview: 'Action games test your reflexes, timing, and spatial awareness.',
      sections: [
        { title: 'Understanding Combat Fundamentals', content: 'Study the controls and understand attack ranges.',
          tips: ['Know your attack range', 'Learn timing for dodge/roll', 'Practice until muscle memory'] },
        { title: 'Enemy Pattern Recognition', content: 'Watch for visual and audio cues that indicate attacks.',
          tips: ['Watch enemy animations', 'Listen for audio cues', 'Learn attack patterns'] },
        { title: 'Building Effective Combos', content: 'Combos maximize damage while keeping enemies staggered.',
          tips: ['Start with simple combos', 'Chain attacks smoothly', 'Know when to defend'] },
        { title: 'Advanced Combat Techniques', content: 'Perfect dodging, counter-attacking, and strategic ability use.',
          tips: ['Perfect dodge into counter', 'Save abilities for groups', 'Read multiple enemies'] }
      ]
    }
  },
  'arcade-high-score-guide': {
    title: 'Arcade Games: High Score Strategies', category: 'Competition', excerpt: 'Become an arcade master!',
    emoji: '🏆', updatedAt: '2026-07-12', readingTime: '5 min read',
    content: {
      overview: 'Arcade games are designed around high scores and addictive gameplay.',
      sections: [
        { title: 'The Philosophy of High Scores', content: 'Consistency over risky plays - steady progress beats flashy failures.',
          tips: ['Prioritize consistency', 'Learn point values', 'Understand bonus multipliers'] },
        { title: 'Optimal Route Planning', content: 'Study layouts and plan routes that maximize points.',
          tips: ['Map optimal paths', 'Identify bonus locations', 'Practice routes until automatic'] },
        { title: 'Combo System Mastery', content: 'Build combos through consistent, accurate play.',
          tips: ['Build through consistency', 'Know combo break points', 'Use easy levels for momentum'] },
        { title: 'Mental Game and Focus', content: 'Manage mental state and develop focus routines.',
          tips: ['Take short breaks', 'Develop pre-game routines', 'Stay calm under pressure'] }
      ]
    }
  },
  'racing-mastery-guide': {
    title: 'Racing Games: Track Mastery Guide', category: 'Performance', excerpt: 'Master racing games with professional techniques.',
    emoji: '🏎️', updatedAt: '2026-07-11', readingTime: '7 min read',
    content: {
      overview: 'Racing games combine reflexes with strategy.',
      sections: [
        { title: 'Understanding Racing Lines', content: 'The optimal path through a corner: brake early, turn in from outside, hit apex, accelerate out.',
          tips: ['Slow in, fast out', 'Aim for apex point', 'Use full track width on exit'] },
        { title: 'Braking and Corner Entry', content: 'Know when and how much to brake for each corner.',
          tips: ['Learn braking points', 'Use trail braking', 'Practice threshold braking'] },
        { title: 'Shortcut Discovery', content: 'Find and practice shortcuts for time savings.',
          tips: ['Watch skilled players', 'Practice in Time Trial', 'Weigh risk vs reward'] },
        { title: 'Building Consistency', content: 'One fast lap means nothing without consistent lap times.',
          tips: ['Target identical laps', 'Identify slow lap causes', 'Use reference points'] }
      ]
    }
  },
  'memory-training-guide': {
    title: 'Memory Games: Brain Training Guide', category: 'Cognitive', excerpt: 'Improve your memory with proven techniques.',
    emoji: '🧠', updatedAt: '2026-07-10', readingTime: '6 min read',
    content: {
      overview: 'Memory games train your short-term memory through pattern recognition.',
      sections: [
        { title: 'How Memory Games Work', content: 'Focus attention during pattern exposure and minimize distractions.',
          tips: ['Focus during exposure', 'Minimize distractions', 'Shorter sessions are more effective'] },
        { title: 'The Method of Loci', content: 'Visualize items placed along a familiar journey.',
          tips: ['Choose familiar route', 'Associate items with locations', 'Review mentally before recalling'] },
        { title: 'Chunking Strategies', content: 'Group information into manageable units of 3-4 items.',
          tips: ['Group into chunks', 'Find meaningful patterns', 'Create linking stories'] },
        { title: 'Building Long-Term Memory', content: 'Spaced repetition and regular practice build durable memory.',
          tips: ['Practice regularly', 'Use spaced repetition', 'Get adequate sleep'] }
      ]
    }
  },
  'stickman-fighting-guide': {
    title: 'Stickman Games: Fighting Techniques', category: 'Combat', excerpt: 'Master stickman combat with fluid animations.',
    emoji: '🦸', updatedAt: '2026-07-09', readingTime: '5 min read',
    content: {
      overview: 'Stickman games use simple characters with exaggerated physics.',
      sections: [
        { title: 'Understanding Stickman Physics', content: 'Embrace the physics rather than fighting them.',
          tips: ['Use momentum for power', 'Leverage bounces', 'Practice with physics system'] },
        { title: 'Basic Attack Techniques', content: 'Master basic attacks, timing, and dodge rolls.',
          tips: ['Master attack timing', 'Learn attack ranges', 'Don\'t button mash'] },
        { title: 'Combo Systems', content: 'Aggressive play maintains combo momentum.',
          tips: ['Stay aggressive', 'Mix attack types', 'Know when to defend'] },
        { title: 'Advanced Techniques', content: 'Environmental interactions and ability combinations.',
          tips: ['Use environment', 'Master advanced dodges', 'Unlock upgrades'] }
      ]
    }
  },
  'sports-games-strategy': {
    title: 'Sports Games: Strategy & Tactics', category: 'Strategy', excerpt: 'Dominate sports games with strategic gameplay.',
    emoji: '⚽', updatedAt: '2026-07-08', readingTime: '6 min read',
    content: {
      overview: 'Sports games simulate real athletic activities.',
      sections: [
        { title: 'Fundamental Skills', content: 'Master timing-based actions and positioning.',
          tips: ['Practice timing', 'Position for options', 'Learn mechanics first'] },
        { title: 'Defensive Strategies', content: 'Read AI patterns and anticipate actions.',
          tips: ['Watch opponent patterns', 'Cut off passing lanes', 'Balance aggression'] },
        { title: 'Offensive Tactics', content: 'Mix up attacks and exploit defensive weaknesses.',
          tips: ['Vary attacks', 'Use fakes and feints', 'Look for assists'] },
        { title: 'Game-Specific Tips', content: 'Focus on sport-specific mechanics.',
          tips: ['Focus on key mechanics', 'Learn advanced moves', 'Adjust to opponent'] }
      ]
    }
  },
  'simulation-games-guide': {
    title: 'Simulation Games: Immersive Guide', category: 'Gameplay', excerpt: 'Get the most out of simulation games.',
    emoji: '🎮', updatedAt: '2026-07-07', readingTime: '7 min read',
    content: {
      overview: 'Simulation games offer immersive experiences with varying realism.',
      sections: [
        { title: 'Getting Started', content: 'Take time to understand systems before rushing in.',
          tips: ['Complete tutorials', 'Start on easy settings', 'Read help files'] },
        { title: 'Resource Management', content: 'Efficient resource management separates success from failure.',
          tips: ['Monitor resources', 'Plan allocation', 'Build emergency reserves'] },
        { title: 'Realism Settings', content: 'Find the balance between challenge and enjoyment.',
          tips: ['Adjust to skill level', 'Realism increases reward', 'Allow assists when learning'] },
        { title: 'Long-Term Progression', content: 'Patience and planning reward simulation players.',
          tips: ['Plan for scenarios', 'Save frequently', 'Learn from mistakes'] }
      ]
    }
  }
}

export default function GuidePage({ params }: PageProps) {
  const guide = GUIDE_DATA[params.slug]
  if (!guide) notFound()

  // Check if this is the Once Human guide for special styling
  const isOnceHuman = params.slug === 'once-human-best-builds'

  // Once Human specific images - real game screenshots from Steam
  const onceHumanImages = {
    hero: '/images/once-human/hero_wide.jpg',
    weapons: '/images/once-human/weapons.jpg',
    monsters: '/images/once-human/monsters.jpg',
    survival: '/images/once-human/survival.jpg',
    building: '/images/once-human/building.jpg',
  }

  return (
    <div className="min-h-screen" style={{ background: '#0a0910' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5" style={{ background: 'rgba(10, 9, 16, 0.85)', backdropFilter: 'blur(16px)' }}>
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
          <span className="font-display font-bold text-xl text-white group-hover:text-purple-400 transition-colors">Xavrito</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          <Link href="/wiki" className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Wiki</Link>
          <Link href="/guides" className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg">Guides</Link>
          <Link href="/#games" className="ml-2 px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white text-sm font-medium rounded-lg transition-colors">Play Now</Link>
        </div>
      </nav>

      {/* Hero - Once Human Special Design */}
      {isOnceHuman ? (
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={onceHumanImages.hero}
              alt="Once Human"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(180deg, rgba(10,9,16,0.3) 0%, rgba(10,9,16,0.7) 50%, rgba(10,9,16,0.95) 100%)'
            }} />
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse at center top, rgba(249,115,22,0.15) 0%, transparent 60%)'
            }} />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
            <div className="max-w-3xl">
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-red-500/20 border border-red-500/30 text-red-400 rounded-full text-sm font-medium backdrop-blur-sm">
                  🔴 SURVIVAL GUIDE
                </span>
                <span className="px-3 py-1.5 bg-white/10 text-white/80 rounded-full text-xs font-medium">
                  Updated: {new Date(guide.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                <span className="block text-5xl sm:text-6xl lg:text-7xl" style={{ color: '#f97316' }}>
                  ONCE HUMAN
                </span>
                <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl">
                  Best Builds Guide
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed max-w-2xl">
                Master the post-apocalyptic wasteland. Hunt bosses. Build bases. Craft legendary weapons. Dominate with the most powerful builds.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  <span className="text-white/60 text-sm">{guide.readingTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <span className="text-white/60 text-sm">PvP & PvE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚔️</span>
                  <span className="text-white/60 text-sm">4 Builds Covered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #0a0910 0%, transparent 100%)' }} />
        </section>
      ) : (
        /* Standard Hero */
        <section className="pt-32 pb-12 px-4 sm:px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{guide.emoji}</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">{guide.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">{guide.title}</h1>
            <p className="text-lg text-white/60 mb-4 max-w-2xl">{guide.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span>Updated: {new Date(guide.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>•</span>
              <span>{guide.readingTime}</span>
            </div>
          </div>
        </section>
      )}

      {/* Content - Enhanced for Once Human */}
      <section className="py-16 px-4 sm:px-6">
        <div className={`${isOnceHuman ? 'max-w-7xl mx-auto' : 'max-w-4xl mx-auto'}`}>
          {/* Overview Card - Enhanced */}
          <div className={`${isOnceHuman ? 'grid md:grid-cols-2 gap-8 mb-12' : 'bg-white/5 border border-white/10 rounded-xl p-6 mb-8'}`}>
            {isOnceHuman ? (
              <>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🌌</span>
                    <h2 className="text-2xl font-bold text-white">About the Game</h2>
                  </div>
                  <p className="text-white/60 leading-relaxed text-lg">{guide.content.overview}</p>
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={onceHumanImages.survival}
                    alt="Survival"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-sm font-medium">Survive. Build. Dominate.</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
                <p className="text-white/60 leading-relaxed">{guide.content.overview}</p>
              </>
            )}
          </div>

          {/* Section Images for Once Human */}
          {isOnceHuman && (
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <img src={onceHumanImages.weapons} alt="Weapons" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">WEAPONS</span>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <img src={onceHumanImages.monsters} alt="Monsters" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">MUTANTS</span>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <img src={onceHumanImages.building} alt="Building" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">BUILDING</span>
              </div>
            </div>
          )}

          {/* Guide Sections */}
          {guide.content.sections.map((section, index) => (
            <div key={index} className={`${isOnceHuman ? 'mb-16' : 'mb-8'}`}>
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`${isOnceHuman ? 'w-12 h-12' : 'w-8 h-8'} bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${isOnceHuman ? 'shadow-orange-500/20' : ''}`}>
                  <span className={`${isOnceHuman ? 'text-lg' : 'text-sm'} font-bold text-white`}>{index + 1}</span>
                </div>
                <h2 className={`${isOnceHuman ? 'text-2xl sm:text-3xl' : 'text-2xl'} font-bold text-white`}>{section.title}</h2>
              </div>

              {/* Section Content */}
              <div className={`${isOnceHuman ? 'grid md:grid-cols-5 gap-6' : ''}`}>
                <p className={`${isOnceHuman ? 'md:col-span-3 text-white/70 leading-relaxed text-lg' : 'text-white/60 leading-relaxed mb-4 pl-0'}`}>{section.content}</p>

                {/* Tips Card */}
                {section.tips && (
                  <div className={`${isOnceHuman ? 'md:col-span-2' : 'pl-0'}`}>
                    <div className={`${isOnceHuman ? 'bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-6' : 'bg-white/5 border border-white/10 rounded-xl p-5'}`}>
                      <h3 className={`${isOnceHuman ? 'font-bold text-white mb-4 flex items-center gap-2 text-lg' : 'font-semibold text-white mb-3 flex items-center gap-2'}`}>
                        <span className="text-xl">💡</span> Key Tips
                      </h3>
                      <ul className="space-y-3">
                        {section.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-3">
                            <div className={`${isOnceHuman ? 'w-2 h-2 mt-2 bg-orange-500 rounded-full' : 'w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5'}`}>
                              {isOnceHuman ? null : (
                                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                              )}
                            </div>
                            <span className={`${isOnceHuman ? 'text-white/80' : 'text-sm text-white/60'}`}>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/10 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #13121c 0%, #0a0910 100%)' }}>
        {/* Background Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.2) 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {isOnceHuman ? (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)' }}>Dominate</span> the Wasteland?
              </h2>
              <p className="text-white/60 mb-8 text-lg">Join thousands of survivors fighting for control in the post-apocalyptic world.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#games" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-xl transition-all shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', boxShadow: '0 0 30px rgba(249,115,22,0.3)' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  Play Free HTML5 Games
                </Link>
                <Link href="/guides" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-xl border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-all">
                  Browse More Guides
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Apply These Tips?</h2>
              <p className="text-white/50 mb-6">Put these strategies to the test by playing free HTML5 games.</p>
              <Link href="/#games" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-500/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                Play Free Games
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 sm:px-6 py-8" style={{ background: '#0a0910' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
              <rect x="6" y="4" width="20" height="14" rx="2" fill="#A78BFA"/>
              <polygon points="13,8 13,14 19,11" fill="#1C1917"/>
              <rect x="6" y="20" width="20" height="8" rx="1" fill="#374151"/>
              <circle cx="11" cy="24" r="2" fill="#6B7280"/>
              <rect x="10.3" y="20" width="1.4" height="5" rx="0.5" fill="#9CA3AF"/>
              <circle cx="18" cy="23" r="1.2" fill="#EF4444"/>
              <circle cx="22" cy="25" r="1.2" fill="#3B82F6"/>
            </svg>
            <span className="font-display font-semibold text-white">Xavrito</span>
          </div>
          <p className="text-sm text-white/50">Free HTML5 games. No downloads. No signups.</p>
        </div>
      </footer>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(GUIDE_DATA).map((slug) => ({ slug }))
}
