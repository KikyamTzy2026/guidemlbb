import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MLBB Guide 2026 | Heroes, Builds, Counters & Rotation',
  description: 'Complete Mobile Legends Bang Bang guide for Season 42 / Patch 2.2.16. All heroes, item builds, counters with Tagalog notes, and map rotation guide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tl">
      <body className="min-h-screen bg-mlbb-dark text-gray-100 antialiased">
        <header className="border-b border-mlbb-blue/40 bg-mlbb-card/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-mlbb-gold">MLBB</span>
              <span className="text-sm text-gray-400">Guide 2026</span>
            </a>
            <nav className="flex gap-4 text-sm">
              <a href="/" className="hover:text-mlbb-gold transition">Home</a>
              <a href="/heroes" className="hover:text-mlbb-gold transition">Heroes</a>
              <a href="/items" className="hover:text-mlbb-gold transition">Items</a>
              <a href="/rotation" className="hover:text-mlbb-gold transition">Rotation & Map</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-mlbb-blue/40 mt-16 py-8 text-center text-sm text-gray-500">
          <p>MLBB Guide 2026 • Season 42 (Starward Decade) • Patch 2.2.16a</p>
          <p className="mt-1">Data based on ranked stats (Legend+). Not affiliated with Moonton.</p>
          <p className="mt-2 text-xs">Ready for Vercel deployment</p>
        </footer>
      </body>
    </html>
  )
}
