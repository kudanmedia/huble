/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(255,90,95,1.0)",
        secondary: "#333333",
        white: "rgba(255, 255, 255, 1)",
        orange: "rgba(238, 87, 94, 1)",
        story: "#877b4d",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        circular: ["CircularStd", "sans-serif"]
      },
    },
  },
  plugins: [],
}

