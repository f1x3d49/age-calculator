/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarypurple: "hsl(var(--color-purple) / <alpha-value>)",
        primaryred: "hsl(var(--color-light-red) / <alpha-value>)",
        secondwhite: "hsl(var(--color-white) / <alpha-value>)",
        secondowhite: "hsl(var(--color-off-white) / <alpha-value>)",
        secondlgrey: "hsl(var(--color-light-grey) / <alpha-value>)",
        secondsgrey: "hsl(var(--color-smokey-grey) / <alpha-value>)",
        secondoblack: "hsl(var(--color-off-black) / <alpha-value>)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
