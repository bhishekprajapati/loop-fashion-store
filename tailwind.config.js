import theme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Graphik LCG", ...theme.fontFamily.sans],
      display: ["Neue Montreal", ...theme.fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      accent: "#1236DB",
      dark: "#0A0A0A",
      light: "#fff",
      red: "#FF4B4B",
    },
    extend: {},
  },
  plugins: [],
};
