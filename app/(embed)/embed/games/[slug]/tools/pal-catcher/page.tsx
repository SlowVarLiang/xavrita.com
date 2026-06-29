'use client'

import { useState } from 'react'

interface Pal {
  name: string
  type: string
  color: string
  rarity: string
  use: string
}

const PALS: Pal[] = [
  { name: 'Lamball', type: 'Neutral', color: '#8B5A2B', rarity: 'Common', use: 'Ranching' },
  { name: 'Cattiva', type: 'Neutral', color: '#6B4423', rarity: 'Common', use: 'Ranching' },
  { name: 'Chikipi', type: 'Neutral', color: '#F4A460', rarity: 'Common', use: 'Ranching' },
  { name: 'Lifmunk', type: 'Grass', color: '#228B22', rarity: 'Common', use: 'Planting' },
  { name: 'Foxparks', type: 'Fire', color: '#FF4500', rarity: 'Common', use: 'Kindling' },
  { name: 'Fuack', type: 'Water', color: '#1E90FF', rarity: 'Common', use: 'Watering' },
  { name: 'Sparkit', type: 'Electric', color: '#FFD700', rarity: 'Common', use: 'Electric' },
  { name: 'Woolipop', type: 'Neutral', color: '#FF69B4', rarity: 'Uncommon', use: 'Ranching' },
  { name: 'Mossanda', type: 'Grass', color: '#32CD32', rarity: 'Uncommon', use: 'Transporting' },
  { name: 'Swee', type: 'Ice', color: '#87CEEB', rarity: 'Uncommon', use: 'Cooling' },
  { name: 'Jormuntide', type: 'Water/Dragon', color: '#4169E1', rarity: 'Rare', use: 'Farming' },
  { name: 'Suzaku', type: 'Fire', color: '#FF6347', rarity: 'Rare', use: 'Ranching' },
  { name: 'Kingpaca', type: 'Neutral', color: '#D2691E', rarity: 'Rare', use: 'Mining' },
  { name: 'Elizidon', type: 'Water', color: '#00CED1', rarity: 'Rare', use: 'Farming' },
  { name: 'Incineram', type: 'Fire/Dark', color: '#8B0000', rarity: 'Rare', use: 'Ranching' },
  { name: 'Anubis', type: 'Ground', color: '#DAA520', rarity: 'Epic', use: 'Mining' },
  { name: 'Faleris', type: 'Fire', color: '#DC143C', rarity: 'Epic', use: 'Kindling' },
  { name: 'Shadowbeak', type: 'Dark', color: '#4B0082', rarity: 'Epic', use: 'Night Monster' },
  { name: 'Paladius', type: 'Neutral', color: '#C0C0C0', rarity: 'Legendary', use: 'Combat' },
  { name: 'Necromus', type: 'Dark', color: '#2F4F4F', rarity: 'Legendary', use: 'Combat' },
]

export default function PalCatcherEmbed() {
  const [isCatching, setIsCatching] = useState(false)
  const [caughtPal, setCaughtPal] = useState<Pal | null>(null)
  const [catchAnimation, setCatchAnimation] = useState(false)

  const catchPal = () => {
    if (isCatching) return
    setIsCatching(true)
    setCaughtPal(null)
    setCatchAnimation(true)

    const randomIndex = Math.floor(Math.random() * PALS.length)

    setTimeout(() => {
      setCaughtPal(PALS[randomIndex])
      setIsCatching(false)
      setCatchAnimation(false)
    }, 2000)
  }

  const getIcon = (type: string) => {
    if (type.includes('Fire')) return '🔥'
    if (type.includes('Water')) return '💧'
    if (type.includes('Grass')) return '🌿'
    if (type.includes('Electric')) return '⚡'
    if (type.includes('Ice')) return '❄️'
    if (type.includes('Dark')) return '🌑'
    return '🐾'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900/20 to-gray-900 flex flex-col items-center justify-center p-4">
      <div className="relative w-52 h-52 mb-6">
        {caughtPal ? (
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${catchAnimation ? 'scale-0' : 'scale-100'}`}>
            <div
              className="w-40 h-40 rounded-full border-4 flex items-center justify-center"
              style={{
                backgroundColor: `${caughtPal.color}20`,
                borderColor: caughtPal.color,
                boxShadow: `0 0 40px ${caughtPal.color}40`,
              }}
            >
              <div className="text-center">
                <div className="text-5xl mb-1">{getIcon(caughtPal.type)}</div>
                <p className="text-white font-bold text-sm">{caughtPal.name}</p>
                <p className="text-gray-400 text-xs">{caughtPal.type}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center ${catchAnimation ? 'animate-pulse' : ''}`}>
            <div className="w-40 h-40 rounded-full bg-gray-800 border-4 border-gray-600 flex items-center justify-center">
              <span className="text-5xl">🎯</span>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={catchPal}
        disabled={isCatching}
        className="px-6 py-3 bg-green-600 hover:bg-green-500 disabled:bg-gray-600 text-white font-bold rounded-lg shadow-lg shadow-green-500/30 transition-all hover:scale-105 active:scale-95 mb-4"
      >
        {isCatching ? 'CATCHING...' : 'CATCH PAL!'}
      </button>

      {caughtPal && !catchAnimation && (
        <div className="mt-4 text-center" style={{ animation: 'fade-in 0.5s ease-out' }}>
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 min-w-[180px]">
            <p className="text-white font-bold text-lg">{caughtPal.name}</p>
            <p className="text-gray-400 text-sm">{caughtPal.type}</p>
            <p className="text-gray-500 text-xs mt-1">Work: {caughtPal.use}</p>
            <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded ${
              caughtPal.rarity === 'Common' ? 'bg-gray-700 text-gray-300' :
              caughtPal.rarity === 'Uncommon' ? 'bg-green-900 text-green-300' :
              caughtPal.rarity === 'Rare' ? 'bg-blue-900 text-blue-300' :
              caughtPal.rarity === 'Epic' ? 'bg-purple-900 text-purple-300' :
              'bg-amber-900 text-amber-300'
            }`}>{caughtPal.rarity}</span>
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
