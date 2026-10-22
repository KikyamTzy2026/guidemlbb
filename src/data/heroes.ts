export type Role = 'Tank' | 'Fighter' | 'Assassin' | 'Mage' | 'Marksman' | 'Support';
export type Lane = 'EXP' | 'Jungle' | 'Mid' | 'Gold' | 'Roam';

export interface Hero {
  id: string;
  name: string;
  role: Role[];
  lane: Lane[];
  tier: 'S+' | 'S' | 'A' | 'B' | 'C' | 'D';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image: string;
  builds: {
    name: string;
    items: string[];
    emblem: string;
    battleSpell: string;
  }[];
  counters: {
    hero: string;
    reason: string;
  }[];
  counterItems: {
    item: string;
    reason: string;
  }[];
  notes?: string;
}

// FULL detailed data for ALL heroes — Season 42 / 2026
// Role-based meta builds + counters with Tagalog notes
export const heroes: Hero[] = [
  {
    id: 'aamon',
    name: 'Aamon',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/aamon.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Aamon — 2026 Season meta guide).',
  },
  {
    id: 'akai',
    name: 'Akai',
    role: ['Tank'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/akai.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Akai — 2026 Season meta guide).',
  },
  {
    id: 'aldous',
    name: 'Aldous',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/aldous.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Aldous — 2026 Season meta guide).',
  },
  {
    id: 'alice',
    name: 'Alice',
    role: ['Tank', 'Mage'],
    lane: ['EXP', 'Jungle'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/alice.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Alice — 2026 Season meta guide).',
  },
  {
    id: 'alpha',
    name: 'Alpha',
    role: ['Fighter'],
    lane: ['Jungle', 'EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/alpha.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Alpha — 2026 Season meta guide).',
  },
  {
    id: 'alucard',
    name: 'Alucard',
    role: ['Fighter', 'Assassin'],
    lane: ['Jungle'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/alucard.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Alucard — 2026 Season meta guide).',
  },
  {
    id: 'angela',
    name: 'Angela',
    role: ['Support'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/angela.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Angela — 2026 Season meta guide).',
  },
  {
    id: 'argus',
    name: 'Argus',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'S',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/argus.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Argus — 2026 Season meta guide).',
  },
  {
    id: 'arlott',
    name: 'Arlott',
    role: ['Fighter', 'Assassin'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/arlott.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Arlott — 2026 Season meta guide).',
  },
  {
    id: 'atlas',
    name: 'Atlas',
    role: ['Tank'],
    lane: ['Roam'],
    tier: 'S',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/atlas.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Atlas — 2026 Season meta guide).',
  },
  {
    id: 'aulus',
    name: 'Aulus',
    role: ['Fighter'],
    lane: ['Jungle', 'EXP'],
    tier: 'S',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/aulus.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Aulus — 2026 Season meta guide).',
  },
  {
    id: 'aurora',
    name: 'Aurora',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/aurora.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Aurora — 2026 Season meta guide).',
  },
  {
    id: 'badang',
    name: 'Badang',
    role: ['Fighter'],
    lane: ['Roam', 'EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/badang.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Badang — 2026 Season meta guide).',
  },
  {
    id: 'balmond',
    name: 'Balmond',
    role: ['Fighter'],
    lane: ['Jungle', 'EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/balmond.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Balmond — 2026 Season meta guide).',
  },
  {
    id: 'bane',
    name: 'Bane',
    role: ['Fighter', 'Mage'],
    lane: ['Jungle', 'EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/bane.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Bane — 2026 Season meta guide).',
  },
  {
    id: 'barats',
    name: 'Barats',
    role: ['Tank', 'Fighter'],
    lane: ['EXP', 'Jungle'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/barats.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Barats — 2026 Season meta guide).',
  },
  {
    id: 'baxia',
    name: 'Baxia',
    role: ['Tank'],
    lane: ['Roam', 'Jungle'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/baxia.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Baxia — 2026 Season meta guide).',
  },
  {
    id: 'beatrix',
    name: 'Beatrix',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'S',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/beatrix.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Beatrix — 2026 Season meta guide).',
  },
  {
    id: 'belerick',
    name: 'Belerick',
    role: ['Tank'],
    lane: ['Roam'],
    tier: 'S',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/belerick.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Belerick — 2026 Season meta guide).',
  },
  {
    id: 'benedetta',
    name: 'Benedetta',
    role: ['Assassin', 'Fighter'],
    lane: ['EXP'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/benedetta.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Benedetta — 2026 Season meta guide).',
  },
  {
    id: 'brody',
    name: 'Brody',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/brody.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Brody — 2026 Season meta guide).',
  },
  {
    id: 'bruno',
    name: 'Bruno',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/bruno.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Bruno — 2026 Season meta guide).',
  },
  {
    id: 'carmilla',
    name: 'Carmilla',
    role: ['Support', 'Tank'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/carmilla.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Carmilla — 2026 Season meta guide).',
  },
  {
    id: 'cecilion',
    name: 'Cecilion',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/cecilion.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Cecilion — 2026 Season meta guide).',
  },
  {
    id: 'chip',
    name: 'Chip',
    role: ['Support'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/chip.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Chip — 2026 Season meta guide).',
  },
  {
    id: 'chou',
    name: 'Chou',
    role: ['Fighter'],
    lane: ['EXP', 'Roam'],
    tier: 'S',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/chou.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Chou — 2026 Season meta guide).',
  },
  {
    id: 'cici',
    name: 'Cici',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/cici.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Cici — 2026 Season meta guide).',
  },
  {
    id: 'claude',
    name: 'Claude',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'S',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/claude.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Claude — 2026 Season meta guide).',
  },
  {
    id: 'clint',
    name: 'Clint',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/clint.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Clint — 2026 Season meta guide).',
  },
  {
    id: 'cyclops',
    name: 'Cyclops',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/cyclops.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Cyclops — 2026 Season meta guide).',
  },
  {
    id: 'diggie',
    name: 'Diggie',
    role: ['Support'],
    lane: ['Roam'],
    tier: 'S',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/diggie.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Diggie — 2026 Season meta guide).',
  },
  {
    id: 'dyrroth',
    name: 'Dyrroth',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/dyrroth.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Dyrroth — 2026 Season meta guide).',
  },
  {
    id: 'edith',
    name: 'Edith',
    role: ['Tank', 'Marksman'],
    lane: ['Roam', 'Gold'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/edith.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Edith — 2026 Season meta guide).',
  },
  {
    id: 'esmeralda',
    name: 'Esmeralda',
    role: ['Mage', 'Tank'],
    lane: ['Mid', 'EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/esmeralda.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Esmeralda — 2026 Season meta guide).',
  },
  {
    id: 'estes',
    name: 'Estes',
    role: ['Support'],
    lane: ['Roam'],
    tier: 'S',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/estes.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Estes — 2026 Season meta guide).',
  },
  {
    id: 'eudora',
    name: 'Eudora',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/eudora.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Eudora — 2026 Season meta guide).',
  },
  {
    id: 'fanny',
    name: 'Fanny',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'S',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/fanny.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Fanny — 2026 Season meta guide).',
  },
  {
    id: 'faramis',
    name: 'Faramis',
    role: ['Support', 'Mage'],
    lane: ['Roam', 'Mid'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/faramis.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Faramis — 2026 Season meta guide).',
  },
  {
    id: 'floryn',
    name: 'Floryn',
    role: ['Support'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/floryn.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Floryn — 2026 Season meta guide).',
  },
  {
    id: 'franco',
    name: 'Franco',
    role: ['Tank'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/franco.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Franco — 2026 Season meta guide).',
  },
  {
    id: 'fredrinn',
    name: 'Fredrinn',
    role: ['Tank', 'Fighter'],
    lane: ['Jungle'],
    tier: 'S',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/fredrinn.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Fredrinn — 2026 Season meta guide).',
  },
  {
    id: 'freya',
    name: 'Freya',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'S',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/freya.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Freya — 2026 Season meta guide).',
  },
  {
    id: 'gatotkaca',
    name: 'Gatotkaca',
    role: ['Tank', 'Fighter'],
    lane: ['Roam', 'EXP'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/gatotkaca.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Gatotkaca — 2026 Season meta guide).',
  },
  {
    id: 'gloo',
    name: 'Gloo',
    role: ['Tank'],
    lane: ['Roam', 'EXP'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/gloo.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Gloo — 2026 Season meta guide).',
  },
  {
    id: 'gord',
    name: 'Gord',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/gord.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Gord — 2026 Season meta guide).',
  },
  {
    id: 'granger',
    name: 'Granger',
    role: ['Marksman'],
    lane: ['Gold', 'Jungle'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/granger.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Granger — 2026 Season meta guide).',
  },
  {
    id: 'grock',
    name: 'Grock',
    role: ['Tank'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/grock.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Grock — 2026 Season meta guide).',
  },
  {
    id: 'guinevere',
    name: 'Guinevere',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/guinevere.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Guinevere — 2026 Season meta guide).',
  },
  {
    id: 'gusion',
    name: 'Gusion',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'S',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/gusion.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Gusion — 2026 Season meta guide).',
  },
  {
    id: 'hanabi',
    name: 'Hanabi',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/hanabi.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Hanabi — 2026 Season meta guide).',
  },
  {
    id: 'hanzo',
    name: 'Hanzo',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/hanzo.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Hanzo — 2026 Season meta guide).',
  },
  {
    id: 'harith',
    name: 'Harith',
    role: ['Mage'],
    lane: ['Mid', 'Gold'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/harith.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Harith — 2026 Season meta guide).',
  },
  {
    id: 'harley',
    name: 'Harley',
    role: ['Mage', 'Assassin'],
    lane: ['Jungle', 'Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/harley.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Harley — 2026 Season meta guide).',
  },
  {
    id: 'hayabusa',
    name: 'Hayabusa',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/hayabusa.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Hayabusa — 2026 Season meta guide).',
  },
  {
    id: 'helcurt',
    name: 'Helcurt',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/helcurt.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Helcurt — 2026 Season meta guide).',
  },
  {
    id: 'hilda',
    name: 'Hilda',
    role: ['Fighter', 'Tank'],
    lane: ['Roam', 'EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/hilda.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Hilda — 2026 Season meta guide).',
  },
  {
    id: 'hirara',
    name: 'Hirara',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'S+',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/hirara.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Hirara — 2026 Season meta guide).',
  },
  {
    id: 'hylos',
    name: 'Hylos',
    role: ['Tank'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/hylos.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Hylos — 2026 Season meta guide).',
  },
  {
    id: 'irithel',
    name: 'Irithel',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/irithel.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Irithel — 2026 Season meta guide).',
  },
  {
    id: 'ixia',
    name: 'Ixia',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/ixia.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Ixia — 2026 Season meta guide).',
  },
  {
    id: 'jawhead',
    name: 'Jawhead',
    role: ['Fighter'],
    lane: ['EXP', 'Roam'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/jawhead.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Jawhead — 2026 Season meta guide).',
  },
  {
    id: 'johnson',
    name: 'Johnson',
    role: ['Tank'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/johnson.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Johnson — 2026 Season meta guide).',
  },
  {
    id: 'joy',
    name: 'Joy',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/joy.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Joy — 2026 Season meta guide).',
  },
  {
    id: 'julian',
    name: 'Julian',
    role: ['Assassin', 'Mage'],
    lane: ['Jungle', 'EXP'],
    tier: 'S',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/julian.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Julian — 2026 Season meta guide).',
  },
  {
    id: 'kadita',
    name: 'Kadita',
    role: ['Mage', 'Assassin'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/kadita.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Kadita — 2026 Season meta guide).',
  },
  {
    id: 'kagura',
    name: 'Kagura',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'S',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/kagura.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Kagura — 2026 Season meta guide).',
  },
  {
    id: 'kaja',
    name: 'Kaja',
    role: ['Support', 'Assassin'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/kaja.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Kaja — 2026 Season meta guide).',
  },
  {
    id: 'kalea',
    name: 'Kalea',
    role: ['Support', 'Fighter'],
    lane: ['Roam', 'EXP'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/kalea.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Kalea — 2026 Season meta guide).',
  },
  {
    id: 'karina',
    name: 'Karina',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/karina.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Karina — 2026 Season meta guide).',
  },
  {
    id: 'karrie',
    name: 'Karrie',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'S',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/karrie.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Karrie — 2026 Season meta guide).',
  },
  {
    id: 'khaleed',
    name: 'Khaleed',
    role: ['Fighter'],
    lane: ['Roam', 'EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/khaleed.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Khaleed — 2026 Season meta guide).',
  },
  {
    id: 'khufra',
    name: 'Khufra',
    role: ['Tank'],
    lane: ['Roam'],
    tier: 'S',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/khufra.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Khufra — 2026 Season meta guide).',
  },
  {
    id: 'kimmy',
    name: 'Kimmy',
    role: ['Marksman', 'Mage'],
    lane: ['Gold', 'Mid'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/kimmy.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Kimmy — 2026 Season meta guide).',
  },
  {
    id: 'lancelot',
    name: 'Lancelot',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'S',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lancelot.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Lancelot — 2026 Season meta guide).',
  },
  {
    id: 'lapu_lapu',
    name: 'Lapu-Lapu',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lapu-lapu.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Lapu-Lapu — 2026 Season meta guide).',
  },
  {
    id: 'layla',
    name: 'Layla',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/layla.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Layla — 2026 Season meta guide).',
  },
  {
    id: 'leomord',
    name: 'Leomord',
    role: ['Fighter'],
    lane: ['Jungle'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/leomord.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Leomord — 2026 Season meta guide).',
  },
  {
    id: 'lesley',
    name: 'Lesley',
    role: ['Marksman', 'Assassin'],
    lane: ['Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lesley.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Lesley — 2026 Season meta guide).',
  },
  {
    id: 'ling',
    name: 'Ling',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/ling.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Ling — 2026 Season meta guide).',
  },
  {
    id: 'lolita',
    name: 'Lolita',
    role: ['Support', 'Tank'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lolita.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Lolita — 2026 Season meta guide).',
  },
  {
    id: 'lukas',
    name: 'Lukas',
    role: ['Fighter'],
    lane: ['EXP', 'Jungle'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lukas.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Lukas — 2026 Season meta guide).',
  },
  {
    id: 'lunox',
    name: 'Lunox',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lunox.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Lunox — 2026 Season meta guide).',
  },
  {
    id: 'luo_yi',
    name: 'Luo Yi',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/luo_yi.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Luo Yi — 2026 Season meta guide).',
  },
  {
    id: 'lylia',
    name: 'Lylia',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lylia.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Lylia — 2026 Season meta guide).',
  },
  {
    id: 'marcel',
    name: 'Marcel',
    role: ['Support'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/marcel.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Marcel — 2026 Season meta guide).',
  },
  {
    id: 'martis',
    name: 'Martis',
    role: ['Fighter'],
    lane: ['EXP', 'Jungle'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/martis.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Martis — 2026 Season meta guide).',
  },
  {
    id: 'masha',
    name: 'Masha',
    role: ['Fighter', 'Tank'],
    lane: ['EXP'],
    tier: 'S+',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/masha.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Masha — 2026 Season meta guide).',
  },
  {
    id: 'mathilda',
    name: 'Mathilda',
    role: ['Support', 'Assassin'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/mathilda.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Mathilda — 2026 Season meta guide).',
  },
  {
    id: 'melissa',
    name: 'Melissa',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/melissa.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Melissa — 2026 Season meta guide).',
  },
  {
    id: 'minsitthar',
    name: 'Minsitthar',
    role: ['Fighter'],
    lane: ['EXP', 'Roam'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/minsitthar.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Minsitthar — 2026 Season meta guide).',
  },
  {
    id: 'minotaur',
    name: 'Minotaur',
    role: ['Tank', 'Support'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/minotaur.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Minotaur — 2026 Season meta guide).',
  },
  {
    id: 'miya',
    name: 'Miya',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/miya.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Miya — 2026 Season meta guide).',
  },
  {
    id: 'moskov',
    name: 'Moskov',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/moskov.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Moskov — 2026 Season meta guide).',
  },
  {
    id: 'nana',
    name: 'Nana',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/nana.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Nana — 2026 Season meta guide).',
  },
  {
    id: 'natalia',
    name: 'Natalia',
    role: ['Assassin'],
    lane: ['Jungle', 'Roam'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/natalia.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Natalia — 2026 Season meta guide).',
  },
  {
    id: 'natan',
    name: 'Natan',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/natan.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Natan — 2026 Season meta guide).',
  },
  {
    id: 'nolan',
    name: 'Nolan',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/nolan.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Nolan — 2026 Season meta guide).',
  },
  {
    id: 'novaria',
    name: 'Novaria',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/novaria.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Novaria — 2026 Season meta guide).',
  },
  {
    id: 'obsidia',
    name: 'Obsidia',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'S+',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/obsidia.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Obsidia — 2026 Season meta guide).',
  },
  {
    id: 'odette',
    name: 'Odette',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/odette.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Odette — 2026 Season meta guide).',
  },
  {
    id: 'paquito',
    name: 'Paquito',
    role: ['Fighter', 'Assassin'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/paquito.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Paquito — 2026 Season meta guide).',
  },
  {
    id: 'pharsa',
    name: 'Pharsa',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/pharsa.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Pharsa — 2026 Season meta guide).',
  },
  {
    id: 'phoveus',
    name: 'Phoveus',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/phoveus.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Phoveus — 2026 Season meta guide).',
  },
  {
    id: 'popol_and_kupa',
    name: 'Popol and Kupa',
    role: ['Marksman'],
    lane: ['Jungle', 'Gold'],
    tier: 'A',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/popol_and_kupa.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Popol and Kupa — 2026 Season meta guide).',
  },
  {
    id: 'rafaela',
    name: 'Rafaela',
    role: ['Support'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/rafaela.png',
    builds: [
      {
        name: 'Support Core',
        items: ['Tough Boots', 'Oracle', 'Dominance Ice', 'Immortality', 'Athena\'s Shield', 'Antique Cuirass'],
        emblem: 'Support Emblem - Vitality / Favor',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Burst assassin na kayang i-pick ang support bago makapag-peel.' },
      { hero: 'Valir', reason: 'Zone at pushback mahirap i-positionan ng support.' },
      { hero: 'Natalia', reason: 'Gank from invisibility.' }
    ],
    counterItems: [
      { item: 'Sea Halberd', reason: 'Anti-heal laban sa healing supports (Estes, Rafaela).' },
      { item: 'Necklace of Durance', reason: 'Anti-heal magic version.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic support/damage.' }
    ],
    notes: 'Support role — vision, peel, at teamfight utility. Huwag maging primary damage. (Rafaela — 2026 Season meta guide).',
  },
  {
    id: 'roger',
    name: 'Roger',
    role: ['Fighter', 'Marksman'],
    lane: ['Jungle'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/roger.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Roger — 2026 Season meta guide).',
  },
  {
    id: 'ruby',
    name: 'Ruby',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/ruby.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Ruby — 2026 Season meta guide).',
  },
  {
    id: 'saber',
    name: 'Saber',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'S',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/saber.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Saber — 2026 Season meta guide).',
  },
  {
    id: 'selena',
    name: 'Selena',
    role: ['Assassin', 'Mage'],
    lane: ['Roam', 'Jungle'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/selena.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Selena — 2026 Season meta guide).',
  },
  {
    id: 'silvanna',
    name: 'Silvanna',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/silvanna.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Silvanna — 2026 Season meta guide).',
  },
  {
    id: 'sora',
    name: 'Sora',
    role: ['Fighter', 'Assassin'],
    lane: ['EXP'],
    tier: 'S+',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/sora.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Sora — 2026 Season meta guide).',
  },
  {
    id: 'sun',
    name: 'Sun',
    role: ['Fighter'],
    lane: ['EXP', 'Jungle'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/sun.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Sun — 2026 Season meta guide).',
  },
  {
    id: 'suyou',
    name: 'Suyou',
    role: ['Assassin'],
    lane: ['Jungle'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/suyou.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Suyou — 2026 Season meta guide).',
  },
  {
    id: 'terizla',
    name: 'Terizla',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/terizla.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Terizla — 2026 Season meta guide).',
  },
  {
    id: 'thamuz',
    name: 'Thamuz',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/thamuz.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Thamuz — 2026 Season meta guide).',
  },
  {
    id: 'tigreal',
    name: 'Tigreal',
    role: ['Tank'],
    lane: ['Roam'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/tigreal.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Tigreal — 2026 Season meta guide).',
  },
  {
    id: 'uranus',
    name: 'Uranus',
    role: ['Tank'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/uranus.png',
    builds: [
      {
        name: 'Tank Core',
        items: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Oracle'],
        emblem: 'Tank Emblem - Tenacity / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Karrie', reason: 'True damage at percent HP damage ni Karrie perfect laban sa tanky heroes.' },
      { hero: 'Claude', reason: 'High attack speed at DPS na kayang i-melt ang tank late game.' },
      { hero: 'Valir', reason: 'Zone control at slow mahirap i-engage ng pure tank.' }
    ],
    counterItems: [
      { item: 'Malefic Roar', reason: 'Armor penetration para basagin ang tank items.' },
      { item: 'Demon Hunter Sword', reason: 'Percent HP damage laban sa high HP tanks.' },
      { item: 'Divine Glaive', reason: 'Magic penetration kung magic ang damage dealer.' }
    ],
    notes: 'Tank role — focus sa initiation, peel, at objective control. Mag-build ng defense base sa enemy damage type. (Uranus — 2026 Season meta guide).',
  },
  {
    id: 'vale',
    name: 'Vale',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/vale.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Vale — 2026 Season meta guide).',
  },
  {
    id: 'valentina',
    name: 'Valentina',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/valentina.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Valentina — 2026 Season meta guide).',
  },
  {
    id: 'valir',
    name: 'Valir',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'S',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/valir.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Valir — 2026 Season meta guide).',
  },
  {
    id: 'vexana',
    name: 'Vexana',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/vexana.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Vexana — 2026 Season meta guide).',
  },
  {
    id: 'wanwan',
    name: 'Wanwan',
    role: ['Marksman'],
    lane: ['Gold'],
    tier: 'S',
    difficulty: 'Easy',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/wanwan.png',
    builds: [
      {
        name: 'Marksman Core',
        items: ['Swift Boots', 'Berserker\'s Fury', 'Windtalker', 'Scarlet Phantom', 'Immortality', 'Malefic Roar'],
        emblem: 'Marksman Emblem - Weakness Finder',
        battleSpell: 'Inspire / Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Ultimate ni Saber instant kill sa most marksmen.' },
      { hero: 'Karina', reason: 'High magic burst assassin na kayang i-delete ang MM.' },
      { hero: 'Natalia', reason: 'Invisibility + burst perfect laban sa backline.' }
    ],
    counterItems: [
      { item: 'Blade Armor', reason: 'Reflects crit at high attack speed damage pabalik.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow.' },
      { item: 'Immortality', reason: 'Second chance laban sa burst focus.' }
    ],
    notes: 'Marksman role — late game carry. Kailangan ng protection mula sa support/tank. (Wanwan — 2026 Season meta guide).',
  },
  {
    id: 'xborg',
    name: 'X.Borg',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/xborg.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (X.Borg — 2026 Season meta guide).',
  },
  {
    id: 'xavier',
    name: 'Xavier',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'S',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/xavier.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Xavier — 2026 Season meta guide).',
  },
  {
    id: 'yi_sun_shin',
    name: 'Yi Sun-shin',
    role: ['Assassin', 'Marksman'],
    lane: ['Jungle'],
    tier: 'A',
    difficulty: 'Hard',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/yi_sun-shin.png',
    builds: [
      {
        name: 'Burst Assassin',
        items: ['Tough Boots', 'Blade of the Heptaseas', 'Hunter Strike', 'Blade of Despair', 'Malefic Roar', 'Immortality'],
        emblem: 'Assassin Emblem - Killing Spree / Lethal Ignition',
        battleSpell: 'Retribution / Execute',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at knock-up perfect laban sa dash-heavy assassins.' },
      { hero: 'Saber', reason: 'Mas mabilis na lock-down ultimate.' },
      { hero: 'Diggie', reason: 'Ultimate ni Diggie nagre-remove ng CC at suppress.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense laban sa physical assassins.' },
      { item: 'Athena\'s Shield', reason: 'Magic defense kung magic assassin (Gusion, etc.).' },
      { item: 'Twilight Armor', reason: 'Cap sa high single-target burst damage.' }
    ],
    notes: 'Assassin role — targetin ang backline. Timing ng gank at ultimate ang pinakamahalaga. (Yi Sun-shin — 2026 Season meta guide).',
  },
  {
    id: 'yin',
    name: 'Yin',
    role: ['Fighter', 'Assassin'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/yin.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Yin — 2026 Season meta guide).',
  },
  {
    id: 'yu_zhong',
    name: 'Yu Zhong',
    role: ['Fighter'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/yu_zhong.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Yu Zhong — 2026 Season meta guide).',
  },
  {
    id: 'yve',
    name: 'Yve',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'S',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/yve.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Yve — 2026 Season meta guide).',
  },
  {
    id: 'zhask',
    name: 'Zhask',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/zhask.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Zhask — 2026 Season meta guide).',
  },
  {
    id: 'zhuxin',
    name: 'Zhuxin',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/zhuxin.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Zhuxin — 2026 Season meta guide).',
  },
  {
    id: 'zilong',
    name: 'Zilong',
    role: ['Fighter', 'Assassin'],
    lane: ['EXP'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/zilong.png',
    builds: [
      {
        name: 'Fighter Core',
        items: ['Warrior Boots', 'War Axe', 'Hunter Strike', 'Blade of Despair', 'Immortality', 'Queen\'s Wings'],
        emblem: 'Fighter Emblem - Festival of Blood / Brave Smite',
        battleSpell: 'Flicker / Aegis',
      },
    ],
    counters: [
      { hero: 'Khufra', reason: 'Ball form at CC ni Khufra kayang i-interrupt ang engage ng fighter.' },
      { hero: 'Minsitthar', reason: 'Ultimate niya nagre-restrict ng dash, kaya mahirap makatakas.' },
      { hero: 'Karrie', reason: 'True damage shredder laban sa semi-tank fighters.' }
    ],
    counterItems: [
      { item: 'Antique Cuirass', reason: 'Physical defense + damage reduction laban sa fighters.' },
      { item: 'Dominance Ice', reason: 'Attack speed slow at anti-sustain.' },
      { item: 'Sea Halberd', reason: 'Anti-heal kung may lifesteal/regen ang fighter.' }
    ],
    notes: 'Fighter role — flexible sa EXP o Jungle. Balance ng damage at survivability ang key. (Zilong — 2026 Season meta guide).',
  },
  {
    id: 'zetian',
    name: 'Zetian',
    role: ['Mage'],
    lane: ['Mid'],
    tier: 'B',
    difficulty: 'Medium',
    image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/zetian.png',
    builds: [
      {
        name: 'Mage Core',
        items: ['Magic Shoes', 'Clock of Destiny', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Immortality'],
        emblem: 'Mage Emblem - Magic Worship / Impure Rage',
        battleSpell: 'Flicker',
      },
    ],
    counters: [
      { hero: 'Saber', reason: 'Instant ultimate lock-down sa squishy mage.' },
      { hero: 'Lancelot', reason: 'High mobility at immune frames kayang i-dive ang mage.' },
      { hero: 'Natalia', reason: 'Invisible gank pressure mula sa fog of war.' }
    ],
    counterItems: [
      { item: 'Athena\'s Shield', reason: 'Magic defense + shield laban sa burst mages.' },
      { item: 'Radiant Armor', reason: 'Effective laban sa continuous magic damage.' },
      { item: 'Winter Crown', reason: 'Immunity window laban sa combo.' }
    ],
    notes: 'Mage role — zone control at burst. Iwasan ang dive; manatili sa safe position. (Zetian — 2026 Season meta guide).',
  }
];

export const allHeroNames: { name: string; role: string; lane: string; image: string }[] = [
  { name: 'Aamon', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/aamon.png' },
  { name: 'Akai', role: 'Tank', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/akai.png' },
  { name: 'Aldous', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/aldous.png' },
  { name: 'Alice', role: 'Tank/Mage', lane: 'EXP/Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/alice.png' },
  { name: 'Alpha', role: 'Fighter', lane: 'Jungle/EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/alpha.png' },
  { name: 'Alucard', role: 'Fighter/Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/alucard.png' },
  { name: 'Angela', role: 'Support', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/angela.png' },
  { name: 'Argus', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/argus.png' },
  { name: 'Arlott', role: 'Fighter/Assassin', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/arlott.png' },
  { name: 'Atlas', role: 'Tank', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/atlas.png' },
  { name: 'Aulus', role: 'Fighter', lane: 'Jungle/EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/aulus.png' },
  { name: 'Aurora', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/aurora.png' },
  { name: 'Badang', role: 'Fighter', lane: 'Roam/EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/badang.png' },
  { name: 'Balmond', role: 'Fighter', lane: 'Jungle/EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/balmond.png' },
  { name: 'Bane', role: 'Fighter/Mage', lane: 'Jungle/EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/bane.png' },
  { name: 'Barats', role: 'Tank/Fighter', lane: 'EXP/Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/barats.png' },
  { name: 'Baxia', role: 'Tank', lane: 'Roam/Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/baxia.png' },
  { name: 'Beatrix', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/beatrix.png' },
  { name: 'Belerick', role: 'Tank', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/belerick.png' },
  { name: 'Benedetta', role: 'Assassin/Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/benedetta.png' },
  { name: 'Brody', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/brody.png' },
  { name: 'Bruno', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/bruno.png' },
  { name: 'Carmilla', role: 'Support/Tank', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/carmilla.png' },
  { name: 'Cecilion', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/cecilion.png' },
  { name: 'Chip', role: 'Support', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/chip.png' },
  { name: 'Chou', role: 'Fighter', lane: 'EXP/Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/chou.png' },
  { name: 'Cici', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/cici.png' },
  { name: 'Claude', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/claude.png' },
  { name: 'Clint', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/clint.png' },
  { name: 'Cyclops', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/cyclops.png' },
  { name: 'Diggie', role: 'Support', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/diggie.png' },
  { name: 'Dyrroth', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/dyrroth.png' },
  { name: 'Edith', role: 'Tank/Marksman', lane: 'Roam/Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/edith.png' },
  { name: 'Esmeralda', role: 'Mage/Tank', lane: 'Mid/EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/esmeralda.png' },
  { name: 'Estes', role: 'Support', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/estes.png' },
  { name: 'Eudora', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/eudora.png' },
  { name: 'Fanny', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/fanny.png' },
  { name: 'Faramis', role: 'Support/Mage', lane: 'Roam/Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/faramis.png' },
  { name: 'Floryn', role: 'Support', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/floryn.png' },
  { name: 'Franco', role: 'Tank', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/franco.png' },
  { name: 'Fredrinn', role: 'Tank/Fighter', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/fredrinn.png' },
  { name: 'Freya', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/freya.png' },
  { name: 'Gatotkaca', role: 'Tank/Fighter', lane: 'Roam/EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/gatotkaca.png' },
  { name: 'Gloo', role: 'Tank', lane: 'Roam/EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/gloo.png' },
  { name: 'Gord', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/gord.png' },
  { name: 'Granger', role: 'Marksman', lane: 'Gold/Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/granger.png' },
  { name: 'Grock', role: 'Tank', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/grock.png' },
  { name: 'Guinevere', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/guinevere.png' },
  { name: 'Gusion', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/gusion.png' },
  { name: 'Hanabi', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/hanabi.png' },
  { name: 'Hanzo', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/hanzo.png' },
  { name: 'Harith', role: 'Mage', lane: 'Mid/Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/harith.png' },
  { name: 'Harley', role: 'Mage/Assassin', lane: 'Jungle/Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/harley.png' },
  { name: 'Hayabusa', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/hayabusa.png' },
  { name: 'Helcurt', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/helcurt.png' },
  { name: 'Hilda', role: 'Fighter/Tank', lane: 'Roam/EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/hilda.png' },
  { name: 'Hirara', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/hirara.png' },
  { name: 'Hylos', role: 'Tank', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/hylos.png' },
  { name: 'Irithel', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/irithel.png' },
  { name: 'Ixia', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/ixia.png' },
  { name: 'Jawhead', role: 'Fighter', lane: 'EXP/Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/jawhead.png' },
  { name: 'Johnson', role: 'Tank', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/johnson.png' },
  { name: 'Joy', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/joy.png' },
  { name: 'Julian', role: 'Assassin/Mage', lane: 'Jungle/EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/julian.png' },
  { name: 'Kadita', role: 'Mage/Assassin', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/kadita.png' },
  { name: 'Kagura', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/kagura.png' },
  { name: 'Kaja', role: 'Support/Assassin', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/kaja.png' },
  { name: 'Kalea', role: 'Support/Fighter', lane: 'Roam/EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/kalea.png' },
  { name: 'Karina', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/karina.png' },
  { name: 'Karrie', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/karrie.png' },
  { name: 'Khaleed', role: 'Fighter', lane: 'Roam/EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/khaleed.png' },
  { name: 'Khufra', role: 'Tank', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/khufra.png' },
  { name: 'Kimmy', role: 'Marksman/Mage', lane: 'Gold/Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/kimmy.png' },
  { name: 'Lancelot', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lancelot.png' },
  { name: 'Lapu-Lapu', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lapu-lapu.png' },
  { name: 'Layla', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/layla.png' },
  { name: 'Leomord', role: 'Fighter', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/leomord.png' },
  { name: 'Lesley', role: 'Marksman/Assassin', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lesley.png' },
  { name: 'Ling', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/ling.png' },
  { name: 'Lolita', role: 'Support/Tank', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lolita.png' },
  { name: 'Lukas', role: 'Fighter', lane: 'EXP/Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lukas.png' },
  { name: 'Lunox', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lunox.png' },
  { name: 'Luo Yi', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/luo_yi.png' },
  { name: 'Lylia', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/lylia.png' },
  { name: 'Marcel', role: 'Support', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/marcel.png' },
  { name: 'Martis', role: 'Fighter', lane: 'EXP/Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/martis.png' },
  { name: 'Masha', role: 'Fighter/Tank', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/masha.png' },
  { name: 'Mathilda', role: 'Support/Assassin', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/mathilda.png' },
  { name: 'Melissa', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/melissa.png' },
  { name: 'Minsitthar', role: 'Fighter', lane: 'EXP/Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/minsitthar.png' },
  { name: 'Minotaur', role: 'Tank/Support', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/minotaur.png' },
  { name: 'Miya', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/miya.png' },
  { name: 'Moskov', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/moskov.png' },
  { name: 'Nana', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/nana.png' },
  { name: 'Natalia', role: 'Assassin', lane: 'Jungle/Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/natalia.png' },
  { name: 'Natan', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/natan.png' },
  { name: 'Nolan', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/nolan.png' },
  { name: 'Novaria', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/novaria.png' },
  { name: 'Obsidia', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/obsidia.png' },
  { name: 'Odette', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/odette.png' },
  { name: 'Paquito', role: 'Fighter/Assassin', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/paquito.png' },
  { name: 'Pharsa', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/pharsa.png' },
  { name: 'Phoveus', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/phoveus.png' },
  { name: 'Popol and Kupa', role: 'Marksman', lane: 'Jungle/Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/popol_and_kupa.png' },
  { name: 'Rafaela', role: 'Support', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/rafaela.png' },
  { name: 'Roger', role: 'Fighter/Marksman', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/roger.png' },
  { name: 'Ruby', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/ruby.png' },
  { name: 'Saber', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/saber.png' },
  { name: 'Selena', role: 'Assassin/Mage', lane: 'Roam/Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/selena.png' },
  { name: 'Silvanna', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/silvanna.png' },
  { name: 'Sora', role: 'Fighter/Assassin', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/sora.png' },
  { name: 'Sun', role: 'Fighter', lane: 'EXP/Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/sun.png' },
  { name: 'Suyou', role: 'Assassin', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/suyou.png' },
  { name: 'Terizla', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/terizla.png' },
  { name: 'Thamuz', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/thamuz.png' },
  { name: 'Tigreal', role: 'Tank', lane: 'Roam', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/tigreal.png' },
  { name: 'Uranus', role: 'Tank', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/uranus.png' },
  { name: 'Vale', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/vale.png' },
  { name: 'Valentina', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/valentina.png' },
  { name: 'Valir', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/valir.png' },
  { name: 'Vexana', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/vexana.png' },
  { name: 'Wanwan', role: 'Marksman', lane: 'Gold', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/wanwan.png' },
  { name: 'X.Borg', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/xborg.png' },
  { name: 'Xavier', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/xavier.png' },
  { name: 'Yi Sun-shin', role: 'Assassin/Marksman', lane: 'Jungle', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/yi_sun-shin.png' },
  { name: 'Yin', role: 'Fighter/Assassin', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/yin.png' },
  { name: 'Yu Zhong', role: 'Fighter', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/yu_zhong.png' },
  { name: 'Yve', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/yve.png' },
  { name: 'Zhask', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/zhask.png' },
  { name: 'Zhuxin', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/zhuxin.png' },
  { name: 'Zilong', role: 'Fighter/Assassin', lane: 'EXP', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/zilong.png' },
  { name: 'Zetian', role: 'Mage', lane: 'Mid', image: 'https://raw.githubusercontent.com/Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang/master/images-hero/zetian.png' }
];
