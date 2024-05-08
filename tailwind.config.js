/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'manrope': ['Manrope', 'sans-serif'],
          'covered': ['Covered By Your Grace', 'cursive'],
        },
        colors: {
          custom: {
            'E8EEE7': '#E8EEE7',
            '617275': '#617275',
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }