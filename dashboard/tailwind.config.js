/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '128':'80.375rem',
        '651':'40.688rem',
        '1357':'84.813rem',
        '984':'61.5rem',
      },
      height:{
        '567':'35.438rem',
        '485':'30.313rem',
        '735':'45.938rem',
      }
    },
  },
  plugins: [],
}