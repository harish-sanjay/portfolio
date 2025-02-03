/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        xs: "350px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      gridTemplateColumns: {
        29: "116px repeat(1, 2fr)",
      },
      animation: {
        "profile-animate": "profile-animate 8s ease-in-out infinite ",
      },
      keyframes: {
        "profile-animate": {
          "0%": { borderRadius: "60% 40% 30% 70%/ 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/ 50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/ 60% 30% 70% 40%" },
        },
      },
      fontSize: {
        md: "1rem",
      },
    },
  },

  plugins: [],
};
