/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#D946EF',
        'secondary':'#8B5CF6',
        'green':'#4ADE80',
        'pink':'#EE9AE5'
      }
    },
  },
  plugins: [],
}

