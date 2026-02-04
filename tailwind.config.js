/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        sand: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e6e3',
          200: '#c7cdc7',
          300: '#a3aca3',
          400: '#7d8a7d',
          500: '#5f6e5f',
          600: '#4a574a',
          700: '#3c463c',
          800: '#323a32',
          900: '#2b312b',
        },
        warm: {
          50: '#faf7f5',
          100: '#f5ede8',
          200: '#e9d8cf',
          300: '#dbbfaf',
          400: '#c99d85',
          500: '#b8836a',
          600: '#a86f5e',
          700: '#8b5c50',
          800: '#714d45',
          900: '#5d4139',
        },
      },
    },
  },
  plugins: [],
}
