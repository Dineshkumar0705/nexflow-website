"use client";

import { motion } from "framer-motion";
import React from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: boolean;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 40,
  scale = false,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: y,
        scale: scale ? 0.96 : 1,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // premium cubic-bezier
      }}
    >
      {children}
    </motion.div>
  );
}