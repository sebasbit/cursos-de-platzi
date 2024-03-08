const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        success: colors.green,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
