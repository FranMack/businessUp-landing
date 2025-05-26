const slogans = [
  "Soluciones a medida",
  "Expertos en escalar tu marca",
  "Equipo interdiciplinario",
  "Tecnología y creatividad en un solo lugar.",
  "Compromiso total con tus objetivos.",
  "Estrategias digitales que funcionan.",
];

export const WhyTheyChoseUs = () => {
  return (
    <>
      <h3 className="mx-auto text-primary text-[2.5rem] font-semibold">
        ¿Por que nos eligen ?
      </h3>
      <div className="mx-auto w-[70%] text-center flex justify-center gap-[2vw] flex-wrap ">
        {slogans.map((item) => {
          return (
            <div
              key={item}
              className="bg-primary bg-opacity-80 rounded-full text-[#ffff] text-[1.1rem] p-4 hover hover:bg-secondary hover:bg-opacity-70 transition-colors duration-1000"
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};
