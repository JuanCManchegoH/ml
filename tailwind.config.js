/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      techBg: '#05070b',
    },
    extend: {},
  },
};
