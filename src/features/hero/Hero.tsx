import Image from "next/image";
import { HeroImageDecorators } from "./components/HeroImageDecorators";
export const Hero = () => {
  return (
    <section id="hero" className="w-screen h-screen relative">
      <HeroImageDecorators />
      <Image
        fill
        className="w-full h-full object-cover"
        src="/hero-images/hero_background.webp"
        alt="background"
      />

      <div className="w-full h-full absolute flex text-[#ffff] text-start">
        <div className="a h-full w-1/2 flex justify-center items-center ">
          <div className="w-[80%] flex flex-col gap-y-[2vh]">
            <h1 className=" text-[3rem] font-semibold">
              Tecnológia de vanguardia para líderes visionarios
            </h1>
            <h2 className="text-[1.1rem]">
              Te ayudamos a pensar distinto, operar mejor y liderar con
              <br />
              tecnología, para que te adelantes al cambio y ejecutes con
              <br />
              precisión.
            </h2>
            <h3 className="mt-[3vh] text-[1.3rem]">
              ¿Estás listo para crecer sin límites?
            </h3>
          </div>
        </div>

        <div className=" h-full w-1/2 text-[1.5rem] flex justify-center items-end">
          <div className="w-[75%] aspect-square relative mb-[5%]">
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
