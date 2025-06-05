"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type align= 'center' |'start'|'end'
interface Props {
  title1: string;
  title2: string;
  align:align;
  color?:string
  
}

export const Title = ({ title1, title2,align="center",color="text-[#e6e6e6]" }: Props) => {
  const refTitle = useScrollAnimation<HTMLDivElement>("efectoReveal");
  return (
    <div ref={refTitle} className={`relative flex justify-${align} items-end w-full xs:h-[3rem]  lg:h-[7.5rem] mb-[1rem] z-10 `}>
      <h2 className=" z-10 xs:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] absolute text-primary font-bold bottom-[-1.5rem]">
        {title1}
      </h2>
      <h3 className={`xs:text-[2.5rem] md:text-[4.5rem]  lg:text-[7.5rem] absolute ${color} font-bold leading-none `}>
        {title2}
      </h3>
    </div>
  );
};
