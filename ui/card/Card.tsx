"use client";

/* ======================================================
   NEXFLOW UI — CARD COMPONENT
   Flexible, SaaS-grade container system
====================================================== */

import React from "react";
import clsx from "clsx";

/* =========================
   TYPES
========================= */

type CardVariant = "default" | "glass" | "elevated" | "outline";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: CardVariant;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

/* =========================
   VARIANT STYLES
========================= */

const VARIANTS: Record<CardVariant, string> = {
  default:
    "bg-white border border-gray-200 shadow-sm",

  glass:
    "bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg",

  elevated:
    "bg-white border border-gray-100 shadow-xl",

  outline:
    "bg-transparent border border-gray-300",
};

/* =========================
   PADDING
========================= */

const PADDING = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

/* =========================
   COMPONENT
========================= */

export default function Card({
  children,
  variant = "default",
  hover = true,
  padding = "md",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl transition-all duration-300 ease-in-out",

        VARIANTS[variant],
        PADDING[padding],

        hover &&
          "hover:-translate-y-1 hover:shadow-2xl",

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}