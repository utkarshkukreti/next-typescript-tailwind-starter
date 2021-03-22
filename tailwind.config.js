module.exports = {
  purge: ['./src/**/*'],
  theme: {
    extend: {
      colors: {
        ...require('tailwindcss/colors'),
        gray: require('tailwindcss/colors').coolGray,
      },
      fontFamily: {
        // https://css-tricks.com/snippets/css/font-stacks/
        sans:
          '"Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
