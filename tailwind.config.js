/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey': '#212121',
        'custom-black': '#151515',
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #303030, #151515)',
      },

    },
  },
  plugins: [],
}

