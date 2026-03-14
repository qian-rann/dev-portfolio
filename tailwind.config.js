/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 启用基于 class 的暗黑模式
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#5eead4', // Teal 300
          DEFAULT: '#14b8a6', // Teal 500
          dark: '#0f766e', // Teal 700
        },
        background: '#f8fafc',
        surface: '#ffffff',
      },
    },
  },
  plugins: [],
}
