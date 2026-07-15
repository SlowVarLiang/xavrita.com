'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { html5Games, categories, getFeaturedGame } from '@/lib/html5-games'
import Html5GameCard from '@/components/Html5GameCard'

/* ────────────────────────────────────────── */
/* ASCII Cursor Trail (optimized RAF)        */
/* ────────────────────────────────────────── */
const TRAIL_CHARS = '@#H%&*=?+;:,.'.split('')
const MAX_PARTICLES = 60
const SPAWN_THRESHOLD = 18

interface Particle {
  x: number; y: number; vx: number; vy: number
  char: string; life: number; maxLife: number
}

function AsciiCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const lastSpawnRef = useRef({ x: -999, y: -999 })
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let w = 0, h = 0
    const fontSize = 12

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth; h = window.innerHeight
      canvas.width = Math.ceil(w * dpr); canvas.height = Math.ceil(h * dpr)
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    let lastTime = 0
    const draw = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1)
      lastTime = time

      // Update particles
      particlesRef.current = particlesRef.current.filter(p => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.02
        p.life -= dt / p.maxLife
        return p.life > 0
      })

      // Draw
      ctx.clearRect(0, 0, w, h)
      ctx.font = `${fontSize}px "IBM Plex Mono", ui-monospace, monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      for (const p of particlesRef.current) {
        ctx.fillStyle = `rgba(167, 139, 250, ${p.life * 0.7})`
        ctx.fillText(p.char, p.x, p.y)
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    const spawn = (mx: number, my: number) => {
      const dx = mx - lastSpawnRef.current.x
      const dy = my - lastSpawnRef.current.y
      if (Math.sqrt(dx * dx + dy * dy) < SPAWN_THRESHOLD) return
      lastSpawnRef.current = { x: mx, y: my }
      for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
        if (particlesRef.current.length >= MAX_PARTICLES) particlesRef.current.shift()
        const angle = Math.random() * Math.PI * 2
        particlesRef.current.push({
          x: mx + (Math.random() - 0.5) * 8,
          y: my + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * (0.3 + Math.random() * 0.7),
          vy: Math.sin(angle) * (0.3 + Math.random() * 0.7),
          char: TRAIL_CHARS[Math.floor(Math.random() * TRAIL_CHARS.length)] ?? '.',
          life: 1,
          maxLife: 0.6 + Math.random() * 0.6,
        })
      }
    }

    resize()
    rafRef.current = requestAnimationFrame(draw)
    window.addEventListener('mousemove', e => spawn(e.clientX, e.clientY), { passive: true })
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('mousemove', e => spawn(e.clientX, e.clientY))
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[5]" aria-hidden />
}

/* ────────────────────────────────────────── */
/* Cursor Spotlight (CSS-based, performant)   */
/* ────────────────────────────────────────── */
function CursorSpotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return null
}

/* ────────────────────────────────────────── */
/* Navigation                                 */
/* ────────────────────────────────────────── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
      <Link href="/" className="flex items-center gap-2 group">
        <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="4" width="20" height="14" rx="2" fill="#A78BFA"/>
          <polygon points="13,8 13,14 19,11" fill="#1C1917"/>
          <rect x="6" y="20" width="20" height="8" rx="1" fill="#374151"/>
          <circle cx="11" cy="24" r="2" fill="#6B7280"/>
          <rect x="10.3" y="20" width="1.4" height="5" rx="0.5" fill="#9CA3AF"/>
          <circle cx="18" cy="23" r="1.2" fill="#EF4444"/>
          <circle cx="22" cy="25" r="1.2" fill="#3B82F6"/>
        </svg>
        <span className="font-display font-bold text-xl text-white group-hover:text-purple-400 transition-colors">
          Xavrito
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-1">
        <Link
          href="/wiki"
          className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          Wiki
        </Link>
        <Link
          href="/guides"
          className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          Guides
        </Link>
        <Link
          href="#games"
          className="ml-2 px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/30"
        >
          Play Now
        </Link>
      </div>
    </nav>
  )
}

/* ────────────────────────────────────────── */
/* Hero Section                               */
/* ────────────────────────────────────────── */
function HeroSection() {
  const featuredGame = getFeaturedGame()

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100dvh', minHeight: '600px' }}>
      {/* Base gradient background */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(ellipse 90% 55% at 50% -10%, rgba(249, 115, 22, 0.15), transparent 55%),
            radial-gradient(ellipse 70% 45% at 80% 20%, rgba(167, 139, 250, 0.12), transparent 50%),
            linear-gradient(180deg, #0a0910 0%, #13121c 40%, #1a1a2e 100%)
          `
        }}
      />

      {/* Background layer */}
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: 'url("/背景层.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Reveal layer with CSS mask - shows 光标遮罩层.png only around cursor */}
      <div
        className="absolute inset-0 z-30 spotlight-reveal"
        style={{
          backgroundImage: 'url("/光标遮罩层.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-40 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 45%, transparent 15%, rgba(10, 9, 16, 0.7) 70%, #0a0910 100%)' }}
      />

      {/* Content */}
      <div className="absolute top-[12%] left-0 right-0 flex flex-col items-center text-center px-5 z-50">
        <div className="hero-anim hero-reveal mb-6">
          <span className="font-mono text-[11px] tracking-[0.22em] text-purple-400/80 uppercase">
            [ Free HTML5 Games ]
          </span>
        </div>
        <h1 className="hero-anim hero-reveal text-white leading-[0.95] font-semibold tracking-tight" style={{ letterSpacing: '-0.04em' }}>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
            Play Free
          </span>
          <span
            className="block -mt-1 text-5xl sm:text-7xl md:text-8xl lg:text-9xl hero-gradient hero-glow font-italic"
            style={{ fontStyle: 'italic', fontFamily: "'Playfair Display', serif", animationDelay: '0.2s' }}
          >
            HTML5 Games
          </span>
        </h1>
      </div>

      {/* Bottom left - Featured game info */}
      {featuredGame && (
        <div className="hidden sm:block absolute bottom-16 left-8 md:left-14 max-w-[300px] z-50 hero-anim hero-fade" style={{ animationDelay: '0.7s' }}>
          <p className="font-mono text-[11px] tracking-[0.18em] text-purple-400 uppercase mb-3">[ Featured ]</p>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{featuredGame.emoji}</span>
            <div>
              <h3 className="text-white font-semibold text-lg">{featuredGame.name}</h3>
              <p className="text-white/60 text-sm">{featuredGame.category}</p>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            {featuredGame.description}
          </p>
        </div>
      )}

      {/* Bottom right - CTA */}
      <div className="absolute bottom-10 sm:bottom-20 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[280px] flex flex-col items-start gap-4 z-50 hero-anim hero-fade" style={{ animationDelay: '0.85s' }}>
        <p className="text-sm text-white/70 leading-relaxed">
          Instant play. No downloads. No signups. Just click and enjoy.
        </p>
        <Link
          href="#games"
          className="bg-purple-500 hover:bg-purple-400 text-white text-sm font-semibold px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-purple-500/30 font-mono tracking-wide inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Start Playing
        </Link>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────── */
/* Stats Bar                                  */
/* ────────────────────────────────────────── */
function StatsBar() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          <div className="text-center">
            <span className="font-mono text-2xl md:text-3xl font-bold text-purple-400">37+</span>
            <p className="text-xs text-white/50 mt-1">Free Games</p>
          </div>
          <div className="w-px h-8 bg-white/10 hidden md:block" />
          <div className="text-center">
            <span className="font-mono text-2xl md:text-3xl font-bold text-purple-400">9</span>
            <p className="text-xs text-white/50 mt-1">Categories</p>
          </div>
          <div className="w-px h-8 bg-white/10 hidden md:block" />
          <div className="text-center">
            <span className="font-mono text-2xl md:text-3xl font-bold text-white">100%</span>
            <p className="text-xs text-white/50 mt-1">Free Forever</p>
          </div>
          <div className="w-px h-8 bg-white/10 hidden md:block" />
          <div className="text-center">
            <span className="font-mono text-2xl md:text-3xl font-bold text-green-400">0</span>
            <p className="text-xs text-white/50 mt-1">Signups Required</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────── */
/* Games Section                              */
/* ────────────────────────────────────────── */
function GamesSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredGames = html5Games.filter((game) => {
    const matchesCategory = activeCategory === 'All' || game.category === activeCategory
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="games" className="relative z-10 px-4 sm:px-6 py-16 md:py-24" style={{ background: 'linear-gradient(180deg, #0a0910 0%, #13121c 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-mono text-[11px] tracking-[0.18em] text-purple-400 uppercase mb-4">01</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4" style={{ letterSpacing: '-0.03em' }}>
            Browse <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500">Games</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Explore our collection of free HTML5 games. Puzzle, Action, Arcade, Racing and more.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 justify-center flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredGames.map((game) => (
              <Html5GameCard key={game.slug} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/50 text-lg mb-4">No games found</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-400 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ────────────────────────────────────────── */
/* Wiki & Guides Entry                        */
/* ────────────────────────────────────────── */
function ExploreSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 md:py-24 border-t border-white/10" style={{ background: '#0a0910' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-mono text-[11px] tracking-[0.18em] text-purple-400 uppercase mb-4">02</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4" style={{ letterSpacing: '-0.03em' }}>
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500">More</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Dive deeper into game knowledge with wikis and strategy guides
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Wiki Card */}
          <Link
            href="/wiki"
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">Game Wikis</h3>
                <p className="text-sm text-white/50">20+ databases</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Comprehensive game wikis with mechanics, tips, strategies, and FAQ for every game.
            </p>
            <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
              <span>Browse Wikis</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Guides Card */}
          <Link
            href="/guides"
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">Strategy Guides</h3>
                <p className="text-sm text-white/50">8+ in-depth guides</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Expert strategies, walkthroughs, and tips from seasoned players for all skill levels.
            </p>
            <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
              <span>View Guides</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────── */
/* Features Section                           */
/* ────────────────────────────────────────── */
function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Instant Play',
      desc: 'No downloads, no signups. Just click and play.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '100% Free',
      desc: 'Always free, forever. No hidden costs.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Safe & Secure',
      desc: 'No malware, no sketchy ads. Just games.'
    }
  ]

  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 md:py-24 border-t border-white/10" style={{ background: 'linear-gradient(180deg, #13121c 0%, #0a0910 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/50">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────── */
/* Footer                                     */
/* ────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 sm:px-6 py-12" style={{ background: '#0a0910' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <p className="text-sm text-white/50">
            Free HTML5 games. No downloads. No signups.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/30">
            <span>Made with 🎮</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ────────────────────────────────────────── */
/* Main Page                                  */
/* ────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div
      className="min-h-screen tracking-[-0.02em]"
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: '#0a0910',
        backgroundImage: [
          'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(249, 115, 22, 0.11), transparent 55%)',
          'radial-gradient(ellipse 70% 45% at 95% 0%, rgba(167, 139, 250, 0.09), transparent 50%)',
          'radial-gradient(ellipse 50% 35% at 50% 100%, rgba(249, 115, 22, 0.05), transparent 55%)',
          'linear-gradient(180deg, #0a0910 0%, #06060b 100%)',
        ].join(', '),
        backgroundAttachment: 'fixed',
      }}
    >
      <CursorSpotlight />
      <Nav />
      <AsciiCursorTrail />

      <main className="relative z-[1]">
        <HeroSection />
        <StatsBar />
        <GamesSection />
        <ExploreSection />
        <FeaturesSection />
        <Footer />
      </main>
    </div>
  )
}
