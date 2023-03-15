/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/presentation/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#880E4F',
          dark: '#560027',
          light: '#BC477B',
        },
      },
    },
  },
  plugins: [],
}
