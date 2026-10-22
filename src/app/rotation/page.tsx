export default function RotationPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-mlbb-gold mb-2">Map & Rotation Guide 2026</h1>
        <p className="text-gray-400">Season 42 • Annual Map Change (live since Sept 28, 2026)</p>
      </div>

      <section className="bg-mlbb-card border border-mlbb-blue/30 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-4">Bagong Map Effects (Isa lang active per match)</h2>
        <p className="text-gray-300 mb-6">
          Simula September 28, 2026, may random map effect kada match. Hindi lahat sabay-sabay — isa lang ang lalabas.
          Makikita mo ito bago mag-draft.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-yellow-600/30 rounded-xl p-5">
            <h3 className="font-bold text-yellow-400 text-lg mb-2">Golden Turret</h3>
            <p className="text-sm text-gray-300">
              Mas mataas ang gold reward kapag sinira ang turret. Pero mas matibay ang Inner at Base Turret (mas mataas ang HP).
              <br /><br />
              <strong className="text-gray-200">Paano laruin:</strong> Prioritize early turret push kung may advantage. Mas worth it ang objective.
            </p>
          </div>

          <div className="border border-green-600/30 rounded-xl p-5">
            <h3 className="font-bold text-green-400 text-lg mb-2">Healing Turtle</h3>
            <p className="text-sm text-gray-300">
              Kapag nakuha ang Turtle, sumasama ito sa minion wave at tumutulong mag-push sa pinakamalakas na lane ng enemy.
              Nagbibigay din ng HP regen sa nearby allies.
              <br /><br />
              <strong className="text-gray-200">Paano laruin:</strong> Mas importante ngayon ang first Turtle. Pwede magbago ang momentum ng lane.
            </p>
          </div>

          <div className="border border-blue-600/30 rounded-xl p-5">
            <h3 className="font-bold text-blue-400 text-lg mb-2">Revealing Wisps</h3>
            <p className="text-sm text-gray-300">
              May periodic wisps na nagre-reveal ng nearby enemies. Mas mahirap mag-gank nang hindi nakikita.
              <br /><br />
              <strong className="text-gray-200">Paano laruin:</strong> Mag-ingat sa bush. Mas valuable ang vision control.
            </p>
          </div>

          <div className="border border-cyan-600/30 rounded-xl p-5">
            <h3 className="font-bold text-cyan-400 text-lg mb-2">Flying Cloud</h3>
            <p className="text-sm text-gray-300">
              May cloud areas na nagbibigay ng movement speed burst kapag tinapak.
              <br /><br />
              <strong className="text-gray-200">Paano laruin:</strong> Gamitin para sa faster rotation, chase, o escape.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-mlbb-gold mb-4">Mabisang Jungle / Lane Rotation (2026 Meta)</h2>
        
        <div className="space-y-6">
          <div className="bg-mlbb-card border border-mlbb-blue/30 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">Early Game (0–5 min)</h3>
            <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
              <li><strong>Jungler:</strong> Start sa buff. Clear fast, tingnan ang mid/EXP gank opportunity bago first Turtle (≈2:00).</li>
              <li><strong>Mid:</strong> Push wave agad, help jungle o protect. Rotate sa Turtle side.</li>
              <li><strong>EXP:</strong> Farm safely. Huwag magpaka-aggressive kung walang vision.</li>
              <li><strong>Gold:</strong> Focus farm. Help sa Turtle kung safe.</li>
              <li><strong>Roam:</strong> Support mid o EXP early, then rotate sa Turtle.</li>
            </ul>
          </div>

          <div className="bg-mlbb-card border border-mlbb-blue/30 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">Mid Game (5–12 min)</h3>
            <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
              <li>Prioritize <strong>Turtle</strong> (lalo na Healing Turtle).</li>
              <li>Pagkatapos ng objective, push ang lane na may advantage o kung Golden Turret.</li>
              <li>Jungler: Clear camps → pickoffs → Lord setup (≈8:00).</li>
            </ul>
          </div>

          <div className="bg-mlbb-card border border-mlbb-blue/30 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">Late Game (12+ min)</h3>
            <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
              <li><strong>Lord</strong> ang pinaka-importante.</li>
              <li>Kung Golden Turret: mas aggressive sa high ground push.</li>
              <li>Protect carry. Frontline initiate wisely.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-mlbb-card border border-mlbb-gold/30 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-mlbb-gold mb-4">Mga Tips sa Tagalog</h2>
        <ul className="space-y-3 text-gray-300 text-sm">
          <li>• <strong>Palaging tingnan ang map effect</strong> bago mag-draft. Kung Healing Turtle, prioritize early objective. Kung Golden Turret, mas aggressive sa tower.</li>
          <li>• <strong>Retribution</strong> mandatory sa jungler.</li>
          <li>• Sa current meta, strong ang <strong>EXP lane sustain fighters</strong> (Masha, Argus, Aulus) at <strong>high ban rate junglers</strong> (Hirara).</li>
          <li>• Counter items: <strong>Blade Armor</strong> vs crit MM, <strong>Athena&apos;s Shield</strong> vs burst mage, <strong>Sea Halberd</strong> vs high sustain.</li>
          <li>• Huwag mag-force fight kung walang vision, lalo na may Revealing Wisps.</li>
        </ul>
      </section>
    </div>
  )
}
