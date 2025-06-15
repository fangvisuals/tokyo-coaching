/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F6F4',
        pink: '#E8D3D1',
        gold: '#C8A97E',
        charcoal: '#2A2A2A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Tenor Sans', 'serif'],
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
          transform: "translate(30px, -50px) scale(1.2)"
          },
          "66%": {
          transform: "translate (-20px, 20px) scale(0.8)"
          },
          "100%": {
          transform: "translate (0px, 0px) scale(1)"
          }
        }
      },
      animation: {
        blob: "blob 7s infinite"
      }
    },
  },
  plugins: [],
};