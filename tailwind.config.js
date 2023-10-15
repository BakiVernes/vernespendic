/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html',
    './**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        "main-green": "#015a4e",
        "background": "#ede7de",
        "fresh-green": "#8fdcc2",
        "secondary-text": "#4c6763"
      }
    },
  },
  plugins: [],
}

