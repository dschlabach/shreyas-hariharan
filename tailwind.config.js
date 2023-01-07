/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#13001E',
        secondary: '#281732',
        light: '#FFFFFF',
        ui: {
          'taupe-gray': '#8B828F',
          'dark-purple': '#32213B',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            '--tw-prose-headings': theme('colors.white'),
            p: {
              fontWeight: 300,
            },
            a: {
              fontWeight: 300,
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.white'),
            },
            em: {
              color: theme('colors.white'),
              opacity: 0.9,
            },
            blockquote: {
              color: theme('colors.white'),
              opacity: 0.9,
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
