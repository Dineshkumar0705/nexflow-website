"use client";

/* ======================================================
   NEXFLOW UI — MODAL COMPONENT
   Production-grade modal with overlay + animation
====================================================== */

import React, { useEffect } from "react";
import clsx from "clsx";

/* =========================
   TYPES
========================= */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

/* =========================
   SIZE STYLES
========================= */

const SIZES = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

/* =========================
   COMPONENT
========================= */

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}: ModalProps) {

  /* ESC CLOSE */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  /* PREVENT SCROLL */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="
      fixed inset-0 z-[1000]
      flex items-center justify-center
      px-4
      "
    >

      {/* OVERLAY */}
      <div
        className="
        absolute inset-0
        bg-black/40 backdrop-blur-sm
        animate-fadeIn
        "
        onClick={onClose}
      />

      {/* MODAL BOX */}
      <div
        className={clsx(
          "relative z-10 w-full",
          SIZES[size],

          "bg-white rounded-2xl shadow-2xl",
          "p-6 md:p-8",

          "animate-scaleIn"
        )}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">

          {title && (
            <h2 className="text-xl font-semibold text-gray-800">
              {title}
            </h2>
          )}

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="
            text-gray-500 hover:text-gray-800
            text-lg font-bold
            "
            aria-label="Close modal"
          >
            ✕
          </button>

        </div>

        {/* CONTENT */}
        <div>
          {children}
        </div>

      </div>

    </div>
  );
}