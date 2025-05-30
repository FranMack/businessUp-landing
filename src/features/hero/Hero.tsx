import Image from "next/image";
import { HeroImageDecorators } from "./components/HeroImageDecorators";
export const Hero = () => {
  return (
    <section id="hero" className="w-screen h-screen relative ">
      {<HeroImageDecorators />}
      <Image
        fill
        className="w-full h-full object-cover"
        src="/hero-images/hero_background.webp"
        alt="background"
      />

      <div className="w-full h-full absolute flex xs:flex-col sm:flex-row text-[#ffff] text-start xs:pt-[10vh] lg:pt-0 ">
        <div className=" h-full xs:w-full lg:w-1/2 flex justify-center items-center efectoReveal ">
          <div className="w-[80%] flex flex-col gap-y-[2vh]">
            <h1 className=" xs:text-[2.2rem] xs:leading-[2.5rem] lg:text-[3rem] lg:leading-normal font-semibold">
              Tecnología de vanguardia para líderes visionarios
            </h1>
            <h2 className=" xs:text-[1rem] lg:text-[1.1rem] pr-[10%]">
              Te ayudamos a pensar distinto, operar mejor y liderar con
              tecnología, para que te adelantes al cambio y ejecutes con
  
              precisión.
            </h2>
            <h3 className="lg:mt-[3vh] xs:text-[1.15rem] lg:text-[1.3rem]">
              ¿Estás listo para crecer sin límites?
            </h3>
          </div>
        </div>

        <div className=" h-full xs:w-full  lg:w-1/2 text-[1.5rem] flex justify-center items-end ">
          <div className="xs:w-[80%] lg:w-[75%] aspect-square relative mb-[5%] heroImageReveal">
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
