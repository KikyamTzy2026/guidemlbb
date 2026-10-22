import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mlbb: {
          gold: '#C9A227',
          dark: '#0B0E17',
          card: '#141824',
          blue: '#1E3A5F',
        }
      }
    },
  },
  plugins: [],
}
export default config
