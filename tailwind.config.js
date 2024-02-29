/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation',
        'Mono',
        'Courier',
        'New',
        'monospace',
      ],
    },
    extend: {
      colors: {
        'old-lace': {
          50: '#fef6e4',
          100: '#fcedc9',
          200: '#f9d88e',
          300: '#f6be53',
          400: '#f3a72c',
          500: '#ed8513',
          600: '#d1610e',
          700: '#ae430f',
          800: '#8d3413',
          900: '#742c13',
          950: '#431405', // light mode
        },
        biscay: {
          50: '#eef7ff',
          100: '#d9ebff',
          200: '#bcddff',
          300: '#8dc9ff',
          400: '#58aaff',
          500: '#3187ff',
          600: '#1a67f6',
          700: '#1351e2',
          800: '#1642b7',
          900: '#183b90',
          950: '#172c66', // blue
        },
        carissma: {
          50: '#fdf2f6',
          100: '#fce7f0',
          200: '#fbcfe1',
          300: '#f9a8c8',
          400: '#f68ab2',
          500: '#ec4880',
          600: '#db275c',
          700: '#be1844',
          800: '#9d1739',
          900: '#831833',
          950: '#500719', // rose
        },

        bunker: {
          50: '#f5f7fa',
          100: '#e9eef5',
          200: '#cedce9',
          300: '#a3bed6',
          400: '#729cbe',
          500: '#5080a7',
          600: '#3e668b',
          700: '#335271',
          800: '#2d475f',
          900: '#2a3d50',
          950: '#0e141b', //dark mode
        },
      },
    },
  },
  plugins: [],
}
