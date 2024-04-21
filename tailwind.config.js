/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
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
