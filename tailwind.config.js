/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'beige': {
          50: '#fefdfb',
          100: '#faf6f0',
          200: '#f5ede3',
          300: '#ede0d0',
          400: '#e3d0b8',
          500: '#d6bc9a',
          600: '#c4a373',
          700: '#a8834d',
          800: '#8a6635',
          900: '#5d4423',
        }
      }
    },
  },
  plugins: [],
};
