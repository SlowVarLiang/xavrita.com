import Link from 'next/link'
import { Game } from '@/lib/games-data'

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

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  const accentColor = GAME_ACCENTS[game.slug] || '#8b5cf6'

  return (
    <Link
      href={game.external || `/games/${game.slug}`}
      {...(game.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group relative bg-surface border border-border rounded-xl overflow-hidden hover:border-opacity-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/20"
      style={{ '--accent': accentColor } as React.CSSProperties}
    >
      {/* Accent Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at top, ${accentColor}10 0%, transparent 70%)`
        }}
      />

      {/* Image */}
      {game.image && (
        <div className="relative h-36 overflow-hidden">
          <img
            src={game.image}
            alt={game.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          {/* External Link Indicator */}
          {game.external && (
            <div className="absolute top-2 right-2 px-2 py-1 bg-void/80 backdrop-blur-sm rounded text-xs text-text-muted flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              External
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative p-4">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-3xl">{game.emoji}</span>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-semibold text-text-primary group-hover:text-white truncate transition-colors">
              {game.name}
            </h3>
            <p className="text-xs text-text-muted">{game.category}</p>
          </div>
        </div>

        {/* Genre Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {game.genres?.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="px-2 py-0.5 bg-void text-xs text-text-muted rounded border border-border"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-text-muted line-clamp-2 leading-relaxed">
          {game.description}
        </p>

        {/* CTA Arrow */}
        <div className="mt-3 flex items-center justify-end">
          <span 
            className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0"
            style={{ color: accentColor }}
          >
            Explore →
          </span>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }}
      />
    </Link>
  )
}
