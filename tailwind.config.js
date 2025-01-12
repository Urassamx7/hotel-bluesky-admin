/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#020817",
        btnColor: "#F8FAFC",
        primary:"#93A2B7"
      },
    },
  },
  plugins: [],
};
