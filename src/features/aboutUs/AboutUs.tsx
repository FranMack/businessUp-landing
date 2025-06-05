import { Title } from "../commons/Title";
import { AboutUsImagesDecoration } from "./components/AboutUsImagesDecoration";
import { AboutUsPrincipalImage } from "./components/AboutUsPrincipalImage";

export const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="w-screen  relative flex xs:flex-col xs:justify-center xs:gap-y-[8vh] lg:flex-row items-center bg-lightGray py-[10vh]"
    >
      <AboutUsImagesDecoration />
      <div className="xs:w-full lg:w-[45%] xs:h-fit lg:h-full  flex items-center justify-center  ">
        <div className="flex flex-col items-start w-[80%] xs:text-[1.1rem] lg:text-[1.25rem] ">
          <Title
            title1="Sobre Nosotros"
            title2="Nosotros"
            align="start"
            color="text-primary text-opacity-20"
          />
          <br />
          <p className="xs:pr-[10%] lg:pr-[5%]">
            Somos más que una consultora de software;{" "}
            <strong>
              somos tu socio estratégico en innovación tecnológica
            </strong>{" "}
            con foco en la <strong>visibilización de las mejoras.</strong>
          </p>
          <br />
          <p className="xs:pr-[10%] lg:pr-[5%]">
            Nos dedicamos a transformar con nuevas tecnologías, la manera en que
            las empresas gestionan sus{" "}
            <strong>
              operaciones comerciales, su administración interna, su
              comunicación omnicanal y la visibilidad de gestión.
            </strong>
          </p>
        </div>
      </div>
      <div className=" xs:w-full lg:w-[55%] lg:h-full flex items-center justify-center  ">
        <AboutUsPrincipalImage />
      </div>
    </section>
  );
};
