import Image from "next/image";
import { Title } from "../commons/Title";
import { ClientsBanner } from "./components/ClientsBanner";
import { WhyTheyChoseUs } from "./components/WhyTheyChoseUs";
import { ClientsImageDecorators } from "./components/ClientsImageDecorators";

export const OurClients = () => {
  return (
    <section
      id="ourClients"
      className="w-screen h-screen relative flex flex-col xs:gap-y-[2vh] lg:gap-y-[6vh] "
    >
      <ClientsImageDecorators/>
      <div className=" xs:w-full lg:w-1/2 h-fit flex justify-center mt-[10vh]">
        <div className="w-[70%]">
          <Title
            title1="Confián en nosotros"
            title2="Clientes"
            align="start"
            color="text-primary text-opacity-20"
          />
        </div>
      </div>

      <figure className="absolute h-full w-full z-[-1] overflow-hidden botton-0 ">
        <Image
          width={1000}
          height={500}
          className="h-full w-full object-cover object-bottom  "
          src="/clients-images/gray_backround.webp"
          alt="background"
        />
      </figure>

    
      <ClientsBanner />

  
      <WhyTheyChoseUs />
    </section>
  );
};
