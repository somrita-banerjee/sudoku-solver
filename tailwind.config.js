/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors: {
            'button-color': '#B61BA1',
        },
    },
  },
  plugins: [],
}

