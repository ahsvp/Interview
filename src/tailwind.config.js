/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx}", // Ensures Tailwind scans your component files
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  