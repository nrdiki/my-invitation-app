/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          50: '#f9f9f9',
          100: '#e0e0e0',
          200: '#c7c7c7',
          300: '#aeaeae',
          400: '#949494',
          500: '#7b7b7b',
          600: '#626262',
          700: '#494949',
          800: '#303030',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
};
