/* ======================================================
   CLASSNAME MERGE (Tailwind helper)
====================================================== */

export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ======================================================
   FORMAT DATE
====================================================== */

export function formatDate(date: Date | string) {
  const d = new Date(date);

  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ======================================================
   TRUNCATE TEXT
====================================================== */

export function truncate(text: string, length = 100) {
  if (!text) return "";

  return text.length > length
    ? text.slice(0, length) + "..."
    : text;
}

/* ======================================================
   OPEN EXTERNAL LINK (safe)
====================================================== */

export function openExternal(url: string) {
  if (typeof window === "undefined") return;

  window.open(url, "_blank", "noopener,noreferrer");
}

/* ======================================================
   COPY TO CLIPBOARD
====================================================== */

export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/* ======================================================
   SCROLL TO ELEMENT
====================================================== */

export function scrollToId(id: string) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

/* ======================================================
   DEBOUNCE (performance)
====================================================== */

export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay = 300
) {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

/* ======================================================
   GENERATE RANDOM ID
====================================================== */

export function generateId(prefix = "id") {
  return `${prefix}_${Math.random().toString(36).substring(2, 9)}`;
}

/* ======================================================
   CAPITALIZE TEXT
====================================================== */

export function capitalize(text: string) {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/* ======================================================
   CHECK EMAIL VALID
====================================================== */

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}