module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0c5694',
          light: '#3a7fb4',
          dark: '#083a6b',
        },
        secondary: {
          DEFAULT: '#e6f2ff',
          light: '#f5f9ff',
          dark: '#cce5ff',
        },
      },
    },
  },
  plugins: [],
}