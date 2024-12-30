/** @type {import('tailwindcss').Config} **/
export default {
  content: ["./src/**/*.{html,js,jsx}"],
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
<<<<<<< HEAD
  plugins: [],
};
=======
  plugins: [require("tailwind-scrollbar-hide")],
};
>>>>>>> 0c94736af6c17fd8f7be0f18d22dcefd4740023e
