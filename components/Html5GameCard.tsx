import Link from 'next/link'
import { Html5Game } from '@/lib/html5-games'

interface Html5GameCardProps {
  game: Html5Game
}

export default function Html5GameCard({ game }: Html5GameCardProps) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group block bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-200"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 left-2">
          <span className="px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white/80 rounded text-[10px] font-medium">
            {game.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-sm">{game.emoji}</span>
          <h3 className="font-semibold text-white text-sm truncate group-hover:text-purple-400 transition-colors">
            {game.name}
          </h3>
        </div>
        <p className="text-white/50 text-xs line-clamp-2 leading-relaxed">
          {game.description}
        </p>
      </div>
    </Link>
  )
}
