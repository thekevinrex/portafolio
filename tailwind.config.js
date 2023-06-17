/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'vue' : '0 0 2em #4eb842',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

