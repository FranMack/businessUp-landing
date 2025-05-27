"use client";
import { useScreenSize } from "@/hooks/useScreenSize";
import { MobileNavbar } from "./MobileNavbar";
import { WebNavbar } from "./WebNavbar";

export const Navbar = () => {
  const { screenWidth } = useScreenSize();
  return <>{screenWidth > 1024 ? <WebNavbar /> : <MobileNavbar />}</>;
};
