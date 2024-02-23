/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#F91058",
        dimWhite: "#ffffffb3",
        "black-opacity-50": "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        poppins: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/hero.jpg')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
