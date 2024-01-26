/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      poppins: ["Poppins", "sans-serif"],
      spacing: {
        110: "50rem",
        85: "21rem",
      },
    },
  },
  plugins: [],
});
