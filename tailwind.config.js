/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dharohar: {
          darkest: '#07040d',
          dark: '#0e081e',
          purple: '#180e35',
          navy: '#161643',
          card: 'rgba(28, 17, 60, 0.75)',
          violet: '#4c1d95',
          glow: '#7c3aed',
          gold: '#f6c344',
          'gold-light': '#ffe885',
          'gold-dark': '#c8961d',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        hindi: ['"Rozha One"', '"Yatra One"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fadeInDown 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'wave-drift-1': 'waveDrift 18s ease-in-out infinite alternate',
        'wave-drift-2': 'waveDriftRev 24s ease-in-out infinite alternate',
        'wave-drift-3': 'waveDrift 30s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseGlow 4s ease-in-out infinite',
        'gold-shimmer': 'shimmer 6s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        waveDrift: {
          '0%': { transform: 'translateX(0) scaleY(1)' },
          '50%': { transform: 'translateX(-3%) scaleY(1.08)' },
          '100%': { transform: 'translateX(-6%) scaleY(0.96)' },
        },
        waveDriftRev: {
          '0%': { transform: 'translateX(-6%) scaleY(0.96)' },
          '50%': { transform: 'translateX(-2%) scaleY(1.06)' },
          '100%': { transform: 'translateX(0) scaleY(1)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
