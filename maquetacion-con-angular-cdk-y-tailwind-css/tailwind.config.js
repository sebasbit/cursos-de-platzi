const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        light: colors.indigo,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
