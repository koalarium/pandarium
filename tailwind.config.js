/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
      'black': '#000000',
      'green': {
        300: '#C2FA61',
        500: '#83B42A',
        900: '#72A11D',
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
      'orange': '#FAAF6E',
      'blue': '#93E8FA',
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
          '0%, 100%': { transform: 'translateX(0%)'},
          '50%': { transform: 'translateX(-25%)'},
        },
        slideRight: {
          '0%, 100%': { transform: 'translateX(-25%)'},
          '50%': { transform: 'translateX(0%)'},
        },
        pandaHero: {
          '0%, 100%': { transform: ' translateY(0) rotate(-20deg) '},
          '50%': { transform: 'translateY(-20px) rotate(-10deg) '}
        },
        moveAround: {
          '0%': { transform: 'rotate(-45deg)'},
          '100%': { transform: 'rotate(315deg)'},
        },
        rotatePictures: {
          '0%': { transform: 'rotate(45deg)'},
          '100%': { transform: 'rotate(405deg)'},
        }
      },
      animation: {
        moveRight: 'moveRight 14s linear infinite',
        moveLeft: 'moveLeft 14s linear infinite',
        slideLeft: 'slideLeft 20s cubic-bezier(.06,.03,.93,.98) infinite',
        slideRight: 'slideRight 20s cubic-bezier(.06,.03,.93,.98) infinite',
        pandaHero: 'pandaHero 7s cubic-bezier(0.2, 0, 0.6, 1) infinite',
        moveAround: 'moveAround 12s linear 0s infinite',
        moveAround1: 'moveAround 12s linear 2s infinite',
        moveAround2: 'moveAround 12s linear 4s infinite',
        moveAround3: 'moveAround 12s linear 6s infinite',
        moveAround4: 'moveAround 12s linear 8s infinite',
        moveAround5: 'moveAround 12s linear 10s infinite',
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
      },
    },
  },
}
