const { withAnimations } = require('animated-tailwindcss');
 
/** @type {import('tailwindcss').Config} */
module.exports = withAnimations({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    fontFamily: {
      serif: ['Spectral', 'Georgia', 'Times New Roman', 'Times', 'serif'],
      sans: ['roboto', 'sans-serif'],
      poppins: ['Poppins', 'serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor'
    },
    maxWidth: {
      xs: '32rem',
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem'
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('daisyui'),
    require('preline/plugin')
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#008753',
          secondary: '#CF916D',
          accent: '#D9EBCD',
          neutral: '#25373F',
          'base-100': '#ffffff',
          info: '#2B8070',
          success: '#36D399',
          warning: '#F2F1F1',
          error: '#F87272',
          'hex':'#072B24',
          grey:'#F2F1F1'
        
        } 
      },
      {
        heroBlack: {
          primary: '#25373F',
          secondary: '#CF916D',
          accent: '#D9EBCD',
          neutral: '#ffffff',
          'base-100': '#ffffff',
          info: '#2B8070',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
          'hex':'#072B24',
           
        }
      },
      {
        heroWhite: {
          primary: '#ffffff',
          secondary: '#CF916D',
          accent: '#D9EBCD',
          neutral: '#25373F',
          'base-100': '#008753',
          info: '#2B8070',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
          'hex':'#2B8070'
        }
      }
    ]
  }
});

