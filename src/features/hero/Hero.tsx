import Image from "next/image";
import { HeroImageDecorators } from "./components/HeroImageDecorators";
export const Hero = async () => {
  return (
    <section id="hero" className="w-screen h-screen relative ">
      {<HeroImageDecorators />}
      <Image
        fill
        className="w-full h-full object-cover"
        src="/hero-images/hero_background.webp"
        alt="background"
      />

      <div className="w-full h-full absolute flex xs:flex-col phoneLandscape:flex-row lg:flex-row text-[#ffff] text-start xs:pt-[10vh] phoneLandscape:pt-[10vh] md:pt-[15vh] lg:pt-0 ">
        <div className=" h-full xs:w-full lg:w-1/2 flex justify-center items-center efectoReveal">
          <div className="w-[80%] flex flex-col gap-y-[2vh]">
            <h1 className=" xs:text-[2.2rem] xs:leading-[2.5rem] phoneLandscape:text-[2.2rem] phoneLandscape:leading-[2.5rem] md:text-[3rem]  md:leading-[3.5rem] font-semibold">
              Tecnología de vanguardia para líderes visionarios
            </h1>
            <h2 className=" xs:text-[1rem] phoneLandscape:text-[1rem] md:text-[1.25rem] pr-[10%]">
              Te ayudamos a pensar distinto, a operar mejor y a liderar con
              tecnología, para que te adelantes al cambio y ejecutes con
              precisión.
            </h2>
            <h3 className="lg:mt-[3vh] xs:text-[1.15rem] lg:text-[1.6rem]">
              ¿Estás listo para crecer sin límites?
            </h3>
          </div>
        </div>

        <div className=" h-full xs:w-full  lg:w-1/2 text-[1.5rem] flex justify-center items-end ">
          <div className="xs:w-[80%] lg:w-[75%] aspect-square relative lg:mb-[10%] heroImageReveal">
            <Image
              fill
              className="w-full object-cover"
              src="/hero-images/hero_center.webp"
              alt="background"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
