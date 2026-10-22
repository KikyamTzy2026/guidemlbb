'use client'

import { useState } from 'react'
import Image from 'next/image'
import { allItems, getItemImage, type ItemCategory } from '@/data/items'

const categories: (ItemCategory | 'All')[] = ['All', 'Boots', 'Attack', 'Magic', 'Defense', 'Roam', 'Jungling']

export default function ItemsPage() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState<ItemCategory | 'All'>('All')

  const filtered = allItems.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = cat === 'All' || item.category === cat
    return matchSearch && matchCat
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-mlbb-gold mb-2">Items Guide</h1>
        <p className="text-gray-400">
          Full item catalog • Icons • Tips • Counter usage (Season 2026)
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 bg-mlbb-card border border-mlbb-blue/40 rounded-lg focus:outline-none focus:border-mlbb-gold w-full sm:w-64"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                cat === c ? 'bg-mlbb-gold text-mlbb-dark' : 'bg-mlbb-card border border-mlbb-blue/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <div
            key={item.name}
            className="bg-mlbb-card border border-mlbb-blue/30 rounded-xl p-4 flex gap-4 hover:border-mlbb-gold/40 transition"
          >
            <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-mlbb-gold/30 flex-shrink-0 bg-mlbb-blue/40">
              <Image
                src={getItemImage(item.name)}
                alt={item.name}
                fill
                className="object-cover"
                sizes="56px"
                unoptimized
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-bold truncate">{item.name}</h2>
                <span className="text-[10px] px-2 py-0.5 rounded bg-mlbb-blue/40 text-gray-300 flex-shrink-0">
                  {item.category}
                </span>
              </div>
              <p className="text-sm text-gray-400">{item.role}</p>
              {item.counterTip && (
                <p className="text-xs text-mlbb-gold mt-1">Counter tip: {item.counterTip}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
