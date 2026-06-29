'use client'

import { useState } from 'react'

interface Resource {
  name: string
  icon: string
  category: string
  efficiency: number
}

const RESOURCES: Resource[] = [
  { name: 'Iron Ore', icon: '🪨', category: 'Ores', efficiency: 1.0 },
  { name: 'Copper Ore', icon: '🔶', category: 'Ores', efficiency: 1.2 },
  { name: 'Coal', icon: '⚫', category: 'Ores', efficiency: 1.5 },
  { name: 'Crystal', icon: '💎', category: 'Ores', efficiency: 2.5 },
  { name: 'Starlight Ore', icon: '⭐', category: 'Rare', efficiency: 5.0 },
  { name: 'Wood', icon: '🪵', category: 'Materials', efficiency: 0.8 },
  { name: 'Fiber', icon: '🌿', category: 'Materials', efficiency: 1.0 },
  { name: 'Stone', icon: '🪨', category: 'Materials', efficiency: 0.6 },
  { name: 'Gold', icon: '🪙', category: 'Rare', efficiency: 8.0 },
]

const ZONES = [
  { name: 'Starting', recommended: ['Wood', 'Stone'], danger: 'Low' },
  { name: 'Mid Game', recommended: ['Iron Ore', 'Copper'], danger: 'Medium' },
  { name: 'End Game', recommended: ['Crystal', 'Gold'], danger: 'High' },
]

export default function ResourceFarmingEmbed() {
  const [selectedResources, setSelectedResources] = useState<string[]>([])
  const [selectedZone, setSelectedZone] = useState<string>(ZONES[0].name)
  const [farmingTime, setFarmingTime] = useState(60)
  const [results, setResults] = useState<{ resource: string; amount: number; time: number }[] | null>(null)

  const toggleResource = (name: string) => {
    setSelectedResources(prev =>
      prev.includes(name) ? prev.filter(r => r !== name) : [...prev, name]
    )
    setResults(null)
  }

  const calculateRoute = () => {
    if (selectedResources.length === 0) return
    const timePerResource = farmingTime / selectedResources.length
    const calculated = selectedResources.map(name => {
      const resource = RESOURCES.find(r => r.name === name)
      const efficiency = resource ? resource.efficiency : 1
      const amount = Math.floor(timePerResource * efficiency * (0.8 + Math.random() * 0.4))
      return { resource: name, amount, time: Math.floor(timePerResource) }
    })
    setResults(calculated)
  }

  const totalYield = results ? results.reduce((sum, r) => sum + r.amount, 0) : 0

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-md mx-auto space-y-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-xs mb-3">Select Resources</p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {RESOURCES.map((res) => (
              <button
                key={res.name}
                onClick={() => toggleResource(res.name)}
                className={`p-2 rounded-lg border text-center transition-all text-xs ${
                  selectedResources.includes(res.name)
                    ? 'bg-indigo-600 border-indigo-500 text-white'
                    : 'bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600'
                }`}
              >
                <span className="text-lg block">{res.icon}</span>
                <span>{res.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          <p className="text-gray-400 text-xs mb-3">Select Zone</p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {ZONES.map((zone) => (
              <button
                key={zone.name}
                onClick={() => setSelectedZone(zone.name)}
                className={`p-2 rounded-lg border text-center transition-all ${
                  selectedZone === zone.name
                    ? 'bg-indigo-600 border-indigo-500'
                    : 'bg-gray-900 border-gray-700 hover:border-gray-600'
                }`}
              >
                <span className="text-xs text-white">{zone.name}</span>
              </button>
            ))}
          </div>

          <p className="text-gray-400 text-xs mb-2">Time: {farmingTime} min</p>
          <input
            type="range"
            min="15"
            max="180"
            step="15"
            value={farmingTime}
            onChange={(e) => { setFarmingTime(Number(e.target.value)); setResults(null) }}
            className="w-full mb-3"
          />

          <button
            onClick={calculateRoute}
            disabled={selectedResources.length === 0}
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-600 text-white font-bold text-sm rounded-lg transition-colors"
          >
            Calculate
          </button>
        </div>

        {results && (
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-semibold text-sm">Results</span>
              <span className="text-indigo-400 font-bold">Total: {totalYield}</span>
            </div>
            <div className="space-y-2">
              {results.map((result, i) => {
                const resource = RESOURCES.find(r => r.name === result.resource)
                return (
                  <div key={i} className="flex items-center gap-3 bg-gray-900 rounded-lg p-2">
                    <span className="text-xl">{resource?.icon}</span>
                    <div className="flex-1">
                      <p className="text-white text-xs font-medium">{result.resource}</p>
                      <p className="text-gray-500 text-xs">{result.time} min</p>
                    </div>
                    <span className="text-indigo-400 font-bold text-sm">x{result.amount}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
