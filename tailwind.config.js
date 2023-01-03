/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        homemadeApple: ["Homemade Apple", "cursive"],
        satisfy: ["Satisfy", "cursive"],
      }
    },
  },
  plugins: [require("daisyui")],
}