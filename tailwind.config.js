module.exports = {
  purge: ['./src/**/*'],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Work Sans", sans-serif',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
