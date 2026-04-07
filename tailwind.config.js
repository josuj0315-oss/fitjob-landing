/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#5C5FED",
          light: "#EEF0FF",
          dark: "#4A4DDF",
          hover: "#4E51E5",
        },
        navy: {
          DEFAULT: "#1E1B4B",
          dark: "#1E1B4B",
        },
      },
      boxShadow: {
        'premium': '0 20px 50px -12px rgba(0, 0, 0, 0.08)',
        'premium-hover': '0 30px 60px -12px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
