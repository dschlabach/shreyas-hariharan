/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#210c2e',
        secondary: '#43344d',
        light: '#FFFFFF',
        ui: {
          'taupe-gray': '#8B828F',
          'dark-purple': '#32213B',
        },
      },
      fontFamily: {
        serif: ['Spectral', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            '--tw-prose-headings': theme('colors.white'),
            p: {
              fontWeight: 400,
              opacity: 0.7,
            },
            a: {
              fontWeight: 400,
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.white'),
            },
            em: {
              color: theme('colors.white'),
            },
            li: {
              opacity: 0.7,
            },
            blockquote: {
              color: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
