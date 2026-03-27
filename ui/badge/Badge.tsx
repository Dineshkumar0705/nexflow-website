"use client";

/* ======================================================
   NEXFLOW UI — BADGE COMPONENT
   Reusable, scalable, SaaS-grade badge
====================================================== */

import React from "react";
import clsx from "clsx";

/* =========================
   TYPES
========================= */

type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "outline"
  | "ghost";

type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

/* =========================
   VARIANT STYLES
========================= */

const VARIANTS: Record<BadgeVariant, string> = {
  primary:
    "bg-nexflowGreen/10 text-nexflowGreen border border-nexflowGreen/30",

  secondary:
    "bg-nexflowOrange/10 text-nexflowOrange border border-nexflowOrange/30",

  success:
    "bg-green-100 text-green-700 border border-green-200",

  warning:
    "bg-yellow-100 text-yellow-700 border border-yellow-200",

  error:
    "bg-red-100 text-red-700 border border-red-200",

  outline:
    "bg-transparent text-gray-700 border border-gray-300",

  ghost:
    "bg-gray-100 text-gray-600 border border-transparent",
};

/* =========================
   SIZE STYLES
========================= */

const SIZES: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-sm",
};

/* =========================
   COMPONENT
========================= */

export default function Badge({
  label,
  variant = "primary",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center",
        "rounded-full font-medium",
        "transition-all duration-200",

        VARIANTS[variant],
        SIZES[size],

        className
      )}
    >
      {label}
    </span>
  );
}