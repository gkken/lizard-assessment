/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          light: '#f2f2f2',
          dark: '#e6e6e6',
          subtext: '#757575',
        },
      },
    },
  },
  plugins: [],
};
