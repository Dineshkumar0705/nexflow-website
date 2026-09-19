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
        nexflowGreen:  "#5B7C88",
        nexflowOrange: "#C2CED2",
        cardCream:     "#F5F9FA",

        // ── Nexflow pastel professional theme ──
        nfBg:    "#131313",   // page / dark section background
        nfGreen: "#5B7C88",   // primary accent (deeper slate-blue, for buttons/contrast)
        nfMint:  "#B3E1E8",   // primary pastel accent
        nfMid:   "#8FBAC7",   // mid-tone accent

        // ── Direct brand palette tokens ──
        nfSky:     "#B3E1E8",  // requested pastel accent 1
        nfSkyAlt:  "#C1DBEC",  // requested pastel accent 2
        nfNeutral: "#C2CED2",  // requested neutral grey
        nfInk:     "#131313",  // requested near-black
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(135deg, #5B7C88, #8FBAC7)',
        'mint-gradient':  'linear-gradient(135deg, #B3E1E8, #5B7C88)',
        'nf-gradient':    'linear-gradient(135deg, #C1DBEC 0%, #B3E1E8 55%, #C2CED2 100%)',
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
