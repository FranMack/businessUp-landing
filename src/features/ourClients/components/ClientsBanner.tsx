"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const clients = [
  { title: "utn", path: "/clients-images/caja_medicos.png" },
  { title: "Caja de Medicos", path: "/clients-images/utn.png" },
  { title: "Ceys", path: "/clients-images/ceys.png" },
  { title: "Monekit", path: "/clients-images/monekit.png" },
  { title: "flexo", path: "/clients-images/flexo.png" },
];

export const ClientsBanner = () => {
   const refBanner = useScrollAnimation<HTMLDivElement>("efectoReveal");
  return (
    <div ref={refBanner} className="w-[80%] h-[7vh]  mx-auto ">
      <Marquee
        speed={40}
        gradient={true}
        className="h-full w-full overflow-y-hidden "
      >
        {clients.map((item) => {
          return (
            <figure
              key={item.title}
              className={` h-full  overflow-hidden mx-[2vw] `}
            >
              <Image
                width={200}
                height={100}
                className="h-full object-cover object-center"
                src={item.path}
                alt="decoration image"
              />
            </figure>
          );
        })}
      </Marquee>
    </div>
  );
};
