"use client";

import {
  AdviceIcon,
  HandShakingIcon,
  SolutionsIcon,
  TeamIcon,
} from "@/app/utils/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const whyTheyChooseUsData = [
  {
    title: "Equipo de expertos",
    text: "Contamos con un equipo multidisciplinario de expertos de alto nivel, lo que nos permite abordar cada proyecto desde una perspectiva integral, combinando estrategia, creatividad y tecnología para lograr resultados sobresalientes.",
    icon: TeamIcon,
  },
  {
    title: "Compromiso",
    text: "Nos enfocamos en superar las expectativas en cada proyecto. Damos el  110% para entregar resultados que marcan la diferencia.",
    icon: HandShakingIcon,
  },

  {
    title: "Asesoramiento",
    text: " Ofrecemos un asesoramiento constante y personalizado, con un enfoque boutique que se adapta a las necesidades únicas de cada cliente.",
    icon: AdviceIcon,
  },
  {
    title: "Soluciones",
    text: "Tenemos una visión global y estratégica que nos permite brindar soluciones que dan beneficios a todos los actores involucrados.",
    icon: SolutionsIcon,
  },
];

export const OurStrenght = () => {
  const bubbleBackgroundColors: Record<number, string> = {
    0: "bg-primary",
    1: "bg-primary",
    2: "bg-primary",
    3: "bg-primary",
  };

  const refStrengthCard = useScrollAnimation<HTMLDivElement>("efectoReveal");

  return (
    <div ref={refStrengthCard} className="w-full  flex flex-col gap-y-[2vh] ">
      <h3 className="xs:text-[1.5rem] xs:text-center lg:text-start lg:text-[2rem] font-semibold text-primary w-[85%] mx-auto">
        ¿Por qué nos eligen ?
      </h3>
      <div className="xs:w-[80%] lg:w-[90%] h-full  grid xs:grid-flow-cols-1 lg:grid-cols-2 mx-auto gap-10 ">
        {whyTheyChooseUsData.map((item, i) => {
          return (
            <div
              key={item.title}
              className="h-fit w-full flex xs:flex-col lg:flex-row items-center xs:text-center lg:text-start"
            >
              <div
                className={`xs:h-[6vh] sm:h-[12vh] lg:h-[12vh] aspect-square rounded-full ${bubbleBackgroundColors[i]}`}
              >
                <item.icon color="#ffff" />
              </div>

              <div className="px-[5%]">
                <h4 className="text-primary xs:text-[1.2rem] lg:text-[1.3rem] font-semibold">
                  {item.title}
                </h4>
                <p className="xs:text-[0.9rem] lg:text-[1rem]">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
