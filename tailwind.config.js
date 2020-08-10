module.exports = {
  purge: ['./src/**/*'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Verdana, sans-serif',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
