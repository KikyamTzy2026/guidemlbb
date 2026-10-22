'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { heroes } from '@/data/heroes'

const roles = ['All', 'Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support']
const lanes = ['All', 'EXP', 'Jungle', 'Mid', 'Gold', 'Roam']

export default function HeroesPage() {
  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('All')
  const [laneFilter, setLaneFilter] = useState('All')

  const filtered = heroes.filter((h) => {
    const matchSearch = h.name.toLowerCase().includes(search.toLowerCase())
    const matchRole = roleFilter === 'All' || h.role.some((r) => r === roleFilter || r.includes(roleFilter))
    const matchLane = laneFilter === 'All' || h.lane.some((l) => l === laneFilter || l.includes(laneFilter))
    return matchSearch && matchRole && matchLane
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-mlbb-gold mb-2">All Heroes</h1>
        <p className="text-gray-400">
          {heroes.length} heroes • Full builds, counters, items & Tagalog notes • Season 2026
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search hero..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 bg-mlbb-card border border-mlbb-blue/40 rounded-lg focus:outline-none focus:border-mlbb-gold w-full sm:w-64"
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-4 py-2 bg-mlbb-card border border-mlbb-blue/40 rounded-lg focus:outline-none focus:border-mlbb-gold"
        >
          {roles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <select
          value={laneFilter}
          onChange={(e) => setLaneFilter(e.target.value)}
          className="px-4 py-2 bg-mlbb-card border border-mlbb-blue/40 rounded-lg focus:outline-none focus:border-mlbb-gold"
        >
          {lanes.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        <span className="text-sm text-gray-500 self-center">{filtered.length} heroes</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((hero) => (
          <Link
            key={hero.id}
            href={`/heroes/${hero.id}`}
            className="bg-mlbb-card border border-mlbb-blue/30 rounded-xl p-5 hover:border-mlbb-gold/60 transition group"
          >
            <div className="flex gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-mlbb-gold/40 flex-shrink-0 bg-mlbb-blue/30">
                <Image
                  src={hero.image}
                  alt={hero.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                  unoptimized
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h2 className="text-xl font-bold group-hover:text-mlbb-gold transition truncate">{hero.name}</h2>
                  <span className={`text-xs px-2 py-1 rounded font-bold flex-shrink-0 ml-2 ${
                    hero.tier === 'S+' ? 'bg-yellow-500/20 text-yellow-400' :
                    hero.tier === 'S' ? 'bg-orange-500/20 text-orange-400' :
                    hero.tier === 'A' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {hero.tier}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-1">{hero.role.join(' / ')}</p>
                <p className="text-xs text-gray-500">Lane: {hero.lane.join(', ')} • {hero.difficulty}</p>
              </div>
            </div>
            <p className="text-xs text-mlbb-gold mt-3">View builds, counters & items →</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
