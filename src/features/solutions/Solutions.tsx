"use client";
import Image from "next/image";
import { createContext, useState } from "react";
import { Title } from "../commons/Title";
import { SolutionCenter } from "./components/SolutionCenter";
import { SolutionsImageDecorators } from "./components/SolutionsImageDecorators";
import { ClienteIcons, SearchIncon, TargetIcon } from "@/app/utils/icons";

type solutionsTypes = "desarrollos" | "procesos" | "clientes" | ""|'notImplemented';

interface SolutionsContextType {
  focus: solutionsTypes;
  handleFocus: (solution: solutionsTypes) => void;
}
export const SolutionsContext = createContext<SolutionsContextType>({
  focus: "",
  handleFocus: () => {},
});
const { Provider } = SolutionsContext;

export const Solutions = () => {
  const [focus, setFocus] = useState<solutionsTypes>("");

  const handleFocus = (solution: solutionsTypes) => {
    setFocus(solution);
  };

  const proviverValue: SolutionsContextType = {
    focus,
    handleFocus,
  };

  return (
    <Provider value={proviverValue}>
      <section
        id="solutions"
        className="w-screen h-min-screen relative flex flex-col justify-center items-center "
      >
        <SolutionsImageDecorators />
        <Title
          color="text-primary text-opacity-20"
          title1="Soluciones Integrales"
          title2="Soluciones"
          align="center"
        />
        <figure className="absolute lg:h-[93%] xs:w-[40%] lg:w-[22%] right-0 botton-0 xs:hidden lg:block ">
          <Image
            width={2000}
            height={500}
            className="h-full object-contain"
            src="/soluciones-images/ELEMENTO-04.png"
            alt="background"
          />
        </figure>

        <figure className="absolute bottom-0 xs:h-full lg:h-[93%] w-full z-[-1] overflow-hidden">
          <Image
            width={2000}
            height={500}
            className="w-full xs:h-full lg:h-fit object-cover"
            src="/soluciones-images/gray_backround.webp"
            alt="background"
          />
        </figure>

        <div className="  lg:h-[80vh]  xs:w-[75%] lg:w-[90%] flex flex-col gap-y-[4vh] items-center xs:mt-[3vh] lg:mt-[8vh] relative bg-red-3 ">
               <div className="xs:w-full lg:w-1/3 h-fit  flex flex-col items-center text-center lg:absolute left-0 xs:bottom-0 lg:bottom-auto ">
            <div
              className={`transition-all duration-700 ease-in-out transform  ${
                   focus !== "notImplemented"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none absolute"
              }`}
              
            >
            
                 <div className="lg:hidden xs:h-[8vh] sm:h-[12vh] w-full flex justify-center ">
                       <TargetIcon
                          className={`${
                            focus === "desarrollos" ? "fill-[#ffff]" : "fill-[#693f91"
                          } transition-colors duration-1000 `}
                        />

                </div>
              <h3 className="text-primary  xs:text-[1.2rem] lg:text-[2rem] font-semibold">
                Innovación Tecnológica
              </h3>
              <p className="lg:px-[13%] xs:text-[0.9rem] lg:text-[1rem]">
                Desarrollamos soluciones que no solo funcionan: te representan.
                Llevamos a tu negocio a la vanguardia, liderá tu industria
                creando tendencias.
              </p>
            </div>
          </div>
          <SolutionCenter />

           <div className=" xs:w-full lg:w-1/3 h-fit  flex flex-col items-center text-center lg:absolute bottom-0">
              <div
                className={`transition-all duration-700 ease-in-out transform ${
                    focus !== "notImplemented"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5 pointer-events-none absolute"
                }`}
              >

                 <div className="lg:hidden xs:h-[8vh] sm:h-[12vh] w-full flex justify-center ">
                       <ClienteIcons
                          className={`${
                            focus === "desarrollos" ? "fill-[#ffff]" : "fill-[#693f91"
                          } transition-colors duration-1000 `}
                        />

                </div>
              
                <h3 className="text-primary  xs:text-[1.2rem] lg:text-[2rem] font-semibold transition-all  duration-1000">
                  Soluciones Visibles
                </h3>
          <p className="lg:px-[5%] xs:text-[0.9rem] lg:text-[1rem]">
                  Innovación que funciona y además se percibe. Convertimos
                  inversiones tecnológicas en avances visibles, comprensibles y
                  alineados con los objetivos de quienes lideran y de quienes
                  evalúan resultados.
                </p>
              </div>
            </div>

               <div className="xs:w-full lg:w-1/3 h-fit  flex flex-col items-center text-center lg:absolute right-0 xs:bottom-0 lg:bottom-auto">
            <div
              className={`transition-all duration-700 ease-in-out transform ${
                focus !== "notImplemented"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none absolute"
              }`}
            >
                 <div className="lg:hidden xs:h-[8vh] sm:h-[12vh] w-full flex justify-center ">
                       <SearchIncon
                          className={`${
                            focus === "desarrollos" ? "fill-[#ffff]" : "fill-[#693f91"
                          } transition-colors duration-1000 `}
                        />

                </div>
              <h3 className="text-primary xs:text-[1.2rem] lg:text-[2rem] font-semibold">
                Arquitectura operativa
              </h3>
                  <p className="lg:px-[14%] xs:text-[0.9rem] lg:text-[1rem]">
                Innovación que funciona y además se percibe. Convertimos
                inversiones tecnológicas en avances visibles, comprensibles y
                alineados con los objetivos de quienes lideran y de quienes
                evalúan resultados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Provider>
  );
};
