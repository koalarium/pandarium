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
        900: '#461056',
        500: '#7D3F9E',
        300: '#D861FA',
        100: '#F3D0FE',
      },
      'orange': '#FAAF6E',
      'blue': '#93E8FA',
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
        }
      },
      animation: {
        moveRight: 'moveRight 14s linear infinite',
        moveLeft: 'moveLeft 14s linear infinite',
        slideLeft: 'slideLeft 20s cubic-bezier(.06,.03,.93,.98) infinite',
        slideRight: 'slideRight 20s cubic-bezier(.06,.03,.93,.98) infinite',
        pandaHero: 'pandaHero 7s cubic-bezier(0.2, 0, 0.6, 1) infinite'
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
