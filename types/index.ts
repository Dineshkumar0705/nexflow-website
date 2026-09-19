/* ======================================================
   NEXFLOW DESIGN SYSTEM — TYPES ENTRY (BARREL FILE)
   Central export point for all TypeScript types
====================================================== */

/* =========================
   CORE TYPES
========================= */

export * from "./contact";
export * from "./industry";

/* =========================
   GLOBAL / COMMON TYPES
   (future-ready additions)
========================= */

/**
 * Generic API Response Type
 */
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

/**
 * Generic Async State (loading pattern)
 */
export type AsyncState<T> = {
  loading: boolean;
  data: T | null;
  error: string | null;
};

/**
 * Reusable Option Type (dropdowns, selects)
 */
export type Option = {
  label: string;
  value: string;
};

/**
 * ID Type (for scalability)
 */
export type ID = string | number;

/**
 * Nullable helper
 */
export type Nullable<T> = T | null;

/**
 * Optional helper
 */
export type Optional<T> = T | undefined;

/* =========================
   UI STATE TYPES
========================= */

/**
 * Generic UI state
 */
export type UIState = {
  loading?: boolean;
  disabled?: boolean;
  visible?: boolean;
};

/* =========================
   FUTURE EXTENSIONS
========================= */
/*
  Add below when needed:

  export * from "./project";
  export * from "./user";
  export * from "./auth";
*/