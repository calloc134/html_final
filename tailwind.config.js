/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.html", "src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        "zen-kaku-gothic-new-light": ['"Zen Kaku Gothic New"', "sans-serif"],
      },
      fontWeight: {
        light: 400,
      },
    },
  },
  plugins: [],
};
