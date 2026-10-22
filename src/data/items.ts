// Full MLBB items helper + catalog — Season 2026

const BASE = 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/logo-equipment';

function toFile(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/['']/g, '')
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_]/g, '') + '.png'
  );
}

const ALIASES: Record<string, string> = {
  'warrior boots': 'warrior_boots.png',
  'tough boots': 'tough_boots.png',
  'arcane boots': 'arcane_boots.png',
  'rapid boots': 'rapid_boots.png',
  'magic shoes': 'magic_shoes.png',
  'swift boots': 'swift_boots.png',
  'demon boots': 'demon_boots.png',
  'bloodlust axe': 'bloodlust_axe.png',
  'hunter strike': 'hunter_strike.png',
  'blade of despair': 'blade_of_despair.png',
  'blade of the heptaseas': 'blade_of_the_heptaseas.png',
  'malefic roar': 'malefic_roar.png',
  immortality: 'immortality.png',
  oracle: 'oracle.png',
  'sea halberd': 'sea_halberd.png',
  'necklace of durance': 'necklace_of_durance.png',
  'blade armor': 'blade_armor.png',
  'antique cuirass': 'antique_cuirass.png',
  "athena's shield": 'athenas_shield.png',
  'athenas shield': 'athenas_shield.png',
  'dominance ice': 'dominance_ice.png',
  'thunder belt': 'thunder_belt.png',
  'cursed helmet': 'cursed_helmet.png',
  'guardian helmet': 'guardian_helmet.png',
  'bramble cuirass': 'bramble_cuirass.png',
  'radiant armor': 'radiant_armor.png',
  'winter crown': 'winter_crown.png',
  'divine glaive': 'divine_glaive.png',
  'holy crystal': 'holy_crystal.png',
  'genius wand': 'genius_wand.png',
  'lightning truncheon': 'lightning_truncheon.png',
  'concentrated energy': 'concentrated_energy.png',
  'fleeting time': 'fleeting_time.png',
  'blood wings': 'blood_wings.png',
  'clock of destiny': 'clock_of_destiny.png',
  'enchanted talisman': 'enchanted_talisman.png',
  'demon hunter sword': 'demon_hunter_sword.png',
  "berserker's fury": 'berserkers_fury.png',
  'berserkers fury': 'berserkers_fury.png',
  "haas's claws": 'haas_claws.png',
  'haas claws': 'haas_claws.png',
  'endless battle': 'endless_battle.png',
  'corrosion scythe': 'corrosion_scythe.png',
  'golden staff': 'golden_staff.png',
  windtalker: 'windtalker.png',
  'rose gold meteor': 'rose_gold_meteor.png',
  "queen's wings": 'queens_wings.png',
  'queens wings': 'queens_wings.png',
  'war axe': 'war_axe.png',
  'brute force breastplate': 'brute_force_breastplate.png',
  'sky piercer': 'sky_piercer.png',
  'twilight armor': 'twilight_armor.png',
  'ice queen wand': 'ice_queen_wand.png',
  'glowing wand': 'glowing_wand.png',
  'calamity reaper': 'calamity_reaper.png',
  'feather of heaven': 'feather_of_heaven.png',
  'scarlet phantom': 'scarlet_phantom.png',
  'flask of the oasis': 'flask_of_the_oasis.png',
  'wind of nature': 'wind_of_nature.png',
};

export function getItemImage(itemName: string): string {
  const key = itemName.toLowerCase().trim();
  const primary = key.split('/')[0].trim();
  if (ALIASES[primary]) return `${BASE}/${ALIASES[primary]}`;
  if (ALIASES[key]) return `${BASE}/${ALIASES[key]}`;
  return `${BASE}/${toFile(primary)}`;
}

export type ItemCategory =
  | 'Boots'
  | 'Attack'
  | 'Magic'
  | 'Defense'
  | 'Movement'
  | 'Roam'
  | 'Jungling';

export interface ItemInfo {
  name: string;
  category: ItemCategory;
  role: string; // short Tagalog / EN tip
  counterTip?: string;
}

/** Full commonly used items catalog for the Items page */
export const allItems: ItemInfo[] = [
  // Boots
  { name: 'Warrior Boots', category: 'Boots', role: 'Physical defense boots — tank/fighter' },
  { name: 'Tough Boots', category: 'Boots', role: 'Magic defense + CC reduction — roam/assassin' },
  { name: 'Arcane Boots', category: 'Boots', role: 'Magic penetration boots — mage' },
  { name: 'Magic Shoes', category: 'Boots', role: 'CDR boots — mage/support' },
  { name: 'Swift Boots', category: 'Boots', role: 'Attack speed boots — marksman' },
  { name: 'Rapid Boots', category: 'Boots', role: 'Movement speed — roam/mobility' },
  { name: 'Demon Boots', category: 'Boots', role: 'Mana regen — mana-hungry heroes' },
  // Attack
  { name: 'Blade of Despair', category: 'Attack', role: 'Pinakamataas na physical damage item' },
  { name: 'Hunter Strike', category: 'Attack', role: 'CDR + damage + movement passive' },
  { name: 'Blade of the Heptaseas', category: 'Attack', role: 'Burst passive — assassin core' },
  { name: 'Malefic Roar', category: 'Attack', role: 'Armor penetration — tank shred' },
  { name: 'War Axe', category: 'Attack', role: 'Hybrid stats + hybrid penetration' },
  { name: 'Bloodlust Axe', category: 'Attack', role: 'Spell vamp — skill-based fighters' },
  { name: "Berserker's Fury", category: 'Attack', role: 'Crit chance + crit damage' },
  { name: 'Scarlet Phantom', category: 'Attack', role: 'Crit + attack speed on crit' },
  { name: 'Windtalker', category: 'Attack', role: 'AS + move speed + magic passive bolts' },
  { name: 'Demon Hunter Sword', category: 'Attack', role: 'Percent HP damage on hit' },
  { name: 'Corrosion Scythe', category: 'Attack', role: 'AS + slow on hit' },
  { name: 'Golden Staff', category: 'Attack', role: 'AS — converts crit to extra hits' },
  { name: 'Sea Halberd', category: 'Attack', role: 'Anti-heal physical + % HP' },
  { name: 'Endless Battle', category: 'Attack', role: 'Hybrid sustain on skill+AA' },
  { name: "Haas's Claws", category: 'Attack', role: 'Lifesteal + low HP lifesteal boost' },
  { name: "Queen's Wings", category: 'Attack', role: 'Spell vamp + damage reduction at low HP' },
  { name: 'Sky Piercer', category: 'Attack', role: 'Execute passive on low HP targets' },
  // Magic
  { name: 'Clock of Destiny', category: 'Magic', role: 'HP + mana scaling over time' },
  { name: 'Lightning Truncheon', category: 'Magic', role: 'Burst magic passive' },
  { name: 'Holy Crystal', category: 'Magic', role: 'Pinakamataas na magic power' },
  { name: 'Divine Glaive', category: 'Magic', role: 'Magic penetration (percent)' },
  { name: 'Genius Wand', category: 'Magic', role: 'Flat magic pen + slow stacks' },
  { name: 'Concentrated Energy', category: 'Magic', role: 'Spell vamp + HP' },
  { name: 'Fleeting Time', category: 'Magic', role: 'Ultimate CDR on kill/assist' },
  { name: 'Blood Wings', category: 'Magic', role: 'Magic power + shield' },
  { name: 'Enchanted Talisman', category: 'Magic', role: 'CDR + mana regen' },
  { name: 'Necklace of Durance', category: 'Magic', role: 'Anti-heal magic' },
  { name: 'Ice Queen Wand', category: 'Magic', role: 'Slow on skill hit' },
  { name: 'Glowing Wand', category: 'Magic', role: 'Percent HP burn' },
  { name: 'Calamity Reaper', category: 'Magic', role: 'Magic + physical hybrid on hit' },
  { name: 'Feather of Heaven', category: 'Magic', role: 'AS + magic on basic attack' },
  // Defense
  { name: 'Antique Cuirass', category: 'Defense', role: 'Physical def + damage reduction', counterTip: 'Laban sa physical fighters/assassins' },
  { name: "Athena's Shield", category: 'Defense', role: 'Magic def + shield', counterTip: 'Laban sa mage burst' },
  { name: 'Dominance Ice', category: 'Defense', role: 'AS slow + anti-crit / mana', counterTip: 'Laban sa marksman at sustain' },
  { name: 'Blade Armor', category: 'Defense', role: 'Reflects crit damage', counterTip: 'Laban sa crit MM' },
  { name: 'Radiant Armor', category: 'Defense', role: 'Magic def vs continuous magic', counterTip: 'Laban sa DoT mages' },
  { name: 'Twilight Armor', category: 'Defense', role: 'Caps high physical burst', counterTip: 'Laban sa assassin burst' },
  { name: 'Immortality', category: 'Defense', role: 'Revive once — must-have late' },
  { name: 'Oracle', category: 'Defense', role: 'Shield/HP regen amplify' },
  { name: 'Thunder Belt', category: 'Defense', role: 'True damage on skill + HP' },
  { name: 'Cursed Helmet', category: 'Defense', role: 'Magic damage aura' },
  { name: 'Guardian Helmet', category: 'Defense', role: 'High HP + out-of-combat regen' },
  { name: 'Bramble Cuirass', category: 'Defense', role: 'Anti-crit + reflect' },
  { name: 'Winter Crown', category: 'Defense', role: 'Freeze self — immunity window' },
  { name: 'Rose Gold Meteor', category: 'Defense', role: 'Physical + magic def shield' },
  { name: 'Brute Force Breastplate', category: 'Defense', role: 'Hybrid def + move speed stacks' },
  // Roam / utility
  { name: 'Flask of the Oasis', category: 'Roam', role: 'Roam item — heal allies' },
  { name: 'Encourage', category: 'Roam', role: 'Roam item — damage buff' },
  { name: 'Conceal', category: 'Roam', role: 'Roam item — stealth team' },
];

export const commonCounterItems = [
  { name: 'Sea Halberd', reason: 'Anti-heal vs high regen / lifesteal heroes' },
  { name: 'Necklace of Durance', reason: 'Anti-heal magic version' },
  { name: 'Antique Cuirass', reason: 'Physical defense + damage reduction vs fighters' },
  { name: "Athena's Shield", reason: 'Magic defense + shield vs mages' },
  { name: 'Dominance Ice', reason: 'Attack speed slow + anti-crit / sustain' },
  { name: 'Blade Armor', reason: 'Reflects crit damage vs marksmen' },
  { name: 'Radiant Armor', reason: 'Magic defense vs continuous magic damage' },
  { name: 'Twilight Armor', reason: 'Caps high burst physical damage' },
];
