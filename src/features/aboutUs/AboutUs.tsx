import Image from "next/image";
import { Title } from "../commons/Title";
import { AboutUsImagesDecoration } from "./components/AboutUsImagesDecoration";

export const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="w-screen h-screen relative flex xs:flex-col xs:justify-center xs:gap-y-[5vh] lg:flex-row bg-lightGray "
    >
      <AboutUsImagesDecoration />
      <div className="xs:w-full lg:w-1/2 xs:h-fit lg:h-full   flex items-center justify-center ">
        <div className="flex flex-col items-start w-[80%] xs:text-[1rem] lg:text-[1.2rem]  ">
          <Title
            title1="Sobre Nosotros"
            title2="Nosotros "
            align="start"
            color="text-primary text-opacity-20"
          />
          <br />
          <p className="pr-[10%]">
            Somos más que una consultora de software;{" "}
            <strong>
              somos tu socio estratégico en innovación tecnológica
            </strong>{" "}
            con foco en la <strong>visibilización de las mejoras.</strong>
          </p>
          <br />
          <p className="pr-[10%]">
            Nos dedicamos a transformar con nuevas tecnologías, la manera en que
            las empresas gestionan sus{" "}
            <strong>
              operaciones comerciales, su administración interna, su
              comunicación omnicanal y la visibilidad de gestión.
            </strong>
          </p>
        </div>
      </div>
      <div className=" xs:w-full lg:w-1/2 lg:h-full flex items-center justify-center  ">
        <figure className=" xs:w-full lg:full lg:right-5 ">
          <Image
            width={1000}
            height={500}
            className="w-full  object-cover drop-shadow-lg"
            src="/about-us-images/notebook.webp"
            alt="background"
          />
        </figure>
      </div>
    </section>
  );
};
