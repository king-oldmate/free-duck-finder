/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "duck-yellow": "#FFD801",
      },
      fontFamily: {
        heading: ["Martel Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
