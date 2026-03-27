"use client";

/* ======================================================
   NEXFLOW UI — BUTTON COMPONENT
   Production-grade, scalable button system
====================================================== */

import React from "react";
import clsx from "clsx";

/* =========================
   TYPES
========================= */

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
}

/* =========================
   VARIANT STYLES
========================= */

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-nexflowGreen text-white hover:bg-nexflowGreen/90 shadow-md",

  secondary:
    "bg-nexflowOrange text-white hover:bg-nexflowOrange/90 shadow-md",

  outline:
    "border border-nexflowGreen text-nexflowGreen hover:bg-nexflowGreen hover:text-white",

  ghost:
    "text-gray-700 hover:bg-gray-100",

  danger:
    "bg-red-600 text-white hover:bg-red-700 shadow-md",
};

/* =========================
   SIZE STYLES
========================= */

const SIZES: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

/* =========================
   COMPONENT
========================= */

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2",
        "rounded-full font-semibold",
        "transition-all duration-200 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-nexflowGreen/40",

        VARIANTS[variant],
        SIZES[size],

        fullWidth && "w-full",

        (disabled || loading) && "opacity-60 cursor-not-allowed",

        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {/* LOADING SPINNER */}
      {loading && (
        <span
          className="
          w-4 h-4
          border-2 border-white/60
          border-t-white
          rounded-full
          animate-spin
          "
        />
      )}

      {children}
    </button>
  );
}