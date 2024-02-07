/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': {
          100: '#2eb451',
          200: '#00a151',
        },
        'primary-orange': {
          100: '#ffa400',
          200: '#f69f14',
        },
        'secondary': {
          'green': '#12a53a',
          'orange': '#ea592b',
          'rose': '#fde2cd',
          'yellow': '#ffdd1c',
        }
      },
      
    },
    fontFamily: {
      'sora': ['Sora'],
      'exo2': ['"Exo 2"'],
    },
  },
  plugins: [],
}