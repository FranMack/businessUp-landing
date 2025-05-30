"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  image: StaticImageData;
  paragraph1: string;
  paragraph2: string;
}

export const ServiceCard = ({
  title,
  image,
  paragraph1,
  paragraph2,
}: Props) => {

    const refServiceCard = useScrollAnimation<HTMLDivElement>("efectoReveal");
  return (
    <div
    ref={refServiceCard}
      key={title}
      className="w-[100%] h-full  relative z-30  flex flex-col items-center rounded-lg bg-gradient-soft custom-shadow pb-5  transition-all duration-1000 hover:shadow-2xl hover:shadow-violet-400 "
    >
      <figure className="w-[70%] aspect-square relative ">
        <Image
          fill
          className=" w-full  object-contain"
          src={image}
          alt={`${title} image`}
        />
      </figure>
      <div className="w-[80%] text-center flex flex-col gap-y-[1vh]">
        <h3 className="text-primary xs:text-[1.3rem] lg:text-[1.7rem] font-semibold">{title}</h3>
        <p className="text-[0.95rem]">{paragraph1}</p>

        <p className="text-[0.95rem]">{paragraph2}</p>
      </div>
    </div>
  );
};
