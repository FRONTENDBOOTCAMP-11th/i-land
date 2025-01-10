/** @type {import('tailwindcss').Config} **/
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  safelist: [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "grid-cols-9",
    "grid-cols-10",
  ],
  theme: {
    screens: {
      container: "1200px",
    },
    container: {
      center: true, // Contanier 가운데 정렬
      padding: "100px",
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray1: "#EEEEEE",
      gray2: "#CCCCCC",
      gray3: "#AAAAAA",
      "point-blue": "#0093FF",
      "point-red": "#EB5640",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
