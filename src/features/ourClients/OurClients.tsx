"use client";
import { useScreenSize } from "@/hooks/useScreenSize";
import Image from "next/image";
import { Title } from "../commons/Title";
import { ClientsBanner } from "./components/ClientsBanner";
import { ClientsImageDecorators } from "./components/ClientsImageDecorators";
import { OurStrenght } from "./components/OurStrenght";

export const OurClients = () => {
  const { screenWidth } = useScreenSize();
  return (
    <section
      id="ourClients"
      className="w-screen min-h-screen relative flex flex-col xs:gap-y-[5vh] lg:gap-y-[6vh]  "
    >
      <ClientsImageDecorators />
      <div className=" xs:w-full h-fit flex xs:justify-center lg:justify-start mt-[10vh] lg:pl-[5%]">
        <Title
          title1="Que confían en nosotros"
          title2="Clientes y Partners"
          align={`${screenWidth > 1024 ? "start" : "center"}`}
          color="text-primary text-opacity-20"
        />
      </div>

      <figure className="absolute h-full w-full z-[-1] overflow-hidden botton-0 ">
        <Image
          width={1000}
          height={500}
          className="h-full w-full object-cover object-bottom  "
          src="/clients-images/gray_backround.webp"
          alt="background"
        />
      </figure>

      <ClientsBanner />
      <OurStrenght />
    </section>
  );
};
