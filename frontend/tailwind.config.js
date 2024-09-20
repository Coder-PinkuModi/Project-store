/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-headerBlue': '#273242',
      },
      height: {
        '31rem': '31rem',
      },
    },
  },
  plugins: [],
}