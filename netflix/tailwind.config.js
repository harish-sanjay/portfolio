/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        sm: "500px",
        md: "720px",
        lg: "960px",
        xl: "1280px",
        "2xl": "1536px",
      },

      colors: {
        primary: "rgb(229,9,20)",
        secondary: "rgb(35,35,35)",
      },
      fontFamily: {
        primary: "'Helvetica Neue', Arial, sans-serif",
      },
    },
  },

  plugins: [],
};
