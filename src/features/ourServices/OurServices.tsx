import { ourServicesData } from "../../app/utils/service-data";
import { Title } from "../commons/Title";
import { OurServicesDecoratorImages } from "./components/OurServicesDecoratorImages";
import { ServiceCard } from "./components/ServiceCard";

export const OurServices = () => {
  return (
    <section
      id="ourServices"
      className="w-screen min-h-screen relative flex flex-col items-center pt-[10vh] bg-lightGray"
    >
      <Title
        title1="Nuestros Servicios"
        title2="Servicios "
        align="center"
        color="text-primary text-opacity-20"
      />
      <OurServicesDecoratorImages />

      <div className="w-[80%]  grid xs:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 items-start my-[7vh] ">
        {ourServicesData.map((item) => {
          return <ServiceCard key={item.title} {...item} />;
        })}
      </div>
    </section>
  );
};
