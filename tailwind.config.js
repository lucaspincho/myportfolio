/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        background: '#F8FAFC',
        foreground: '#334155',
        heading: '#0A0E14',
        link: '#0A0E14',
        'link-hover': '#38BDF8',
        muted: '#94A3B8',
        'section-hover': '#E2E8F0',
        dark: {
          background: '#0A0E14',
          foreground: '#8294AD',
          heading: '#E0E6ED',
          link: '#E0E6ED',
          'link-hover': '#38BDF8',
          muted: '#64748B',
          'section-hover': '#1E293B',
        }
      },
    },
  },
  plugins: [],
}

