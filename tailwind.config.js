/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend:{
      colors:{
        "primary":"#085078",
        "secondary":"#85d8ce",
      }
    }
  },
  plugins: [],
};
