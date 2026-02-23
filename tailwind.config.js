/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}", "./*.{html,js}"
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%, 18%': { transform: 'translateY(0)' },
          '20%, 38%': { transform: 'translateY(-20%)' },
          '40%, 58%': { transform: 'translateY(-40%)' },
          '60%, 78%': { transform: 'translateY(-60%)' },
          '80%, 98%': { transform: 'translateY(-80%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },

      animation: {
        flip: 'flip 10s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
      },

      backgroundImage: {
        'eng1' : 'url("../src/bnw.webp")',
        'card1' : 'url("../src/card1.webp")',
        'card2' : 'url("../src/card2.webp")',
        'card3' : 'url("../src/card3.webp")',
        'card4' : 'url("../src/card4.webp")',
        'card5' : 'url("../src/card5.webp")',
        'bg2' : 'url("../src/bg2.webp")',
        'bg1' : 'url("../src/bg1.webp")',
      },

      fontFamily: {
        'nevis': ['Nevis', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'menata': ['Menata', 'sans-serif'], 
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
