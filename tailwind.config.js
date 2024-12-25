/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        primary: "#0154AA",
        body: "#737A91",
        text: "#585D6E",
        white: "#ffff",
        dark: "#333333",
      },
    },
  },
  plugins: [],
};
