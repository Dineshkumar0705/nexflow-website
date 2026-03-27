/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  // No mdx scanning (not used) — faster Tailwind JIT
  theme: {
    extend: {
      colors: {
        // ── Legacy (kept for backward compat) ──
        nexflowGreen:  "#4CAF7D",
        nexflowOrange: "#FF8A24",
        cardCream:     "#F8F6F2",

        // ── New green theme ──
        nfBg:    "#050A07",   // page background
        nfGreen: "#4B7F52",   // primary forest green
        nfMint:  "#96E8BC",   // accent mint green
        nfMid:   "#6EC99A",   // mid-green
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(135deg, #4B7F52, #6EC99A)',
        'mint-gradient':  'linear-gradient(135deg, #96E8BC, #4B7F52)',
      },
      animation: {
        'mesh-move':   'mesh-move 18s ease-in-out infinite',
        'mesh-move-2': 'mesh-move-2 22s ease-in-out infinite',
        'gradient-x':  'gradient-x 4s ease infinite',
        'float-up':    'float-up 3s ease-in-out infinite',
      },
      keyframes: {
        'mesh-move': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(40px, -30px) scale(1.05)' },
          '66%':      { transform: 'translate(-20px, 20px) scale(0.97)' },
        },
        'mesh-move-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '40%':      { transform: 'translate(-50px, 40px) scale(1.08)' },
          '70%':      { transform: 'translate(30px, -20px) scale(0.95)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        'float-up': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    }
  },
  plugins: []
}
