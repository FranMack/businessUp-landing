import { ourServicesData } from "../../app/utils/service-data";
import { Title } from "../commons/Title";
import { DinamicServiceCard } from "./components/DinamicCard";
import { OurServicesDecoratorImages } from "./components/OurServicesDecoratorImages";

export const OurServices = () => {
  return (
    <section
      id="ourServices"
      className="w-screen min-h-screen relative flex flex-col items-center lg:pt-[10vh] bg-lightGray"
    >
      <Title
        title1="Nuestros Servicios"
        title2="Servicios "
        align="center"
        color="text-primary text-opacity-20"
      />
      <OurServicesDecoratorImages />

      <div className="w-[75%]  grid xs:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 items-start my-[7vh] ">
        {ourServicesData.map((item) => {
          return <DinamicServiceCard key={item.title} {...item} />;
        })}
      </div>
    </section>
  );
};
