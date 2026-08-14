/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dark: {
          950: '#06080d',
          900: '#0c1017',
          850: '#10151f',
          800: '#161c28',
          700: '#232b3c',
          600: '#334155',
        },
        cyan: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -10px rgba(56, 189, 248, 0.3)',
        'glow-emerald': '0 0 40px -10px rgba(52, 211, 153, 0.3)',
        'glow-amber': '0 0 40px -10px rgba(251, 191, 36, 0.25)',
      },
    },
  },
  plugins: [],
};
