import Link from 'next/link'
import { Html5Game } from '@/lib/html5-games'

interface Html5GameCardProps {
  game: Html5Game
}

export default function Html5GameCard({ game }: Html5GameCardProps) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group block bg-white rounded-xl overflow-hidden border border-[#E7E5E4] hover:border-[#F97316] hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-[#1C1917]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 left-2">
          <span className="px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[#78716C] rounded text-[10px] font-medium">
            {game.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-sm">{game.emoji}</span>
          <h3 className="font-semibold text-[#1C1917] text-sm truncate group-hover:text-[#F97316] transition-colors">
            {game.name}
          </h3>
        </div>
        <p className="text-[#A8A29E] text-xs line-clamp-2 leading-relaxed">
          {game.description}
        </p>
      </div>
    </Link>
  )
}
