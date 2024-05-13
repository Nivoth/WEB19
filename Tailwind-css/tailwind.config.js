/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","/src/grid.html"],
  theme: {
    extend: {
      colors: {
        neekz: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        }
      },
      fontSize:{
        10:"10px",
        300:"300px",
      },
    },
  },
  extend: {
    spacing: {
      '10px': '10px',
      '20px': '20px',
      '30px': '30px',
      '40px': '40px',
    }
  },
  plugins: [],
}
