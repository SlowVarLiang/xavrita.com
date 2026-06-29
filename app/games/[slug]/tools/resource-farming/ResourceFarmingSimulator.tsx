'use client'

import { useState } from 'react'

interface Resource {
  name: string
  icon: string
  category: string
  efficiency: number
}

interface Zone {
  name: string
  recommended: string[]
  danger: string
}

interface Props {
  resources: Resource[]
  zones: Zone[]
}

export default function ResourceFarmingSimulator({ resources, zones }: Props) {
  const [selectedResources, setSelectedResources] = useState<string[]>([])
  const [selectedZone, setSelectedZone] = useState<string>(zones[0].name)
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

    const zone = zones.find(z => z.name === selectedZone)
    const zoneBonus = zone ? 1.2 : 1.0
    const timePerResource = farmingTime / selectedResources.length

    const calculated = selectedResources.map(name => {
      const resource = resources.find(r => r.name === name)
      const efficiency = resource ? resource.efficiency * zoneBonus : 1
      const amount = Math.floor(timePerResource * efficiency * (0.8 + Math.random() * 0.4))
      return { resource: name, amount, time: Math.floor(timePerResource) }
    })

    setResults(calculated)
  }

  const totalYield = results ? results.reduce((sum, r) => sum + r.amount, 0) : 0

  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-4">Select Resources to Farm</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-6">
          {resources.map((res) => (
            <button
              key={res.name}
              onClick={() => toggleResource(res.name)}
              className={`p-3 rounded-lg border text-center transition-all ${
                selectedResources.includes(res.name)
                  ? 'bg-indigo-600 border-indigo-500 text-white'
                  : 'bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600'
              }`}
            >
              <span className="text-2xl block mb-1">{res.icon}</span>
              <span className="text-xs">{res.name}</span>
            </button>
          ))}
        </div>

        <h3 className="text-white font-semibold mb-4">Select Zone</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {zones.map((zone) => (
            <button
              key={zone.name}
              onClick={() => setSelectedZone(zone.name)}
              className={`p-4 rounded-lg border text-left transition-all ${
                selectedZone === zone.name
                  ? 'bg-indigo-600 border-indigo-500'
                  : 'bg-gray-900 border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-medium">{zone.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  zone.danger === 'Low' ? 'bg-green-900 text-green-300' :
                  zone.danger === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                  'bg-red-900 text-red-300'
                }`}>{zone.danger}</span>
              </div>
              <p className="text-gray-400 text-xs">
                Best for: {zone.recommended.join(', ')}
              </p>
            </button>
          ))}
        </div>

        <h3 className="text-white font-semibold mb-4">Farming Time (minutes)</h3>
        <input
          type="range"
          min="15"
          max="180"
          step="15"
          value={farmingTime}
          onChange={(e) => { setFarmingTime(Number(e.target.value)); setResults(null) }}
          className="w-full mb-4"
        />
        <div className="flex justify-between text-gray-400 text-sm mb-6">
          <span>15 min</span>
          <span className="text-white font-medium">{farmingTime} minutes</span>
          <span>180 min</span>
        </div>

        <button
          onClick={calculateRoute}
          disabled={selectedResources.length === 0}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors"
        >
          Calculate Route
        </button>
      </div>

      {results && (
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-semibold">Farming Results</h3>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Total Yield</p>
              <p className="text-2xl font-bold text-indigo-400">{totalYield}</p>
            </div>
          </div>

          <div className="space-y-3">
            {results.map((result, i) => {
              const resource = resources.find(r => r.name === result.resource)
              return (
                <div key={i} className="flex items-center gap-4 bg-gray-900 rounded-lg p-4">
                  <span className="text-3xl">{resource?.icon}</span>
                  <div className="flex-1">
                    <p className="text-white font-medium">{result.resource}</p>
                    <p className="text-gray-400 text-sm">{result.time} min farming time</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-indigo-400">x{result.amount}</p>
                    <p className="text-gray-500 text-xs">units</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-4 p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-400 text-sm">
              <span className="text-white font-medium">Zone Bonus:</span> {selectedZone} (20% efficiency boost)
            </p>
            <p className="text-gray-400 text-sm mt-1">
              <span className="text-white font-medium">Average per resource:</span> {Math.floor(totalYield / results.length)} units
            </p>
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
