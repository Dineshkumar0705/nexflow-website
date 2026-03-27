"use client";

import { useEffect, useState } from "react";

type UseScrollOptions = {
  threshold?: number; // px value to trigger scroll state
};

export function useScroll(options: UseScrollOptions = {}) {
  const { threshold = 40 } = options;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > threshold;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll(); // initial check

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return {
    scrolled,
  };
}