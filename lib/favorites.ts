'use client'

import { Html5Game } from './html5-games'

const FAVORITES_KEY = 'xavrito_favorites'
const RECENT_KEY = 'xavrito_recent'
const MAX_RECENT = 5

export interface FavoritesStore {
  favorites: string[] // array of game slugs
  recent: string[] // array of game slugs
}

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(FAVORITES_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function addFavorite(slug: string): void {
  const favorites = getFavorites()
  if (!favorites.includes(slug)) {
    favorites.push(slug)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }
}

export function removeFavorite(slug: string): void {
  const favorites = getFavorites().filter(s => s !== slug)
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

export function toggleFavorite(slug: string): boolean {
  const favorites = getFavorites()
  if (favorites.includes(slug)) {
    removeFavorite(slug)
    return false
  } else {
    addFavorite(slug)
    return true
  }
}

export function isFavorite(slug: string): boolean {
  return getFavorites().includes(slug)
}

export function getRecentGames(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(RECENT_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function addRecentGame(slug: string): void {
  let recent = getRecentGames().filter(s => s !== slug)
  recent.unshift(slug)
  recent = recent.slice(0, MAX_RECENT)
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent))
}

// Get favorites count for each game (static data for hotness)
export function getFavoritesCount(): Record<string, number> {
  // This would normally come from a backend
  // For now, return empty - will be populated from localStorage favorites
  return {}
}

// Get games sorted by "hotness" (favorites count + recency boost)
export function getHotGames(games: Html5Game[], limit = 10): Html5Game[] {
  const favorites = getFavorites()
  const recent = getRecentGames()

  return [...games].sort((a, b) => {
    const aFav = favorites.includes(a.slug) ? 1 : 0
    const bFav = favorites.includes(b.slug) ? 1 : 0
    const aRecent = recent.indexOf(a.slug)
    const bRecent = recent.indexOf(b.slug)
    const aRecencyBoost = aRecent === -1 ? 0 : (MAX_RECENT - aRecent) * 0.5
    const bRecencyBoost = bRecent === -1 ? 0 : (MAX_RECENT - bRecent) * 0.5

    return (bFav + bRecencyBoost) - (aFav + aRecencyBoost)
  }).slice(0, limit)
}
