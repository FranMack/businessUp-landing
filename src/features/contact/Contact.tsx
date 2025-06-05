import Image from "next/image";
import Link from "next/link";
import { SocialMedia } from "../commons/Social Media";
import { Title } from "../commons/Title";
import { ContactForm } from "./components/ContactForm";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-screen xs:min-h-screen lg:h-screen relative flex xs:flex-col lg:flex-row xs:pt-[10vh] lg:pt-0 "
    >
      <div className="xs:full lg:w-1/2 xs:h-fit  lg:h-full  z-10 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-evenly items-start  w-[80%] h-full  text-[1.2rem]">
          <div>
            <Title
              title1="Contacto"
              title2="Contacto "
              align="start"
              color="text-primary text-opacity-20"
            />
            <br />
            <p className="xs:text-[1rem] md:text-[1.2rem] pr-[10%] text-primary font-semibold">
              ¿Estás listo para transformar a tu empresa y ser el líder que
              siempre quisiste ser?
            </p>
            <br />
            <strong className="text-[1.6rem]">Te escuchamos!</strong>
          </div>
          <div className=" xs:text-primary lg:text-[#ffff] flex flex-col gap-y-[2vh] lg:mt-[5vh]">
            <div className="flex flex-col">
              <strong>Email</strong>
              <Link href="mailto:clientes@businessup.com.ar">
                clientes@businessup.com.ar
              </Link>
            </div>

            <div className="flex flex-col">
              <strong>WhatsApp</strong>
              <Link
                href="https://wa.me/5491123294642"
                target="_blank"
                rel="noopener noreferrer"
              >
                +54 9 11 2329 - 4642
              </Link>
            </div>

            <div className="w-full">
              <strong>Redes Sociales</strong>
              <div className="xs:h-[3vh] phoneLandscape:h-[6vh] lg:h-[3vh] w-full flex  items-center  xs:gap-x-[3vw] lg:gap-x-[1vw] mt-[1vh]">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" xs:full lg:w-1/2 xs:h-fit  lg:h-screen z-10 flex items-center justify-center py-[15%]">
        <ContactForm />
      </div>

      <figure className="w-full h-1/3 absolute bottom-5 z--1">
        <Image
          width={2000}
          height={500}
          className="object-cover absolute bottom-0 "
          src="/contact-images/hero_background.png"
          alt="background"
        />
      </figure>
      <div className="w-full h-5 bg-primary absolute bottom-0"></div>
    </section>
  );
};
