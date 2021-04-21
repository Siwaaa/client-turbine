const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
      scale: {
        '60': '.6',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundOpacity: ['active'],
      backgroundColor: ['active'],
    }
  },
  plugins: [],
}
