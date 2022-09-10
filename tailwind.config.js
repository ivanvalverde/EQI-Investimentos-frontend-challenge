/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    screens: {
      mobile: '300px',
      tablet: '640px',
      laptop: '1350px',
    },
    colors: {
      lightGreen: '#9dcc95',
      veryLightOrange: '#ed8e53',
      lightOrange: '#ed8e53',
      warningRed: '#ef1717',
      lightGrey: '#efefef',
      intermediateGrey: '#f4f4f4',
      darkGrey: '#969696',
      coreBlack: '#000',
      coreWhite: '#FFF',
      noColor: 'transparent',
    },
    fontSize: {
      'xxs': '.65rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
    },
  },
  plugins: [],
}
