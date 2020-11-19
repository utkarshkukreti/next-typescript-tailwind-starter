module.exports = {
  purge: ['./src/**/*'],
  theme: {
    extend: {
      colors: {
        ...require('tailwindcss/colors'),
      },
      fontFamily: {
        sans: '"Trebuchet MS", "Lucida Grande", sans-serif',
      },
    },
  },
  variants: {},
  plugins: [],
}
