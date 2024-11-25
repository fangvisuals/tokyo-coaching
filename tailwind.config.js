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
    },
  },
  plugins: [],
};