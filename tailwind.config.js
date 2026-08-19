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
        cyber: {
          bg: '#040714',
          card: '#0a0f24',
          'card-hover': '#111936',
          border: 'rgba(0, 240, 255, 0.15)',
          'border-bright': 'rgba(0, 240, 255, 0.45)',
          cyan: '#00f0ff',
          'cyan-glow': 'rgba(0, 240, 255, 0.4)',
          emerald: '#00ff9d',
          violet: '#8b5cf6',
          'violet-glow': 'rgba(139, 92, 246, 0.4)',
          pink: '#ff007f',
          amber: '#ffb800',
          blue: '#3b82f6',
          muted: '#8e9bb4',
          dark: '#030611',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.35)',
        'neon-cyan-lg': '0 0 35px rgba(0, 240, 255, 0.6)',
        'neon-emerald': '0 0 20px rgba(0, 255, 157, 0.35)',
        'neon-violet': '0 0 20px rgba(139, 92, 246, 0.35)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'reverse-spin': 'reverse-spin 12s linear infinite',
        'glow-scan': 'scan 3s ease-in-out infinite',
        'radar-sweep': 'radar 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'reverse-spin': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        scan: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0%)' },
          '50%': { opacity: '0.8', transform: 'translateY(100%)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
