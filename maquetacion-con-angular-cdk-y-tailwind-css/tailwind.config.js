const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        light: colors.sky,
      },
    },
  },
  container: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1024px",
      "2xl": "1536px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
