/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#03783d',
          light: '#03783d',
          dark: '#03783d',
        },
        secondary: {
          DEFAULT: '#FFF',
          light: '#FFF',
          dark: '#FFF',
        },
      },
    },
  },
  plugins: [],
};
