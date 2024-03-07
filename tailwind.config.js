/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        'pacifico': ['"Pacifico"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'custom-gray': '#7d7d7d',
      },
      transitionProperty: {
        'max-height': 'max-height'
      }
    },
  },
  plugins: [],
}
