/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#0a0910',
        surface: '#13121c',
        border: '#374151',
        'accent-violet': '#8b5cf6',
        'accent-cyan': '#22d3ee',
        'accent-amber': '#f59e0b',
        'text-primary': '#ffffff',
        'text-muted': '#9ca3af',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
