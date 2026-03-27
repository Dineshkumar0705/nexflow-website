import { Variants } from "framer-motion";

/* ======================================================
   BASE TRANSITIONS
====================================================== */

export const defaultTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
};

export const fastTransition = {
  duration: 0.35,
  ease: "easeOut",
};

/* ======================================================
   FADE
====================================================== */

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

/* ======================================================
   FADE + UP (Most used)
====================================================== */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/* ======================================================
   FADE + DOWN
====================================================== */

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/* ======================================================
   FADE + LEFT
====================================================== */

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/* ======================================================
   FADE + RIGHT
====================================================== */

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/* ======================================================
   SCALE (cards, buttons)
====================================================== */

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

/* ======================================================
   STAGGER (for lists / grids)
====================================================== */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/* ======================================================
   HOVER EFFECTS (micro interactions)
====================================================== */

export const hoverScale = {
  whileHover: {
    scale: 1.04,
    transition: fastTransition,
  },
};

export const hoverLift = {
  whileHover: {
    y: -6,
    transition: fastTransition,
  },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
    transition: fastTransition,
  },
};

/* ======================================================
   BUTTON PRESS
====================================================== */

export const tapScale = {
  whileTap: {
    scale: 0.96,
  },
};

/* ======================================================
   COMPOSED (READY-TO-USE)
====================================================== */

export const cardAnimation = {
  ...hoverLift,
  ...hoverScale,
  ...hoverGlow,
};

export const buttonAnimation = {
  ...hoverScale,
  ...tapScale,
};