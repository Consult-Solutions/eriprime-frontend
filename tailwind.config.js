/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#121929',
          light: '#121929',
          dark: '#121929',
        },
        secondary: {
          DEFAULT: '#FFF',
          light: '#FFF',
          dark: '#FFF',
        },
        altenative: {
          DEFAULT: '#03783d',
          light: '#03783d',
          dark: '#03783d',
        },
      },
    },
  },
  plugins: [],
};
