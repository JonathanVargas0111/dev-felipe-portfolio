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
        editorial: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        page: {
          light: '#fbfbfd',
          dark: '#0b0d12',
        },
        surface: {
          light: '#ffffff',
          dark: '#10131a',
          elevated: '#161a24',
        },
        ink: {
          primary: '#f4f5f8',
          secondary: '#9ba1b0',
          muted: '#5c6375',
        },
      },
    },
  },
  plugins: [],
};
