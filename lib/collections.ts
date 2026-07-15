import { Html5Game } from './html5-games'

export interface GameCollection {
  id: string
  name: string
  emoji: string
  description: string
  color: string
  games: Html5Game[]
}

export const collections: GameCollection[] = [
  {
    id: 'quick-play',
    name: '5-Minute Escape',
    emoji: '⚡',
    description: 'Quick games for short breaks. Play a round in minutes.',
    color: '#f97316',
    games: [],
  },
  {
    id: 'brain-teasers',
    name: 'Brain Teasers',
    emoji: '🧩',
    description: 'Puzzle games that challenge your mind.',
    color: '#8b5cf6',
    games: [],
  },
  {
    id: 'action-rush',
    name: 'Action Rush',
    emoji: '🔥',
    description: 'Fast-paced games for adrenaline seekers.',
    color: '#ef4444',
    games: [],
  },
  {
    id: 'kid-friendly',
    name: 'Kid-Friendly',
    emoji: '🌈',
    description: 'Safe, fun games for younger players.',
    color: '#22c55e',
    games: [],
  },
  {
    id: 'classic-arcade',
    name: 'Classic Arcade',
    emoji: '👾',
    description: 'Retro-style games that never get old.',
    color: '#ec4899',
    games: [],
  },
  {
    id: 'two-player',
    name: 'Two-Player Fun',
    emoji: '🎯',
    description: 'Games to play with a friend on the same device.',
    color: '#06b6d4',
    games: [],
  },
]

// Populate collections with actual games based on tags and categories
export function getPopulatedCollections(allGames: Html5Game[]): GameCollection[] {
  return [
    {
      ...collections[0],
      games: allGames.filter(g =>
        g.tags.includes('one-touch') ||
        g.tags.includes('timing') ||
        g.tags.includes('endless') ||
        g.tags.includes('classic') ||
        g.category === 'Arcade'
      ).slice(0, 8),
    },
    {
      ...collections[1],
      games: allGames.filter(g =>
        g.category === 'Puzzle' ||
        g.tags.includes('match-3') ||
        g.tags.includes('memory')
      ).slice(0, 8),
    },
    {
      ...collections[2],
      games: allGames.filter(g =>
        g.category === 'Action' ||
        g.tags.includes('shooter') ||
        g.tags.includes('fighting')
      ).slice(0, 8),
    },
    {
      ...collections[3],
      games: allGames.filter(g =>
        g.category === 'Kids' ||
        g.tags.includes('educational') ||
        g.tags.includes('kids')
      ).slice(0, 8),
    },
    {
      ...collections[4],
      games: allGames.filter(g =>
        g.tags.includes('classic') ||
        g.name.toLowerCase().includes('tetris') ||
        g.name.toLowerCase().includes('pac-man') ||
        g.name.toLowerCase().includes('snake') ||
        g.name.toLowerCase().includes('flappy')
      ).slice(0, 8),
    },
    {
      ...collections[5],
      games: allGames.filter(g =>
        g.tags.includes('battle') ||
        g.tags.includes('arena') ||
        g.tags.includes('fighting')
      ).slice(0, 8),
    },
  ]
}
