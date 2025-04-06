/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#1b1b1b",
        secondary: "#212121",
      },
    },
    screens: {
      xs: "300px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
