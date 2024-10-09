/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgBlack: "#000000",
        bgWhite: "#FFFFFF",

        primaryLight100 : "#e8e7fd",
        primaryLight200 : "#655df4",
        primaryLight300 : "#534af2",
        primaryLight400 : "#2e24f0",
        primaryLight500 : "#1b10e5",
        primaryLight600 : "#1c11ee",
        primaryLight700 : "#1a0fdb",
        primaryLight800 : "#0e0877",
        primaryLight900 : "#080548",

        secondaryLight : "#b011ea",
        accentLight : "#F26101",
    
      },
      fontSize: {
        h1: "5.61rem",
        h2: "4.209rem",
        h3: "3.157rem",
        h4: "2.369rem",
        h5: "1.777rem",
        title: "1.333rem",
        p: "1rem",
        small: "0.75rem",
        "extra-small": "0.563rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
