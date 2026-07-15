'use client'

import { Html5Game } from './html5-games'

const CHALLENGE_KEY = 'xavrito_challenge'
const CHALLENGE_DATE_KEY = 'xavrito_challenge_date'
const COMPLETED_KEY = 'xavrito_challenge_completed'

export interface DailyChallenge {
  date: string
  game: Html5Game
  task: string
  reward: string
}

export interface ChallengeHistory {
  [date: string]: boolean // true if completed
}

const CHALLENGE_TEMPLATES = [
  { task: 'Play this game for 5 minutes', reward: '🎯 Quick Player' },
  { task: 'Score high and show your skills', reward: '🏆 High Scorer' },
  { task: 'Complete 3 rounds', reward: '⚡ Dedicated' },
  { task: 'Try a new game today', reward: '🌟 Explorer' },
  { task: 'Master the controls', reward: '🎮 Skilled' },
  { task: 'Beat your personal best', reward: '📈 Improver' },
]

function getDateString(date: Date): string {
  return date.toISOString().split('T')[0]
}

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  return Math.floor(diff / oneDay)
}

export function getDailyChallenge(allGames: Html5Game[]): DailyChallenge {
  const today = new Date()
  const dateStr = getDateString(today)
  const dayOfYear = getDayOfYear(today)

  // Use day of year to deterministically select a game and template
  const gameIndex = dayOfYear % allGames.length
  const templateIndex = Math.floor(dayOfYear / allGames.length) % CHALLENGE_TEMPLATES.length

  const game = allGames[gameIndex]
  const template = CHALLENGE_TEMPLATES[templateIndex]

  return {
    date: dateStr,
    game,
    task: template.task,
    reward: template.reward,
  }
}

export function isChallengeCompleted(date: string): boolean {
  if (typeof window === 'undefined') return false
  try {
    const history = localStorage.getItem(COMPLETED_KEY)
    const data: ChallengeHistory = history ? JSON.parse(history) : {}
    return data[date] === true
  } catch {
    return false
  }
}

export function completeChallenge(date: string): void {
  if (typeof window === 'undefined') return
  try {
    const history = localStorage.getItem(COMPLETED_KEY)
    const data: ChallengeHistory = history ? JSON.parse(history) : {}
    data[date] = true
    localStorage.setItem(COMPLETED_KEY, JSON.stringify(data))
  } catch {
    // Ignore errors
  }
}

export function getCompletedChallenges(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const history = localStorage.getItem(COMPLETED_KEY)
    const data: ChallengeHistory = history ? JSON.parse(history) : {}
    return Object.entries(data)
      .filter(([, completed]) => completed)
      .map(([date]) => date)
  } catch {
    return []
  }
}
