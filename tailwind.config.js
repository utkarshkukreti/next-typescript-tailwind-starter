module.exports = {
  purge: ['./src/**/*.{html,css,js,jsx,ts,tsx}'],
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
