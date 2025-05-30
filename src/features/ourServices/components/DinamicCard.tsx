"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  image: StaticImageData;
  paragraph1: string;
  paragraph2: string;
}

export const DinamicServiceCard = ({
  title,
  image,
  paragraph1,
  paragraph2,
}: Props) => {
  const refServiceCard = useScrollAnimation<HTMLDivElement>("efectoReveal");
  return (
    <div
      ref={refServiceCard!}
      className="w-full xs:h-[50vh] lg:h-[60vh] perspective"
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group">
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-lg bg-gradient-soft custom-shadow p-4 group-hover:rotate-card">
          <figure className="w-[70%] aspect-square relative">
            <Image
              fill
              className="object-contain"
              src={image}
              alt={`${title} image`}
            />
          </figure>
          <h3 className="text-primary xs:text-[1.6rem] lg:text-[1.8rem] font-semibold text-center mt-[1vh]">
            {title}
          </h3>
          <small className="absolute bottom-3 right-5 text-primary font-semibold">Ver más</small>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-card-back flex flex-col justify-center items-center rounded-lg bg-white shadow-lg p-6 ">
          <p className="text-center text-base text-gray-700 mb-4">
            {paragraph1}
          </p>
          <p className="text-center text-base text-gray-700">{paragraph2}</p>
        </div>
      </div>
    </div>
  );
};
