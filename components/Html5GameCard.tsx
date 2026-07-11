import Link from 'next/link'
import { Html5Game } from '@/lib/html5-games'

interface Html5GameCardProps {
  game: Html5Game
}

export default function Html5GameCard({ game }: Html5GameCardProps) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group relative block bg-surface rounded-xl overflow-hidden border border-border hover:border-accent-violet/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-violet/10 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={game.thumbnail}
          alt={`${game.name} - Free Online HTML5 ${game.category} Game`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-accent-violet flex items-center justify-center shadow-lg shadow-accent-violet/30">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Category Badge */}
        <div className="absolute top-2 left-2 px-2 py-0.5 bg-void/80 backdrop-blur-sm rounded-md text-xs font-mono text-text-muted border border-border">
          {game.category}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-lg">{game.emoji}</span>
          <h3 className="font-display font-semibold text-text-primary group-hover:text-accent-violet transition-colors truncate">
            {game.name}
          </h3>
        </div>
        <p className="text-sm text-text-muted line-clamp-2 leading-relaxed">
          {game.description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {game.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 bg-void rounded text-[10px] font-mono text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
