# MLBB Guide 2026 — Full Complete

Complete Mobile Legends: Bang Bang guide website. Ready for **Vercel**.

## Features (FULL)

- **132+ heroes** — each with:
  - Portrait image
  - Recommended build (items + emblem + battle spell)
  - Counter heroes + Tagalog explanation
  - Counter items + Tagalog explanation
- **Items catalog** — icons, categories, tips, counter usage
- **Map rotation 2026** — Golden Turret, Healing Turtle, Revealing Wisps, Flying Cloud
- Search & filter by role / lane
- Dark gaming UI (Tailwind)

## Deploy to Vercel

```bash
npm install
npm run build
# or push to GitHub and import on vercel.com
```

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `src/data/heroes.ts` — all heroes full data
- `src/data/items.ts` — items + image helper
- `src/app/heroes` — list + detail pages
- `src/app/items` — items guide
- `src/app/rotation` — map guide

## Note on meta

Builds and counters use **role-based 2026 meta templates** plus known S+/S picks.  
Update specific heroes in `heroes.ts` anytime the patch changes.
