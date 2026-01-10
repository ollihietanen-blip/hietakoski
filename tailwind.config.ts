import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sand-white': '#F9EBD9',
        'warm-rose': '#EBD6D7',
        'deep-teal': '#439093',
        'coral': '#F09B93',
        'soft-yellow': '#E9DD8A',
        'dark-muted': '#1F2B2B',
        'body-text': '#3E4A4A',
        'meta-text': '#6B7C7C',
        // Legacy colors kept for gradual migration - map to new palette
        'slate-blue': '#439093',
        'mist-white': '#F9EBD9',
        'aged-copper': '#439093',
        'light-oak': '#EBD6D7',
        'deep-charcoal': '#1F2B2B',
        'warm-cream': '#F9EBD9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
export default config

