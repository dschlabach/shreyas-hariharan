/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#210c2e',
        secondary: '#43344d',
        light: '#e3dbd8',
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
            color: theme('colors.primary'),
            '--tw-prose-headings': theme('colors.primary'),
            p: {
              fontWeight: 400,
              opacity: 0.8,
            },
            h1: {
              opacity: 0.8,
            },
            a: {
              fontWeight: 400,
              color: theme('colors.primary'),
            },
            strong: {
              color: theme('colors.primary'),
            },
            em: {
              color: theme('colors.primary'),
            },
            li: {
              opacity: 0.7,
            },
            blockquote: {
              color: theme('colors.primary'),
            },
            '--tw-prose-bullets': theme('colors.primary'),
            '--tw-prose-quote-borders': theme('colors.secondary'),
          },
        },
        dark: {
          css: {
            color: theme('colors.light'),
            '--tw-prose-headings': theme('colors.light'),
            p: {
              fontWeight: 400,
              opacity: 0.9,
            },
            a: {
              fontWeight: 400,
              color: theme('colors.light'),
            },
            strong: {
              color: theme('colors.light'),
            },
            em: {
              color: theme('colors.light'),
            },
            li: {
              opacity: 0.7,
            },
            blockquote: {
              color: theme('colors.light'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
