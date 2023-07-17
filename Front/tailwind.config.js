/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "rgb(240, 242, 255)",
          2: "rgb(233, 233, 253)",
          3: "rgb(39, 90, 255)",
          4: "rgb(60, 60, 255)",
          5: "rgb(35, 35, 255)",
          6: "rgb(0, 0, 255)",
          7: "rgb(0, 0, 230)",
        },
        error: "rgb(239 68 68)",
      },
      boxShadow: {
        button: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        card: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
      },
    },
  },
  plugins: [],
};
