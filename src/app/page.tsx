import Link from 'next/link'
import Image from 'next/image'
import { heroes } from '@/data/heroes'

const topMeta = heroes
  .filter((h) => h.tier === 'S+' || h.tier === 'S')
  .slice(0, 12)

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-mlbb-gold mb-4">
          MLBB Guide 2026
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-2">
          Complete Mobile Legends guide — <strong>lahat ng heroes</strong>, builds, counters, items, at map rotation.
        </p>
        <p className="text-sm text-gray-500">
          Season 42 • Patch 2.2.16 • Tagalog notes sa bawat counter
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/heroes"
            className="px-6 py-3 bg-mlbb-gold text-mlbb-dark font-bold rounded-xl hover:brightness-110 transition"
          >
            All Heroes ({heroes.length})
          </Link>
          <Link
            href="/items"
            className="px-6 py-3 bg-mlbb-card border border-mlbb-gold/50 text-mlbb-gold font-bold rounded-xl hover:bg-mlbb-gold/10 transition"
          >
            Items Guide
          </Link>
          <Link
            href="/rotation"
            className="px-6 py-3 bg-mlbb-card border border-mlbb-blue/50 text-gray-200 font-bold rounded-xl hover:border-mlbb-gold/50 transition"
          >
            Map Rotation 2026
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-mlbb-card border border-mlbb-blue/30 rounded-xl p-5">
          <p className="text-3xl font-bold text-mlbb-gold">{heroes.length}</p>
          <p className="text-sm text-gray-400">Heroes with full guide</p>
        </div>
        <div className="bg-mlbb-card border border-mlbb-blue/30 rounded-xl p-5">
          <p className="text-3xl font-bold text-mlbb-gold">60+</p>
          <p className="text-sm text-gray-400">Items with icons</p>
        </div>
        <div className="bg-mlbb-card border border-mlbb-blue/30 rounded-xl p-5">
          <p className="text-3xl font-bold text-mlbb-gold">4</p>
          <p className="text-sm text-gray-400">Map objectives</p>
        </div>
        <div className="bg-mlbb-card border border-mlbb-blue/30 rounded-xl p-5">
          <p className="text-3xl font-bold text-mlbb-gold">TL</p>
          <p className="text-sm text-gray-400">Tagalog counter notes</p>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-mlbb-gold">Top Meta Heroes</h2>
          <Link href="/heroes" className="text-sm text-mlbb-gold hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {topMeta.map((hero) => (
            <Link
              key={hero.id}
              href={`/heroes/${hero.id}`}
              className="bg-mlbb-card border border-mlbb-blue/30 rounded-xl p-3 text-center hover:border-mlbb-gold/50 transition"
            >
              <div className="relative w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden border border-mlbb-gold/40 bg-mlbb-blue/30">
                <Image
                  src={hero.image}
                  alt={hero.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                  unoptimized
                />
              </div>
              <p className="font-semibold text-sm truncate">{hero.name}</p>
              <p className="text-xs text-mlbb-gold">{hero.tier}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-mlbb-card border border-mlbb-blue/30 rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-bold text-mlbb-gold mb-3">Ano ang meron sa guide na ito?</h2>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>✅ <strong>Lahat ng heroes</strong> — builds, counter heroes, counter items, images, Tagalog notes</li>
          <li>✅ <strong>Items page</strong> — icons, category, tips, counter usage</li>
          <li>✅ <strong>Map rotation 2026</strong> — Golden Turret, Healing Turtle, Revealing Wisps, Flying Cloud</li>
          <li>✅ Ready to deploy sa <strong>Vercel</strong></li>
        </ul>
      </section>
    </div>
  )
}
