/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'brand-primary': '#54414D',
      'brand-white': '#E9E2DC'
    },
    fontFamily: {
      'sans': ['Helvetica Neue', 'Arial', 'sans-serif'],
      'serif': ['Ortica Linear2', 'Ortica Linear1', 'serif']
    },
    extend: {}
  },
  plugins: []
}
