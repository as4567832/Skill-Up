/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"  // Include all your React files
  ],
  theme: {
    extend: {
       colors: {
        'dark-gray-custom': 'rgba(24, 28, 37, 1)', // The '1' is for full opacity
      },
    },
  },
  plugins: [],
}
