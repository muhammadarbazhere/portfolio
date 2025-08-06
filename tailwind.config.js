/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#3b82f6',
        accent: '#facc15',
      },
    },
  },
  plugins: [],
}

