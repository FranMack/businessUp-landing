"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

export const AboutUsPrincipalImage = () => {
  const refFigure = useScrollAnimation<HTMLElement>("efectoReveal");
  return (
    <figure ref={refFigure} className=" xs:w-full sm:w-1/2 lg:w-full lg:right-5 ">
      <Image
        width={1000}
        height={500}
        className="w-full  object-cover drop-shadow-lg"
        src="/about-us-images/notebook.webp"
        alt="background"
      />
    </figure>
  );
};
