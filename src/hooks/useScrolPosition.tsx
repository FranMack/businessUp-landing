"use client";
import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [scrollPosition, setScrolPosition] = useState<number>(0);

  useEffect(() => {
    function sizeHandler() {
      if (typeof window === "undefined") return;
      setScrolPosition(window.scrollY);
    }

    window.addEventListener("scroll", sizeHandler);
    return window.addEventListener("scroll", sizeHandler);
  }, []);

  return { scrollPosition };
}
