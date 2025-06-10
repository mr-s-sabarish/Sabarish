// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Scan all HTML files directly in the root of your project
    // "./src/**/*.{html,js}", // Example if your HTML/JS files are in a 'src' folder
    // "./**/*.{html,js,ts,jsx,tsx}", // Example for more complex projects
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}