/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#345afb',
        card: '#F9F9F9',
        green: '#3CCA5A',
      },
    },
  },

  plugins: ['prettier-plugin-tailwindcss'],
}
