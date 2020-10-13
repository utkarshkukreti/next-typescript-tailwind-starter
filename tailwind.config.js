module.exports = {
  experimental: 'all',
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
    standardFontWeights: true,
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
