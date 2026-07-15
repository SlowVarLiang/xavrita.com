'use client'

import { useState, useEffect } from 'react'
import { isFavorite, toggleFavorite } from '@/lib/favorites'

interface FavoritesButtonProps {
  slug: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function FavoritesButton({ slug, className = '', size = 'md' }: FavoritesButtonProps) {
  const [favorite, setFavorite] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setFavorite(isFavorite(slug))
  }, [slug])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const newState = toggleFavorite(slug)
    setFavorite(newState)
  }

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  if (!mounted) {
    return (
      <button
        className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white/50 ${className}`}
        aria-label="Loading..."
      >
        <svg className={`${iconSizes[size]} animate-pulse`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full backdrop-blur-sm border transition-all ${
        favorite
          ? 'bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30'
          : 'bg-black/50 border-white/20 text-white/70 hover:bg-black/70 hover:text-white'
      } ${className}`}
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        className={`${iconSizes[size]} transition-transform ${favorite ? 'scale-110' : 'scale-100'}`}
        fill={favorite ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={favorite ? 0 : 2}
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  )
}
