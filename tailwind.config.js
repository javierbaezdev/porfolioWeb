import animations from '@midudev/tailwind-animations'

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
          50: '#f5f6f6',
          100: '#e5e8e8',
          200: '#ced3d3',
          300: '#abb3b5',
          400: '#828c8e',
          500: '#677173',
          600: '#586062',
          700: '#4b5153',
          800: '#424748',
          900: '#3a3e3f',
          950: '#1d1f20', //dark mode
        },
        rock: {
          50: '#f5f4f1',
          100: '#e6e1db',
          200: '#d0c5b8',
          300: '#b4a390',
          400: '#9f8670',
          500: '#907662',
          600: '#7b6153',
          700: '#644d44',
          800: '#55423d',
          900: '#4b3b38',
          950: '#2a1f1e', // cafe
        },
      },
    },
  },
  plugins: [animations],
}
