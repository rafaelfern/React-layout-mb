/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        white: {
          200: "#ffffff",
        },
        green: {
          300: "#9FC363",
          500: "#2BB673",
        },
        pink: {
          200: "#F3CCDE",
          300: "#D7C9E3",
        },
        yellow: {
          500: "#F5C632",
        },
        blue: {
          500: "#54D5EB",
        },
        orange: {
          700: "#FFA500",
        },
        gray: {
          500: "#898989",
        },
      },
    },
  },
  plugins: [],
};
