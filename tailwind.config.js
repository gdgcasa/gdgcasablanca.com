const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Google Sans', ...fontFamily.sans],
    },
    extend: {
      colors: {
        gradient: 'linear-gradient(180deg,rgba(244,245,247,.44),#f4f5f7)',
        glue: {
          50: '#f3f8ff',
          100: '#d1e3fa',
          200: '#a3c7f6',
          300: '#76abf1',
          400: '#488fed',
          500: '#1a73e8',
          600: '#155cba',
          700: '#10458b',
          800: '#0a2e5d',
          900: '#05172e',
        },
      },
    },
  },
  plugins: [],
}
