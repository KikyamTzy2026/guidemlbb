import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { heroes, allHeroNames } from '@/data/heroes'
import { getItemImage } from '@/data/items'

export function generateStaticParams() {
  return heroes.map((hero) => ({ id: hero.id }))
}

function getHeroImage(name: string): string | null {
  const found = allHeroNames.find(
    (h) => h.name.toLowerCase() === name.toLowerCase()
  )
  return found?.image ?? null
}

export default function HeroDetailPage({ params }: { params: { id: string } }) {
  const hero = heroes.find((h) => h.id === params.id)
  if (!hero) notFound()

  return (
    <div className="space-y-8">
      <Link href="/heroes" className="text-sm text-mlbb-gold hover:underline">
        ← Back to Heroes
      </Link>

      {/* Header */}
      <div className="bg-mlbb-card border border-mlbb-blue/30 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-mlbb-gold/50 flex-shrink-0 bg-mlbb-blue/30 shadow-lg">
            <Image
              src={hero.image}
              alt={hero.name}
              fill
              className="object-cover"
              sizes="128px"
              priority
              unoptimized
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h1 className="text-3xl md:text-4xl font-bold">{hero.name}</h1>
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                hero.tier === 'S+' ? 'bg-yellow-500/20 text-yellow-400' :
                hero.tier === 'S' ? 'bg-orange-500/20 text-orange-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                {hero.tier}
              </span>
            </div>
            <p className="text-gray-300 mb-2">
              {hero.role.join(' / ')} • Lane: {hero.lane.join(', ')} • Difficulty: {hero.difficulty}
            </p>
            {hero.notes && (
              <p className="mt-3 text-sm text-gray-400 border-l-2 border-mlbb-gold pl-4">
                {hero.notes}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Builds */}
      <section>
        <h2 className="text-2xl font-bold text-mlbb-gold mb-4">Recommended Builds</h2>
        <div className="space-y-4">
          {hero.builds.map((build, i) => (
            <div key={i} className="bg-mlbb-card border border-mlbb-blue/30 rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-4">{build.name}</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                {build.items.map((item) => (
                  <div key={item} className="flex flex-col items-center gap-1 w-16">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-mlbb-gold/40 bg-mlbb-blue/40">
                      <Image
                        src={getItemImage(item)}
                        alt={item}
                        fill
                        className="object-cover"
                        sizes="48px"
                        unoptimized
                      />
                    </div>
                    <span className="text-[10px] text-center text-gray-300 leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-gray-300">Emblem:</span> {build.emblem} •{' '}
                <span className="text-gray-300">Spell:</span> {build.battleSpell}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Counters */}
      <section>
        <h2 className="text-2xl font-bold text-mlbb-gold mb-4">Counter Heroes</h2>
        <p className="text-sm text-gray-400 mb-4">Bakit effective ang counter na ito (Tagalog notes):</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {hero.counters.map((c) => {
            const img = getHeroImage(c.hero)
            return (
              <div key={c.hero} className="bg-mlbb-card border border-red-900/40 rounded-xl p-5 flex gap-4">
                {img && (
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-red-500/40 flex-shrink-0 bg-mlbb-blue/30">
                    <Image src={img} alt={c.hero} fill className="object-cover" sizes="56px" unoptimized />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-red-400 mb-1">{c.hero}</h3>
                  <p className="text-sm text-gray-300">{c.reason}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Counter Items */}
      <section>
        <h2 className="text-2xl font-bold text-mlbb-gold mb-4">Counter Items</h2>
        <p className="text-sm text-gray-400 mb-4">Mga item na epektibong pang-counter + bakit:</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {hero.counterItems.map((c) => {
            // Support "A / B" display
            const primary = c.item.split('/')[0].trim()
            return (
              <div key={c.item} className="bg-mlbb-card border border-blue-900/40 rounded-xl p-5 flex gap-4">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-blue-500/40 flex-shrink-0 bg-mlbb-blue/40">
                  <Image
                    src={getItemImage(primary)}
                    alt={c.item}
                    fill
                    className="object-cover"
                    sizes="56px"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-bold text-blue-400 mb-1">{c.item}</h3>
                  <p className="text-sm text-gray-300">{c.reason}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
