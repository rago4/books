module.exports = {
  purge: {
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    safelist: ['dark'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
