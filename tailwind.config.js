/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6650a4',
          dark: '#D0BCFF',
        }
      }
    },
  },
  plugins: [],
}