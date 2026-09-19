/* ======================================================
   NEXFLOW DESIGN SYSTEM — SPACING
   Consistent spacing scale across UI
====================================================== */

export const SPACING = {
  /* =========================
     BASE SCALE (8px system)
  ========================= */
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
  xxxl: "64px",

  /* =========================
     SECTION SPACING
  ========================= */
  sectionPadding: "96px",
  sectionPaddingMobile: "64px",

  containerPadding: "24px",
  containerPaddingMobile: "16px",

  /* =========================
     COMPONENT SPACING
  ========================= */
  cardPadding: "24px",
  cardGap: "16px",

  buttonPaddingX: "24px",
  buttonPaddingY: "10px",

  inputPaddingX: "16px",
  inputPaddingY: "12px",

  /* =========================
     BORDER RADIUS (VERY IMPORTANT 🔥)
  ========================= */
  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    xl: "24px",
    full: "9999px", // pill (CTA buttons, logo)
  },

  /* =========================
     LAYOUT WIDTHS
  ========================= */
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1440px",
  },

  /* =========================
     Z-INDEX SYSTEM
  ========================= */
  zIndex: {
    base: 0,
    dropdown: 50,
    sticky: 100,
    overlay: 500,
    modal: 1000,
  },
};

/* ======================================================
   GAP PRESETS (for grid/flex)
====================================================== */

export const GAP = {
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
};

/* ======================================================
   LAYOUT HELPERS (optional usage)
====================================================== */

export const LAYOUT = {
  section: {
    padding: `${SPACING.sectionPadding} ${SPACING.containerPadding}`,
  },
  card: {
    padding: SPACING.cardPadding,
    borderRadius: SPACING.radius.lg,
  },
};