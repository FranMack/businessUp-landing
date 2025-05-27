"use client";
import { MenuMobileContext } from "@/context/mobileMenu.context";
import Image from "next/image";
import { useContext } from "react";
export const MobileNavbar = () => {
  
  const {toggleMenuMobile}=useContext(MenuMobileContext)
  return (
    <nav
      className={`lg:hidden fixed z-50 w-screen h-[7.5vh] xs:flex justify-between items-center px-[2%] bg-[#ffff]`}
    >
      <figure className="h-full w-1/2  ">
        <Image
          width={100}
          height={50}
          className="h-full w-full object-cover "
          src={`/ui/logo_original.webp`}
          alt="background"
        />
      </figure>
      <button className=" text-[1.5rem] text-primary " onClick={() => {toggleMenuMobile()}}>
        ☰
      </button>
    </nav>
  );
};
