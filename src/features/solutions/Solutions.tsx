"use client";
import Image from "next/image";
import { createContext, useState } from "react";
import { Title } from "../commons/Title";
import { SolutionCenter } from "./components/SolutionCenter";
import { SolutionsImageDecorators } from "./components/SolutionsImageDecorators";

type solutionsTypes = "desarrollos" | "procesos" | "clientes" | "";

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
        className="w-screen h-screen relative flex flex-col justify-center items-center bf- "
      >
        <SolutionsImageDecorators />
        <Title
          color="text-primary text-opacity-20"
          title1="Soluciones Integrales"
          title2="Soluciones"
          align="center"
        />
        <figure className="absolute h-[100%] w-[22%] right-0 botton-0">
          <Image
            width={2000}
            height={500}
            className="h-full object-contain"
            src="/soluciones-images/ELEMENTO-04.png"
            alt="background"
          />
        </figure>

        <figure className="absolute bottom-0 h-full w-full z-[-1] overflow-hidden">
          <Image
            width={2000}
            height={500}
            className="w-full xs:h-full lg:h-fit object-cover"
            src="/soluciones-images/gray_backround.webp"
            alt="background"
          />
        </figure>

        <div className="h-[80%] w-[90%] flex mt-[8vh] ">
          <div className="w-1/3 h-full  flex flex-col items-center text-center ">
            <div
              className={`transition-all duration-700 ease-in-out transform ${
                focus === "desarrollos"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none absolute"
              }`}
            >
              <h3 className="text-primary text-[2rem] font-semibold">
                Innovación Tecnológica
              </h3>
              <p className="px-[13%]">
                Desarrollamos soluciones que no solo funcionan: te representan.
                Llevamos a tu negocio a la vanguardia, liderá tu industria
                creando tendencias.
              </p>
            </div>
          </div>

          <div className="w-1/3 h-full flex flex-col justify-between items-center  ">
            <SolutionCenter />

            <div className="w-full h-fit  flex flex-col items-center text-center">
              <div
                className={`transition-all duration-700 ease-in-out transform ${
                  focus === "clientes"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5 pointer-events-none absolute"
                }`}
              >
                <h3 className="text-primary text-[2rem] font-semibold transition-all  duration-1000">
                  Soluciones Visibles
                </h3>
                <p className="px-[5%]">
                  Innovación que funciona y además se percibe. Convertimos
                  inversiones tecnológicas en avances visibles, comprensibles y
                  alineados con los objetivos de quienes lideran y de quienes
                  evalúan resultados.
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/3 h-full flex flex-col items-center text-center">
             <div
              className={`transition-all duration-700 ease-in-out transform ${
                focus === "procesos"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none absolute"
              }`}
            >
                <h3 className="text-primary text-[2rem] font-semibold">
                  Arquitectura operativa
                </h3>
                <p className="px-[14%]">
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
