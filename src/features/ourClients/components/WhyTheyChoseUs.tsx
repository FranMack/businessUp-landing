const slogans = [
  "Soluciones a medida",
  "Expertos en escalar tu marca",
  "Equipo interdiciplinario",
  "Tecnología y creatividad",
  "Compromiso total con tus objetivos.",
  "Estrategias digitales que funcionan.",
];

export const WhyTheyChoseUs = () => {
  return (
    <>
      <h3 className="mx-auto text-primary xs:text-[1.5rem] lg:text-[2.5rem] font-semibold">
        ¿Por que nos eligen ?
      </h3>
      <div className="mx-auto  xs:w-[80%] lg:w-[70%] text-center flex justify-center xs:gap-[1.5vh] lg:gap-[2vw] flex-wrap ">
        {slogans.map((item) => {
          return (
            <div
              key={item}
              className="xs:w-full md:w-fit bg-primary bg-opacity-80 rounded-full text-[#ffff] xs:text-[1rem] lg:text-[1.1rem] xs:p-3 lg:p-4 hover hover:bg-secondary hover:bg-opacity-70 transition-colors duration-1000"
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};
