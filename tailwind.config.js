/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)',
        'suportedBrowserGreadient' : ' linear-gradient(rgb(13, 6, 31) 0%, rgb(37, 30, 53) 100%)'
      },
            fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        'custom-border': 'rgba(255, 255, 255, 0.063)',
        'titleColor': ' rgb(238, 229, 255)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],}
