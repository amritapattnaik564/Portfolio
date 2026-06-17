/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#050816',
        cardBg: '#0f172a',
        primary: '#6366f1',
        secondary: '#a855f7',
        accent: '#ec4899',
        textPrimary: '#ffffff',
        textSecondary: '#94a3b8',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(99, 102, 241, 0.4)',
        'glow-secondary': '0 0 20px rgba(168, 85, 247, 0.4)',
        'glow-accent': '0 0 20px rgba(236, 72, 153, 0.4)',
      }
    },
  },
  plugins: [],
}
