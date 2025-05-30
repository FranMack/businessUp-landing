"use client";
import { MenuMobileContext } from "@/context/mobileMenu.context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
export const MobileNavbar = () => {
  
  const {toggleMenuMobile}=useContext(MenuMobileContext)
  return (
    <nav
      className={`lg:hidden fixed z-50 w-screen xs:h-[8vh] sm:h-[12vh] md:h-[8vh] flex justify-between items-center px-[2%] bg-[#ffff]`}
    >
      <Link href="/#home">
      <figure className="h-full">
        <Image
          width={100}
          height={50}
          className="h-full w-auto  object-cover "
          src={`/ui/logo_original.webp`}
          alt="background"
        />
      </figure>
      </Link>
      <button className=" text-[1.5rem] text-primary " onClick={() => {toggleMenuMobile()}}>
        ☰
      </button>
    </nav>
  );
};
