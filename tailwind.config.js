module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D5F9A',
        secondaryText: '#858585',
        link: '#346BD5',
        fieldColor: '#EAEAEA',
        background: '#F5F5F5',
        lightGrey: '#B0B0B0',
        icon: '#999999',
        darkGrey: '#666666',
        lightRed: '#E9A0A0',
        lightGreen: '#9BDD7C',
        lightYellow: '#F4ECDD',
        lightPurple: '#DEE0EF',
        primaryPurple: '#6972C3',
        inputGrey: '#F5F5F5',
        buttonBlue: '#519BD0',
        userGrey: '#EDEDED'
      }
    },
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'],
      text: ['Lato', 'sans-serif']
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
};
