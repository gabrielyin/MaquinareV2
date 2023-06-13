/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: 'var(--font-roboto)',
        sec: 'var(--font-hind)',
        ter: 'var(--font-merriweather)',
      },

      colors: {
        'bright-sun': {
          50: '#fefae8',
          100: '#fef5c3',
          200: '#feec8a',
          300: '#fde047',
          400: '#fad615',
          500: '#eac608',
          600: '#caaa04',
          700: '#a18807',
          800: '#85720e',
          900: '#716212',
          950: '#423806',
        },

        candlelight: {
          50: '#fefae8',
          100: '#fef2c3',
          200: '#fee78a',
          300: '#fdd847',
          400: '#facc15',
          500: '#eabd08',
          600: '#caa204',
          700: '#a18207',
          800: '#856d0e',
          900: '#715e12',
          950: '#423606',
        },
      },

      backgroundColor: {
        footer: '#1F1F1F',
        body: '#FFFDF6',
      },
    },
  },
  plugins: [],
}
