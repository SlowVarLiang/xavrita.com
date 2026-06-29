import { Metadata } from 'next'
import Link from 'next/link'
import { games, getGameBySlug } from '@/lib/games-data'
import { createBreadcrumbSchema, createFAQSchema, createVideoGameSchema, generateGameMetadata } from '@/lib/seo'
import GameCard from '@/components/GameCard'
import BloodTypeSpinnerEmbed from '@/components/BloodTypeSpinnerEmbed'
import PalCatcherEmbed from '@/components/PalCatcherEmbed'
import ResourceFarmingEmbed from '@/components/ResourceFarmingEmbed'
import CoreKeeperMiningEmbed from '@/components/CoreKeeperMiningEmbed'
import SoulmaskSkillEmbed from '@/components/SoulmaskSkillEmbed'
import DuneSpiceEmbed from '@/components/DuneSpiceEmbed'
import EnshroudedForgeEmbed from '@/components/EnshroudedForgeEmbed'
import AbioticFactorPuzzleEmbed from '@/components/AbioticFactorPuzzleEmbed'

const GAME_ACCENTS: Record<string, string> = {
  'v-rising': '#dc2626',
  'palworld': '#22c55e',
  'once-human': '#06b6d4',
  'core-keeper': '#f59e0b',
  'soulmask': '#ea580c',
  'dune-awakening': '#fbbf24',
  'enshrouded': '#ef4444',
  'abiotic-factor': '#22d3ee',
}

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const game = getGameBySlug(params.slug)
  if (!game) {
    return { title: 'Game Not Found | Xavrito' }
  }
  return generateGameMetadata(game)
}

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }))
}

export default function GamePage({ params }: PageProps) {
  const game = getGameBySlug(params.slug)

  if (!game) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-text-primary mb-4">Game Not Found</h1>
          <p className="text-text-muted mb-8">The game you are looking for does not exist.</p>
          <Link href="/games" className="text-accent-cyan hover:text-accent-cyan/80">
            Browse All Games
          </Link>
        </div>
      </div>
    )
  }

  const accentColor = GAME_ACCENTS[game.slug] || '#8b5cf6'
  const relatedGames = games.filter((g) => g.slug !== game.slug && !g.external).slice(0, 4)
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://xavrita.com' },
    { name: 'Games', url: 'https://xavrita.com/games' },
    { name: game.name, url: `https://xavrita.com/games/${game.slug}/` },
  ])

  const faqSchema = createFAQSchema([
    {
      question: `What is ${game.name}?`,
      answer: game.description || `${game.name} is a popular game in the ${game.category} genre.`,
    },
    {
      question: `How to get started with ${game.name}?`,
      answer: `Check our beginner guides for essential tips on getting started, including basic mechanics, resource gathering, and early-game strategies.`,
    },
    {
      question: `What are the best builds in ${game.name}?`,
      answer: `Our build guides cover the top meta builds for different playstyles, optimized for both PvE and PvP content.`,
    },
    {
      question: `Are there guides for ${game.name} bosses?`,
      answer: `Yes, we have detailed boss fight strategies with mechanics breakdowns, attack patterns, and recommended loadouts.`,
    },
    {
      question: `Where can I find ${game.name} crafting recipes?`,
      answer: `Our comprehensive crafting guide covers all recipes, required materials, and optimal crafting strategies.`,
    },
  ])

  const videoGameSchema = createVideoGameSchema(game)

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative bg-void overflow-hidden py-16 sm:py-20"
        style={{
          '--game-accent': accentColor
        } as React.CSSProperties}
      >
        {/* Background */}
        {game.image && (
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-full object-cover opacity-20"
              loading="eager" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent" />
          </div>
        )}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 rounded-full blur-[120px] pointer-events-none"
          style={{ background: accentColor }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/games" className="hover:text-text-primary transition-colors">Games</Link>
            <span>/</span>
            <span className="text-text-primary">{game.name}</span>
          </nav>

          {/* Game Header */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <span className="text-6xl">{game.emoji}</span>
            <div className="flex-1">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-3">
                {game.name}
              </h1>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted mb-4">
                {game.developer && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-text-muted"></span>
                    {game.developer}
                  </span>
                )}
                {game.releaseDate && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-text-muted"></span>
                    {game.releaseDate}
                  </span>
                )}
                {game.genres?.slice(0, 3).map((genre) => (
                  <span 
                    key={genre} 
                    className="px-2 py-0.5 rounded text-xs border"
                    style={{ borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10`, color: accentColor }}
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-text-muted max-w-2xl leading-relaxed">
                {game.description}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a 
              href="#guides" 
              className="px-5 py-2.5 text-white font-medium rounded-lg transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: accentColor }}
            >
              Browse Guides
            </a>
            <a 
              href="#categories" 
              className="px-5 py-2.5 bg-surface hover:bg-border border border-border text-text-primary font-medium rounded-lg transition-all hover:-translate-y-0.5"
            >
              Categories
            </a>
            {game.external ? (
              <a 
                href={game.external} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-2.5 bg-accent-amber hover:bg-accent-amber/90 text-void font-medium rounded-lg transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                Visit Official Site
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <a 
                href="#tool" 
                className="px-5 py-2.5 bg-surface hover:bg-border border border-border text-text-primary font-medium rounded-lg transition-all hover:-translate-y-0.5"
              >
                View Tool
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Tool Section */}
      <section id="tool" className="py-16 px-4 sm:px-6 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }}></span>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Interactive Tool</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-text-primary">Game Tool</h2>
              <p className="text-text-muted text-sm">Try our exclusive {game.name} tool</p>
            </div>
            <Link
              href={`/games/${game.slug}/tool/`}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-all"
              style={{ borderColor: `${accentColor}40`, color: accentColor }}
            >
              Open Full Page
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div 
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: `${accentColor}30` }}
          >
            {game.slug === 'v-rising' && <BloodTypeSpinnerEmbed />}
            {game.slug === 'palworld' && <PalCatcherEmbed />}
            {game.slug === 'once-human' && <ResourceFarmingEmbed />}
            {game.slug === 'core-keeper' && <CoreKeeperMiningEmbed />}
            {game.slug === 'soulmask' && <SoulmaskSkillEmbed />}
            {game.slug === 'dune-awakening' && <DuneSpiceEmbed />}
            {game.slug === 'enshrouded' && <EnshroudedForgeEmbed />}
            {game.slug === 'abiotic-factor' && <AbioticFactorPuzzleEmbed />}
            {!['v-rising', 'palworld', 'once-human', 'core-keeper', 'soulmask', 'dune-awakening', 'enshrouded', 'abiotic-factor'].includes(game.slug) && (
              <div className="w-full h-[300px] flex items-center justify-center bg-void">
                <div className="text-center">
                  <div className="text-4xl mb-4">{game.emoji}</div>
                  <p className="text-text-muted">Interactive tool coming soon for {game.name}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section id="guides" className="py-16 px-4 sm:px-6 bg-void">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-amber"></span>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Featured</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
            Hand-picked guides for {game.name}
          </h2>

          {game.featuredGuides && game.featuredGuides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {game.featuredGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}/`}
                  className="group bg-surface border border-border rounded-xl p-5 hover:border-accent-violet/50 transition-all hover:-translate-y-0.5"
                >
                  <span className="px-2 py-1 bg-accent-violet/10 text-accent-violet text-xs font-medium rounded mb-2 inline-block">
                    {guide.category}
                  </span>
                  <h3 className="font-display font-semibold text-text-primary group-hover:text-white mb-2 transition-colors line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-text-muted line-clamp-2">{guide.excerpt}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Beginner Guide', 'Combat & Builds', 'Crafting'].map((title, i) => (
                <div key={title} className="bg-surface border border-border rounded-xl p-6">
                  <span className="px-2 py-1 bg-accent-violet/10 text-accent-violet text-xs font-medium rounded mb-2 inline-block">
                    Guide
                  </span>
                  <h3 className="font-display font-semibold text-text-primary">{title}</h3>
                  <p className="text-sm text-text-muted mt-2">Coming soon</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Browse by Category */}
      <section id="categories" className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Categories</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {game.categories?.map((cat) => (
              <Link
                key={cat}
                href={`/guides?game=${game.slug}&category=${encodeURIComponent(cat)}/`}
                className="px-4 py-3 bg-void hover:bg-border border border-border hover:border-accent-violet/50 rounded-lg text-center transition-all text-sm text-text-muted hover:text-text-primary"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 bg-void">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Quick Links</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {game.categories?.slice(0, 6).map((cat) => (
              <Link
                key={cat}
                href={`/guides?category=${encodeURIComponent(cat)}/`}
                className="px-4 py-2 bg-surface hover:bg-accent-violet/20 text-text-muted hover:text-text-primary border border-border hover:border-accent-violet/50 rounded-full text-sm transition-all"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Games */}
      {relatedGames.length > 0 && (
        <section className="py-16 px-4 sm:px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-amber"></span>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">More Games</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
              More Games to Explore
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedGames.map((g) => (
                <GameCard key={g.slug} game={g} />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
    </>
  )
}
