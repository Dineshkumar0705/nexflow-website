/* ======================================================
   NEXFLOW DESIGN SYSTEM — COLORS
   Centralized color tokens for entire app
====================================================== */

export const COLORS = {
  /* =========================
     BRAND
  ========================= */
  primary: "#00A86B",        // Nexflow Green
  primaryDark: "#008F5A",
  primaryLight: "#33C48A",

  secondary: "#FF7A00",      // Nexflow Orange
  secondaryDark: "#E66D00",
  secondaryLight: "#FF9A3D",

  /* =========================
     BACKGROUND
  ========================= */
  background: "#FDFBF7",     // light cream
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
  success: "#16A34A",
  warning: "#F59E0B",
  error: "#DC2626",
  info: "#2563EB",

  /* =========================
     GRADIENTS (IMPORTANT 🔥)
  ========================= */
  gradients: {
    primary:
      "linear-gradient(135deg, #00A86B 0%, #33C48A 100%)",

    secondary:
      "linear-gradient(135deg, #FF7A00 0%, #FF9A3D 100%)",

    brand:
      "linear-gradient(135deg, #00A86B 0%, #FF7A00 100%)",
  },

  /* =========================
     SHADOW COLORS (UI polish)
  ========================= */
  shadow: {
    primary: "rgba(0, 168, 107, 0.25)",
    secondary: "rgba(255, 122, 0, 0.25)",
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