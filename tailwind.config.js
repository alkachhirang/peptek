/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'Bgblue': "url('./assets/images/png/blue-bg-img.png')",
        'Sponcerimg1': "url('./assets/images/png/sponcer-img1.webp')",
        'Sponcerimg2': "url('./assets/images/png/sponcer-img2.webp')",
      },

      backgroundSize: {
        'bgsize': "100% 100%"
      },
      screens: {
        '3xl': '1660px',
      },
    },
  },
  plugins: [],
}

