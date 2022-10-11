/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
     
      shadow: {
        'me': '4px 4px 10px rgba(0, 0, 0, 5), -3px -3px 6px rgba(255, 255, 255, 0.5);',
      }
    },
  },
  plugins: [],
}