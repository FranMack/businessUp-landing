"use client";
import Image from "next/image";
import Link from "next/link";
export const Navbar = () => {

    const navList=[{title:"Home",url:""},{title:"¿Quienes somos?",url:""},{title:"Metodología",url:""},{title:"Contacto",url:""}]

  return (
    <nav className="fixed z-50 w-screen h-[10vh] flex justify-between px-[5%]">
      <figure className="w-[12%] relative">
        <Image
          fill
          className="w-full object-contain absolute"
          src="/ui/logo_blanco.png"
          alt="background"
        />
      </figure>

      <ul className="flex items-center gap-x-[2vw] text-[#ffff] text-[1rem]">
      {navList.map((item)=>{
        return(
            <Link key={item.title} href={item.url}>{item.title}</Link>
        )
      })}
      </ul>
    </nav>
  );
};
