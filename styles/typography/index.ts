/* ======================================================
   NEXFLOW DESIGN SYSTEM — TYPOGRAPHY
   Consistent text styles across the app
====================================================== */

export const TYPOGRAPHY = {
  /* =========================
     FONT FAMILY
  ========================= */
  font: {
    primary: "'Inter', sans-serif",
    secondary: "'Poppins', sans-serif",
  },

  /* =========================
     HEADINGS
  ========================= */
  heading: {
    h1: "text-4xl md:text-6xl font-bold tracking-tight leading-tight",
    h2: "text-3xl md:text-5xl font-bold tracking-tight",
    h3: "text-2xl md:text-3xl font-semibold",
    h4: "text-xl md:text-2xl font-semibold",
  },

  /* =========================
     BODY TEXT
  ========================= */
  body: {
    large: "text-lg md:text-xl leading-relaxed text-gray-700",
    base: "text-base md:text-lg leading-relaxed text-gray-700",
    small: "text-sm text-gray-500",
  },

  /* =========================
     LABELS / UI TEXT
  ========================= */
  ui: {
    label: "text-sm font-medium text-gray-600",
    caption: "text-xs text-gray-400",
    button: "text-sm font-semibold",
  },

  /* =========================
     BRAND TEXT (IMPORTANT 🔥)
  ========================= */
  brand: {
    gradient:
      "bg-gradient-to-r from-nexflowGreen to-nexflowOrange bg-clip-text text-transparent",
  },

  /* =========================
     SPECIAL TEXT STYLES
  ========================= */
  highlight: "text-nexflowGreen font-semibold",
  accent: "text-nexflowOrange font-medium",
};

/* ======================================================
   TEXT UTIL HELPERS (OPTIONAL)
====================================================== */

export const TEXT = {
  center: "text-center",
  left: "text-left",
  right: "text-right",

  truncate: "truncate",
  clamp2: "line-clamp-2",
  clamp3: "line-clamp-3",
};