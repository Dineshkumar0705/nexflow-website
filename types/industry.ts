/* ======================================================
   NEXFLOW DESIGN SYSTEM — INDUSTRY TYPES
   Scalable structure for industries & use-cases
====================================================== */

/* =========================
   BASE INDUSTRY TYPE
========================= */

export type Industry = {
  id: string;
  title: string;
  description: string;
  icon: any; // lucide icon (React component)

  /* Optional enrichments */
  features?: string[];
  benefits?: string[];
  useCases?: string[];
};


/* =========================
   INDUSTRY CARD (UI VARIANT)
========================= */

export type IndustryCard = {
  title: string;
  description: string;
  icon: any;
};


/* =========================
   INDUSTRY DETAIL (FUTURE PAGE)
========================= */

export type IndustryDetail = {
  id: string;
  title: string;
  description: string;

  problems: string[];
  solutions: string[];
  outcomes: string[];

  icon?: any;
};


/* =========================
   INDUSTRY LIST RESPONSE (API READY)
========================= */

export type IndustryResponse = {
  success: boolean;
  data: Industry[];
};


/* =========================
   MOCK DATA TYPE SAFETY
========================= */

export type IndustryList = Industry[];


/* =========================
   CONSTANT HELPERS
========================= */

export const INDUSTRY_IDS = {
  HEALTHCARE: "healthcare",
  BPO: "bpo",
  CALL_CENTER: "call-center",
  HR: "hr",
  FINANCE: "finance",
  ENTERPRISE: "enterprise",
} as const;

export type IndustryId =
  (typeof INDUSTRY_IDS)[keyof typeof INDUSTRY_IDS];


/* =========================
   UI STATE (OPTIONAL)
========================= */

export type IndustryState = {
  selectedIndustry?: Industry;
  loading: boolean;
  error: string | null;
};