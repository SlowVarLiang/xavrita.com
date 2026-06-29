'use client'

import { useState } from 'react'

interface Pal {
  name: string
  type: string
  color: string
  rarity: string
  use: string
}

interface Props {
  pals: Pal[]
}

export default function PalCatcher({ pals }: Props) {
  const [isCatching, setIsCatching] = useState(false)
  const [caughtPal, setCaughtPal] = useState<Pal | null>(null)
  const [catchAnimation, setCatchAnimation] = useState(false)

  const catchPal = () => {
    if (isCatching) return
    setIsCatching(true)
    setCaughtPal(null)
    setCatchAnimation(true)

    const randomIndex = Math.floor(Math.random() * pals.length)

    setTimeout(() => {
      setCaughtPal(pals[randomIndex])
      setIsCatching(false)
      setCatchAnimation(false)
    }, 2000)
  }

  const getRarityChance = (rarity: string) => {
    switch (rarity) {
      case 'Common': return '60%'
      case 'Uncommon': return '25%'
      case 'Rare': return '10%'
      case 'Epic': return '4%'
      case 'Legendary': return '1%'
      default: return '0%'
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64 mb-8">
        {caughtPal ? (
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            catchAnimation ? 'scale-0' : 'scale-100'
          }`}>
            <div
              className="w-48 h-48 rounded-full border-4 flex items-center justify-center"
              style={{
                backgroundColor: `${caughtPal.color}20`,
                borderColor: caughtPal.color,
                boxShadow: `0 0 40px ${caughtPal.color}40`,
              }}
            >
              <div className="text-center">
                <div
                  className="text-6xl mb-2"
                  style={{ filter: `drop-shadow(0 0 10px ${caughtPal.color})` }}
                >
                  {caughtPal.type.includes('Fire') ? '🔥' :
                   caughtPal.type.includes('Water') ? '💧' :
                   caughtPal.type.includes('Grass') ? '🌿' :
                   caughtPal.type.includes('Electric') ? '⚡' :
                   caughtPal.type.includes('Ice') ? '❄️' :
                   caughtPal.type.includes('Ground') ? '🌍' :
                   caughtPal.type.includes('Dark') ? '🌑' :
                   caughtPal.type.includes('Dragon') ? '🐉' : '🐾'}
                </div>
                <p className="text-white font-bold text-lg">{caughtPal.name}</p>
                <p className="text-gray-400 text-sm">{caughtPal.type}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center ${catchAnimation ? 'animate-pulse' : ''}`}>
            <div className="w-48 h-48 rounded-full bg-gray-800 border-4 border-gray-600 flex items-center justify-center">
              <div className="text-6xl">🎯</div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={catchPal}
        disabled={isCatching}
        className="px-8 py-4 bg-green-600 hover:bg-green-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl shadow-lg shadow-green-500/30 transition-all hover:scale-105 active:scale-95 mb-6"
      >
        {isCatching ? 'CATCHING...' : 'CATCH PAL!'}
      </button>

      <div className="text-center text-sm text-gray-500">
        <p>Rarity Rates:</p>
        <p>
          {['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'].map((r, i) => (
            <span key={r} className="mx-1">
              <span className={
                r === 'Common' ? 'text-gray-400' :
                r === 'Uncommon' ? 'text-green-400' :
                r === 'Rare' ? 'text-blue-400' :
                r === 'Epic' ? 'text-purple-400' : 'text-amber-400'
              }>{r}</span>
              <span className="text-gray-600">({getRarityChance(r)})</span>
            </span>
          ))}
        </p>
      </div>

      {caughtPal && !catchAnimation && (
        <div className="mt-8 w-full max-w-md animate-fade-in">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4 text-center">Catch Results</h3>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                style={{
                  backgroundColor: `${caughtPal.color}20`,
                  border: `2px solid ${caughtPal.color}`,
                }}
              >
                {caughtPal.type.includes('Fire') ? '🔥' :
                 caughtPal.type.includes('Water') ? '💧' :
                 caughtPal.type.includes('Grass') ? '🌿' :
                 caughtPal.type.includes('Electric') ? '⚡' :
                 caughtPal.type.includes('Ice') ? '❄️' :
                 caughtPal.type.includes('Dark') ? '🌑' : '🐾'}
              </div>
              <div>
                <p className="text-white font-bold text-xl">{caughtPal.name}</p>
                <p className="text-gray-400 text-sm">{caughtPal.type}</p>
                <p className="text-gray-500 text-xs mt-1">Work Suitability: {caughtPal.use}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className={`text-sm px-2 py-1 rounded ${
                caughtPal.rarity === 'Common' ? 'bg-gray-700 text-gray-300' :
                caughtPal.rarity === 'Uncommon' ? 'bg-green-900 text-green-300' :
                caughtPal.rarity === 'Rare' ? 'bg-blue-900 text-blue-300' :
                caughtPal.rarity === 'Epic' ? 'bg-purple-900 text-purple-300' :
                'bg-amber-900 text-amber-300'
              }`}>{caughtPal.rarity}</span>
              <button
                onClick={catchPal}
                className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
              >
                Catch Another →
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
