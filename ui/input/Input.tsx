"use client";

/* ======================================================
   NEXFLOW UI — INPUT COMPONENT
   SaaS-grade input with label, error, and states
====================================================== */

import React from "react";
import clsx from "clsx";

/* =========================
   TYPES
========================= */

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

/* =========================
   COMPONENT
========================= */

export default function Input({
  label,
  error,
  helperText,
  fullWidth = true,
  className,
  id,
  ...props
}: InputProps) {

  const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className={clsx("flex flex-col gap-1", fullWidth && "w-full")}>

      {/* LABEL */}
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-600"
        >
          {label}
        </label>
      )}

      {/* INPUT */}
      <input
        id={inputId}
        className={clsx(
          "w-full px-4 py-3 rounded-xl",
          "border border-gray-300",
          "bg-white/80 backdrop-blur-md",

          "text-gray-800 text-sm",
          "placeholder:text-gray-400",

          "outline-none transition-all duration-200",

          "focus:border-nexflowGreen focus:ring-2 focus:ring-nexflowGreen/20",

          error &&
            "border-red-500 focus:ring-red-200 focus:border-red-500",

          className
        )}
        {...props}
      />

      {/* HELPER / ERROR */}
      {(error || helperText) && (
        <span
          className={clsx(
            "text-xs mt-1",
            error ? "text-red-500" : "text-gray-400"
          )}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
}