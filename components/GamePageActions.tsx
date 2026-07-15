'use client'

import { useEffect, useState } from 'react'
import { addRecentGame, isFavorite, toggleFavorite } from '@/lib/favorites'
import FavoritesButton from './FavoritesButton'

interface GamePageActionsProps {
  slug: string
}

export default function GamePageActions({ slug }: GamePageActionsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Track this game as recently played
    addRecentGame(slug)
  }, [slug])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-3">
      <FavoritesButton slug={slug} size="lg" />
      <span className="text-sm text-white/50">
        {isFavorite(slug) ? 'In your favorites' : 'Add to favorites'}
      </span>
    </div>
  )
}
