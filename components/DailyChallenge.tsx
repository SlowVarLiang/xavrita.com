'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { html5Games } from '@/lib/html5-games'
import { getDailyChallenge, isChallengeCompleted, completeChallenge } from '@/lib/challenges'

export default function DailyChallenge() {
  const [challenge, setChallenge] = useState<ReturnType<typeof getDailyChallenge> | null>(null)
  const [completed, setCompleted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const c = getDailyChallenge(html5Games)
    setChallenge(c)
    setCompleted(isChallengeCompleted(c.date))
  }, [])

  if (!mounted || !challenge) return null

  const handleComplete = () => {
    completeChallenge(challenge.date)
    setCompleted(true)
  }

  return (
    <section className="py-12 px-4 sm:px-6 border-t border-white/10" style={{ background: 'linear-gradient(180deg, #0a0910 0%, #13121c 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">🎯</span>
          <h2 className="text-2xl font-bold text-white">Daily Challenge</h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Game Preview */}
            <Link
              href={`/games/${challenge.game.slug}`}
              className="block relative group"
            >
              <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[200px] overflow-hidden">
                <img
                  src={challenge.game.thumbnail}
                  alt={challenge.game.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-black/80 md:via-transparent md:to-transparent" />
                <div className="absolute bottom-4 left-4 md:bottom-auto md:top-4 md:left-4">
                  <span className="text-4xl">{challenge.game.emoji}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{challenge.game.name}</h3>
                </div>
              </div>
            </Link>

            {/* Challenge Info */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full font-medium">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                  </span>
                  {completed && (
                    <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full font-medium">
                      ✅ Completed
                    </span>
                  )}
                </div>

                <p className="text-white/60 mb-6">{challenge.task}</p>

                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl mb-6">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wide">Reward</p>
                    <p className="text-white font-medium">{challenge.reward}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/games/${challenge.game.slug}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-500 hover:bg-purple-400 text-white font-medium rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play Now
                </Link>
                {!completed ? (
                  <button
                    onClick={handleComplete}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium rounded-xl transition-colors"
                  >
                    Mark Done
                  </button>
                ) : (
                  <div className="px-6 py-3 flex items-center justify-center text-green-400 font-medium">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Done!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
