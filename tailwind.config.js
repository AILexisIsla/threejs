/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      serif: ["Playfair Display", ...defaultTheme.fontFamily.sans],
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}

