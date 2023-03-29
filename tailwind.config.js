/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        red: 'hsl(1, 90%, 64%)',
        blue: {
          grayish: 'hsl(219, 14%, 63%)',
          DEFAULT: 'hsl(219, 85%, 26%)',
          'very-light-grayish': 'hsl(210, 60%, 98%)',
          'light-grayish-1': 'hsl(211, 68%, 94%)',
          'light-grayish-2': 'hsl(205, 33%, 90%)',
          'dark-grayish': 'hsl(219, 12%, 42%)',
          'very-dark': 'hsl(224, 21%, 14%)',
        },
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
