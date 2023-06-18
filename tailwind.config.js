/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple' : {
            DEFAULT : '#583469',
            300 : '#3f3162',
        },
      },
      dropShadow: {
        'vue' : '0 0 2em #4eb842',
      },
      height: {
        'hero' : 'calc(100vh - 64px)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

