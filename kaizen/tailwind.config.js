/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        "main-black":"#000000",
        "footer-color":"#111111",
       
      }
    },
  },
  plugins: [],
}

