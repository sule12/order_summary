/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./pattern-background-desktop.svg')",
      }

    },
  },
  plugins: [],
}

