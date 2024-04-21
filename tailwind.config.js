/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        /*
         * Customize the `sans` to font Inter
         * Sets `font-family: var(--font-inter)` on the `html` element
         */
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
