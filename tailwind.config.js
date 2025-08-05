/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4f46e5',
        'brand-teal': '#14b8a6',
      },
    },
  },
  plugins: [],
};
