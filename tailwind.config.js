/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        'cream': {
          DEFAULT: '#fafafa',
          'light': '#ffffff',
          'dark': '#f5f5f5',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

