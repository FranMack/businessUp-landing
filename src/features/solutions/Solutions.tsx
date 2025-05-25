import Image from "next/image";
import { Title } from "../commons/Title";
import { SolutionCenter } from "./components/SolutionCenter";
import { SolutionsImageDecorators } from "./components/SolutionsImageDecorators";

export const Solutions = () => {
  return (
    <section
      id="solutions"
      className="w-screen h-screen relative flex flex-col justify-center items-center "
    >
      <SolutionsImageDecorators/>
      <Title
       color="text-primary text-opacity-20"
        title1="Soluciones Integrales"
        title2="Soluciones"
        align="center"
      />
      <figure className="absolute h-full w-[22%] right-0 top-0">
        <Image
          fill
          className="w-full object-cover"
          src="/soluciones-images/ELEMENTO-04.png"
          alt="background"
        />
      </figure>

         <figure className="absolute bottom-0 h-full w-full z-[-1] overflow-hidden">
        <Image
          width={2000}
          height={500}
          className="w-full object-cover"
          src="/soluciones-images/gray_backround.webp"
          alt="background"
        />
      </figure>

      <div className="h-[80%] w-[90%] flex mt-[8vh]">
        <div className="w-1/3 h-full  flex flex-col items-center text-center">
          <h3 className="text-primary text-[2rem] font-semibold">
            Innovación Tecnológica
          </h3>
          <p className="px-[13%]">
            Desarrollamos soluciones que no solo funcionan: te representan.
            Llevamos a tu negocio a la vanguardia, liderá tu industria creando
            tendencias.
          </p>
        </div>

        <div className="w-1/3 h-full flex flex-col justify-between items-center  ">
          <SolutionCenter />

          <div className="w-full h-fit  flex flex-col items-center text-center">
            <h3 className="text-primary text-[2rem] font-semibold">
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

        <div className="w-1/3 h-full flex flex-col items-center text-center">
          <h3 className="text-primary text-[2rem] font-semibold">
            Arquitectura operativa
          </h3>
          <p className="px-[14%]">
            Innovación que funciona y además se percibe. Convertimos inversiones
            tecnológicas en avances visibles, comprensibles y alineados con los
            objetivos de quienes lideran y de quienes evalúan resultados.
          </p>
        </div>
      </div>
    </section>
  );
};
