"use client";
import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0); // default inicial sin acceso a window

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      setScreenWidth(window.innerWidth);
    };

    handleResize(); // inicializa el valor al montar

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenWidth };
};