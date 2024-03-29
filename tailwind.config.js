/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },

      colors: {
        "primary": "var(--black)",
        "secondary": "var(--black2)",
        "tertiary": "var(--darkgreen)",
        "btn-color": "var(--darkgreen)",
        "hover-color": "var(--darkgreen)",

      },
    },
  },
  plugins: [],
}

