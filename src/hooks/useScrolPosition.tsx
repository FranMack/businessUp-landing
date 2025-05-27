"use client";
import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [scrollPosition, setScrolPosition] = useState<number>(0);

  useEffect(() => {
    function sizeHandler() {
      setScrolPosition(window.scrollY);
    }

    window.addEventListener("scroll", sizeHandler);
    return window.addEventListener("scroll", sizeHandler);
  }, []);

  return {scrollPosition}
}

