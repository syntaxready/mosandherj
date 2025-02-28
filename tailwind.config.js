/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#003B5C',
        secondary: '#FF4B00',
        accent: '#FF8200'
      }
    },
  },
  plugins: [],
};