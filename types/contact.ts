/* ======================================================
   NEXFLOW DESIGN SYSTEM — CONTACT TYPES
   Production-ready form structure + validation support
====================================================== */

/* =========================
   MAIN CONTACT FORM TYPE
========================= */

export type ContactForm = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

/* =========================
   FORM STATE (UI HANDLING)
========================= */

export type ContactFormState = {
  loading: boolean;
  success: boolean;
  error: string | null;
};

/* =========================
   VALIDATION ERRORS
========================= */

export type ContactFormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

/* =========================
   INITIAL STATES
========================= */

export const INITIAL_CONTACT_FORM: ContactForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export const INITIAL_FORM_STATE: ContactFormState = {
  loading: false,
  success: false,
  error: null,
};

/* =========================
   VALIDATION FUNCTIONS
   (lightweight SaaS validation)
========================= */

export const validateContactForm = (
  data: ContactForm
): ContactFormErrors => {

  const errors: ContactFormErrors = {};

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  // Email validation (basic regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = "Enter a valid email address";
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};

/* =========================
   HELPER: CHECK IF VALID
========================= */

export const isFormValid = (errors: ContactFormErrors) => {
  return Object.keys(errors).length === 0;
};