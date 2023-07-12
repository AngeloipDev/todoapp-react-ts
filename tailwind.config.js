/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#2C74B3',
          200: '#205295',
          300: '#144272',
          400: '#0A2647'
        }
      }
    }
  },
  plugins: []
}
