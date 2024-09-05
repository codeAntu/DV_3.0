/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#345afb',
        card: '#F9F9F9',
        card2:"#f7f7f7",
        green: '#3CCA5A',
        blue: '#1F3881',
      },
    },
  },

  plugins: ['prettier-plugin-tailwindcss'],
}
