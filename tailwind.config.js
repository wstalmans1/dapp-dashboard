/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'british-racing-green': '#004225', // Adding British racing green color
        'lighterbritish-racing-green': '#006400', // Adding British racing green color
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-british-racing-green': 'linear-gradient(to right, #004225, #006400)', // Custom gradient
      },
    },
  },
  plugins: [],
}
