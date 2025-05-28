"use client";
import { MenuMobileContext } from "@/context/mobileMenu.context";
import Link from "next/link";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { SocialMedia } from "../commons/Social Media";

export const MobileMenu = () => {
  const navList = [
    { title: "Home", url: "/#home" },
    { title: "¿Quienes somos?", url: "/#aboutUs" },
    { title: "Servicios", url: "/#ourServices" },
    { title: "Clientes", url: "/#ourClients" },
    { title: "Contacto", url: "/#contact" },
  ];

  const { menuMobileOpen, toggleMenuMobile } = useContext(MenuMobileContext);
  return (
    <>
      <div
        onClick={toggleMenuMobile}
        className={`top-0 w-screen h-[100vh] fixed z-50 ${
          menuMobileOpen ? "translate-x-0" : "translate-x-[100vw]"
        } bg-black opacity-50`}
      ></div>
      <div
        className={`fixed  w-[50vw] h-dvh flex flex-col justify-center items-center bg-[#ffff] z-50 top-0 ${
          menuMobileOpen ? "translate-x-0" : "translate-x-[200vw]"
        } right-0 transition-transform duration-1000`}
      >
        <IoMdClose
          onClick={() => {
            toggleMenuMobile();
          }}
          className="absolute top-0 right-0 text-[1.5rem] text-[#693f91]"
        />

        <hr className="w-[80%] border-b-1 border-primary" />
        <ul
          className={`flex flex-col items-center gap-y-[4vh]  text-[1.2rem] text-primary my-[5vh]`}
        >
          {navList.map((item) => {
            return (
              <Link
                onClick={() => {
                  toggleMenuMobile();
                }}
                className="relative"
                key={item.title}
                href={item.url}
              >
                {item.title}
              </Link>
            );
          })}
        </ul>
        <hr className="w-[80%] border-b-1 border-primary" />
        <div className="w-full h-[3.5vh]  flex justify-center items-center gap-x-[5vw] my-[5vh]">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};
