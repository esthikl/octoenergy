/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hemocyanin': '#180048',
        'ice': '#f0ffff',
        'plum': '#600e6b',
        'purpleHaze': '#a49fc8',
        'siphon': '#100030',
        'sohoLights': '#f050f8',
      }
    },
  },
  plugins: [],
}
