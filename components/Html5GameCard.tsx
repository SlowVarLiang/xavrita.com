import Link from 'next/link'
import { Html5Game } from '@/lib/html5-games'

interface Html5GameCardProps {
  game: Html5Game
}

export default function Html5GameCard({ game }: Html5GameCardProps) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group relative block bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-violet-500/90 flex items-center justify-center shadow-xl shadow-violet-500/50 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 left-2">
          <span className="px-2 py-0.5 bg-slate-900/80 backdrop-blur-sm text-slate-300 rounded text-[10px] font-medium border border-slate-700/50">
            {game.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-base">{game.emoji}</span>
          <h3 className="font-semibold text-white text-sm truncate group-hover:text-violet-300 transition-colors">
            {game.name}
          </h3>
        </div>
        <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
          {game.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-2.5">
          {game.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 bg-slate-800 rounded text-[9px] font-medium text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
