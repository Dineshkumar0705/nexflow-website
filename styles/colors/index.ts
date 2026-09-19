/* ======================================================
   NEXFLOW DESIGN SYSTEM — COLORS
   Centralized color tokens for entire app
====================================================== */

export const COLORS = {
  /* =========================
     BRAND
  ========================= */
  primary: "#5B7C88",        // Nexflow Green
  primaryDark: "#3F5A63",
  primaryLight: "#8FBAC7",

  secondary: "#C2CED2",      // Nexflow Orange
  secondaryDark: "#8A9296",
  secondaryLight: "#D9DEE0",

  /* =========================
     BACKGROUND
  ========================= */
  background: "#F5F9FA",     // light cream
  surface: "#FFFFFF",
  glass: "rgba(255,255,255,0.6)",

  /* =========================
     TEXT
  ========================= */
  textPrimary: "#111827",    // near black
  textSecondary: "#6B7280",  // gray
  textMuted: "#9CA3AF",

  /* =========================
     BORDER
  ========================= */
  border: "#E5E7EB",
  borderLight: "#F3F4F6",

  /* =========================
     STATES
  ========================= */
  success: "#5B7C88",
  warning: "#C9A96A",
  error: "#C98A8A",
  info: "#5B7C88",

  /* =========================
     GRADIENTS (IMPORTANT 🔥)
  ========================= */
  gradients: {
    primary:
      "linear-gradient(135deg, #5B7C88 0%, #8FBAC7 100%)",

    secondary:
      "linear-gradient(135deg, #C2CED2 0%, #D9DEE0 100%)",

    brand:
      "linear-gradient(135deg, #5B7C88 0%, #C2CED2 100%)",
  },

  /* =========================
     SHADOW COLORS (UI polish)
  ========================= */
  shadow: {
    primary: "rgba(127,168,184,0.25)",
    secondary: "rgba(194,206,210,0.25)",
  },
};

/* ======================================================
   CSS VARIABLE HELPER (OPTIONAL FUTURE)
====================================================== */

export const CSS_VARIABLES = {
  "--color-primary": COLORS.primary,
  "--color-secondary": COLORS.secondary,
  "--color-bg": COLORS.background,
  "--color-text": COLORS.textPrimary,
};