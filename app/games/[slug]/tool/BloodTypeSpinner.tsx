'use client'

import { useState } from 'react'

const BLOOD_TYPES = [
  { name: 'Worker Blood', color: '#3B82F6', bonus: '+25% Resource Gathering', description: 'Perfect for base building and progression', rarity: 'Common' },
  { name: 'Brute Blood', color: '#EF4444', bonus: '+30% Physical Power', description: 'Dominate in PvP and melee combat', rarity: 'Common' },
  { name: 'Scholar Blood', color: '#EAB308', bonus: '+35% Spell Power', description: 'Maximize your magic build potential', rarity: 'Common' },
  { name: 'Rogue Blood', color: '#A855F7', bonus: '+20% Movement, +15% Attack Speed', description: 'Ideal for ganking and hit-and-run tactics', rarity: 'Uncommon' },
  { name: 'Merchant Blood', color: '#22C55E', bonus: '+40% Trade Value', description: 'Master the economy and get rich fast', rarity: 'Uncommon' },
  { name: 'Guardian Blood', color: '#64748B', bonus: '+30% Damage Resistance', description: 'Become an unbreakable tank', rarity: 'Rare' },
  { name: 'Hunter Blood', color: '#F97316', bonus: '+35% Critical Chance', description: 'Strike with deadly precision', rarity: 'Rare' },
  { name: 'Dread Blood', color: '#EC4899', bonus: '+25% Life Steal', description: 'Sustain through any fight', rarity: 'Epic' },
]

export default function BloodTypeSpinner() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<typeof BLOOD_TYPES[0] | null>(null)
  const [rotation, setRotation] = useState(0)

  const spin = () => {
    if (isSpinning) return
    setIsSpinning(true)
    setResult(null)

    const randomIndex = Math.floor(Math.random() * BLOOD_TYPES.length)
    const rotations = 5 + Math.random() * 3
    const anglePerSegment = 360 / BLOOD_TYPES.length
    const newRotation = rotation + rotations * 360 + (BLOOD_TYPES.length - randomIndex) * anglePerSegment + anglePerSegment / 2

    setRotation(newRotation)

    setTimeout(() => {
      setResult(BLOOD_TYPES[randomIndex])
      setIsSpinning(false)
    }, 4000)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-72 h-72 mb-8">
        <div className="absolute inset-0 rounded-full border-8 border-gray-800 shadow-2xl" />
        <div
          className="absolute inset-2 rounded-full overflow-hidden"
          style={{
            transform: `rotate(${rotation}deg)`,
            transitionDuration: '4s',
            transitionTimingFunction: 'cubic-bezier(0.17, 0.67, 0.12, 0.99)',
          }}
        >
          <div className="grid grid-cols-2 grid-rows-4 h-full w-full">
            {BLOOD_TYPES.map((blood) => (
              <div
                key={blood.name}
                className="flex items-center justify-center border border-black/20"
                style={{ backgroundColor: blood.color }}
              >
                <span
                  className="text-white font-bold text-xs"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                  }}
                >
                  {blood.name.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-950 rounded-full border-4 border-indigo-500 shadow-lg z-10 flex items-center justify-center">
          <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
          </svg>
        </div>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-indigo-500 z-20" />
      </div>

      <button
        onClick={spin}
        disabled={isSpinning}
        className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95"
      >
        {isSpinning ? 'SPINNING...' : 'SPIN NOW'}
      </button>

      {result && (
        <div className="mt-8 text-center animate-fade-in">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <p className="text-sm text-gray-400 mb-2">Your Blood Type Is</p>
            <h3 className="text-2xl font-bold mb-1" style={{ color: result.color }}>
              {result.name}
            </h3>
            <p className="text-sm mb-2" style={{ color: result.color }}>
              {result.rarity}
            </p>
            <p className="text-indigo-400 font-medium mb-2">{result.bonus}</p>
            <p className="text-gray-400 text-sm">{result.description}</p>
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
