/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '481px',
      md: '768px',
      lg: '991px',
      xl: '1200px',
    },

    extend: {
      backgroundImage: {
        'bg-1': "url('../img/bg-1.jpg')",
      },
      colors: {
        gold: '#ad9970',
        offWhite: '#f8f9fa',
        darkGray: '#262626',
        midGray: '#767676',
        paraColor: '#ffffff80',
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
