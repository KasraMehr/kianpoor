/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#205DC9',
        'secondary': '#D9D9D9',
        'active': '#B2021B',
        'innerBox': '#2D63CC',
      }
    },
  },
  plugins: [],
}
