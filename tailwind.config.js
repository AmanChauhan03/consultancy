/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './index.html',
    './images',
    './src/**/*.{js,html}'],
  theme: {
    extend: {
     
      keyframes: {
        floatImage: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2.4rem)' },
          '100%': { transform: 'translateY(0)' },
        },
     
      },
      animation: {
        float: 'floatImage 4s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
}

