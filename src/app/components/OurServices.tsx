import Image from "next/image";
import { ourServicesData } from "../utils/service-data";
import { Title } from "./commons/Title";

export const OurServices = () => {
  return (
    <section className="w-screen min-h-screen relative flex flex-col items-center bg-gradient-soft">
      <Title title1="Nuestros Servicios" title2="Servicios " align="center" />

      <div className="w-[80%]  grid grid-cols-3 gap-y-5 items-start my-[7vh]">
        {ourServicesData.map((item) => {
          return (
            <div
              key={item.title}
              className="w-[100%]  relative  flex flex-col items-center"
            >
              <figure className="w-[70%] aspect-square relative ">
                <Image
                  fill
                  className=" w-full  object-contain"
                  src={item.image}
                  alt="background"
                />
              </figure>
              <div className="w-[80%] text-center">
                <h3 className="text-primary text-[2rem] font-semibold mb-[1vh] ">
                  {item.title}
                </h3>
                <p>{item.paragraph1}</p>
                <br />
                <p>{item.paragraph2}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
