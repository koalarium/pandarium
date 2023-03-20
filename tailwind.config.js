/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(green|purple|orange|black|white|blue|pink|yellow|brown|gray)-(10|50|100|300|400|500|600|900|950)/,
      variants: ['hover', 'group-hover']
    }
  ],
  plugins: [],
  images: {
    formats: ['image/webp'],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': {
        100: '#000000',
      },
      'gray': {
        100: '#A6A6A6',
        900: '#1F1F1F',
      },
      'green': {
        300: '#C2FA61',
        500: '#83B42A',
        600: '#4AAE1D',
        900: '#72A11D',
        1000: '#182306',
        90:  '#446607',
        50:  '#A5CA45',
      },
      'purple': {        
        950: '#22082B',
        900: '#461056',
        500: '#7D3F9E',
        300: '#D861FA',
        100: '#F3D0FE',
        50: '#EEE9EF',
        10: '#F2F2F2',
      },
      'orange': {
        300: '#FAAF6E',
        500: '#F7941E',
        600: '#F76E19',
      },
      'blue': {
        300: '#93E8FA',
        400: '#74D0CB',
        500: '#55DDFA',
      },
      'pink': {
        100: '#FDCEF5',
        300: '#FF7BEA',
      },
      'yellow': {
        100: '#FDF55F',
        300: '#F3D47A',
        500: '#FFD914',
        600: '#EDA92A',
      },
      'brown': {
        500: '#9B6730',
        600: '#B25D16',
      },
      'facebook': '#3B5998',
      'instagram': '#E1306C',
      'discord': '#7289DA'
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        rubikbold: ["Rubik-ExtraBold", "sans-serif"],
        rubikmedium: ["Rubik-Medium", "sans-serif"],
        rubiklight: ["Rubik-Light", "sans-serif"],
      },
      keyframes: {
        moveRight: {
          '0%, 100%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg) scale(1)', opacity: 0.8 },
          '50%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg) scale(1.2)', opacity: 0.4 }
        },
        moveLeft: {
          '0%, 100%': { transform: 'rotate(0deg) translateX(-100px) rotate(0deg) scale(1)', opacity: 0.8 },
          '50%': { transform: 'rotate(360deg) translateX(-100px) rotate(-360deg) scale(1.2)', opacity: 0.4 }
        },
        slideLeft: {
          '0%': { transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(-100%)'},
        },
        pandaHero: {
          '0%, 100%': { transform: ' translateY(0) rotate(-20deg) '},
          '50%': { transform: 'translateY(-20px) rotate(-10deg) '}
        },
        pandaHeroCow: {
          '0%, 100%': { transform: ' translateY(0) rotate(150deg) '},
          '50%': { transform: 'translateY(-12px) rotate(160deg) '}
        },
        pandaHeroSmallLeft: {
          '0%, 100%': { transform: ' translateY(0) rotate(-20deg) '},
          '50%': { transform: 'translateY(10px) rotate(-15deg) '},
        },
        pandaHeroSmallRight: {
          '0%, 100%': { transform: ' translateY(0) rotate(20deg) '},
          '50%': { transform: 'translateY(10px) rotate(25deg) '}
        },
        pandaHeroSmallMini: {
          '0%, 100%': { transform: ' translateY(0) translateX(0) rotate(-140deg) '},
          '50%': { transform: 'translateY(8px) translateX(-8px) rotate(-140deg)'}
        },
        moveAround: {
          '0%': { transform: 'rotate(-115deg)'},
          '100%': { transform: 'rotate(245deg)'},
        },
        rotatePictures: {
          '0%': { transform: 'rotate(115deg)'},
          '100%': { transform: 'rotate(475deg)'},
        }
      },
      animation: {
        moveRight: 'moveRight 14s linear infinite',
        moveLeft: 'moveLeft 14s linear infinite',
        slideLeft: 'slideLeft 20s linear infinite backwards',
        slideRight: 'slideLeft 20s linear infinite reverse',
        pandaHero: 'pandaHero 7s cubic-bezier(0.2, 0, 0.6, 1) infinite',
        pandaHeroCow: 'pandaHeroCow 8s cubic-bezier(0.2, 0, 0.6, 1) infinite',
        pandaHeroSmallLeft: 'pandaHeroSmallLeft 10s cubic-bezier(0.2, 0, 0.6, 1) infinite',
        pandaHeroSmallRight: 'pandaHeroSmallRight 10s cubic-bezier(0.2, 0, 0.6, 1) infinite',
        pandaHeroSmallMini: 'pandaHeroSmallMini 8s cubic-bezier(0.2, 0, 0.6, 1) infinite',
        moveAround: 'moveAround 12s linear 0s infinite',
        rotatePictures: 'rotatePictures 12s linear 0s infinite reverse',
      },
      dropShadow: {
        'overline':[
          '-7px -7px 0 rgba(255,255,255,1)',
          '7px 7px 0 rgba(255,255,255,1)',
        ]
      },
      boxShadow: {
        'overline':[
          '-7px -7px 0 rgba(255,255,255,1)',
          '7px 7px 0 rgba(255,255,255,1)',
        ]
      },
      backgroundImage: {
        'hearts-pattern': "url('/images/patterns/hearts-pattern.svg')",
        'big-hearts-pattern': "url('/images/patterns/big-hearts-pattern.svg')",
        'bambo-rain-pattern': "url('/images/patterns/rain-of-bambus-pattern.svg')",
      },
    },
  },
}
