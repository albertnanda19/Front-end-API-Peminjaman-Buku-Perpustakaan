/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Changed 'Poppins' to lowercase 'poppins'
        'fredoka': ['Fredoka One', 'sans-serif'], // Changed 'Fredoka' to lowercase 'fredoka'
      },
      
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [
  ],
}