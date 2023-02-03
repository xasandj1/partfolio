/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xr:"300px",
      sx:"321px",
      xs: "376px",
      sm: "426px",
      md: "769px",
      lg: "1025px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
