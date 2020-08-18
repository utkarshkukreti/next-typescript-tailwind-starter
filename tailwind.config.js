module.exports = {
  experimental: 'all',
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./src/**/*'],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Trebuchet MS", "Lucida Grande", sans-serif',
      },
    },
  },
  variants: {},
  plugins: [],
};
