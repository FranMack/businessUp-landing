"use client";
import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "../../hooks";

export const WebNavbar = () => {
  const navList = [
    { title: "Home", url: "/#home" },
    { title: "¿Quienes somos?", url: "/#aboutUs" },
    { title: "Servicios", url: "/#ourServices" },
    { title: "Clientes", url: "/#ourClients" },
    { title: "Contacto", url: "/#contact" },
  ];

  const { scrollPosition } = useScrollPosition();

  return (
    <nav
      className={`fixed z-50 w-screen h-[10vh] flex justify-between px-[5%] ${
        scrollPosition > 100 ? "bg-[#ffff] shadow-lg" : ""
      }`}
    >
      <figure className="w-[12%] relative">
        <Image
          fill
          className="w-full object-contain absolute"
          src={`${
            scrollPosition > 100
              ? "/ui/logo_original.webp"
              : "/ui/logo_blanco.png"
          }`}
          alt="background"
        />
      </figure>

      <ul
        className={`flex items-center gap-x-[2vw] ${
          scrollPosition > 100 ? "text-primary" : "text-[#ffff]"
        }  text-[1rem]`}
      >
        {navList.map((item) => {
          return (
            <Link
              className="relative inline-block transition-all duration-500 hover:text-secondary after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-500"
              key={item.title}
              href={item.url}
            >
              {item.title}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
