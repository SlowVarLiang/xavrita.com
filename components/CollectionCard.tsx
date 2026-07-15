'use client'

import Link from 'next/link'
import { GameCollection } from '@/lib/collections'
import Html5GameCard from './Html5GameCard'

interface CollectionCardProps {
  collection: GameCollection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all">
      {/* Header */}
      <div
        className="p-5 border-b border-white/10"
        style={{ borderTopColor: collection.color, borderTopWidth: '3px' }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{collection.emoji}</span>
          <div>
            <h3 className="font-semibold text-white text-lg">{collection.name}</h3>
            <p className="text-sm text-white/50">{collection.games.length} games</p>
          </div>
        </div>
        <p className="text-sm text-white/60">{collection.description}</p>
      </div>

      {/* Preview Games */}
      <div className="p-4">
        <div className="grid grid-cols-4 gap-2 mb-4">
          {collection.games.slice(0, 4).map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="block aspect-[4/3] rounded-lg overflow-hidden bg-white/5 hover:scale-105 transition-transform"
            >
              <img
                src={game.thumbnail}
                alt={game.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
        <Link
          href={`/collections/${collection.id}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium text-white/70 hover:text-white transition-colors"
        >
          <span>View All</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
