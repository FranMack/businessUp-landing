import Image from "next/image";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../app/utils";
import { Title } from "../commons/Title";
import { ContactForm } from "./components/ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="w-screen xs:min-h-screen lg:h-screen relative flex xs:flex-col lg:flex-row ">
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
            <p className="xs:text-[1rem] pr-[10%]">
              ¿Estás listo para transformar a tu empresa y ser el líder que
              siempre quisiste ser?
            </p>
            <br />
            <strong className="text-[1.6rem]">Te escuchamos!</strong>
          </div>
          <div className=" xs:text-primary lg:text-[#ffff] flex flex-col gap-y-[2vh]">
            <div>
              <strong>Email</strong>
              <p>clientes@businessup.com.ar</p>
            </div>
            <div>
              <strong>WhatsApp</strong>
              <p>+54 9 11 2329 - 4642</p>
            </div>

            <div className="w-full">
              <strong>Redes Sociales</strong>
              <div className="h-[3vh] w-full flex gap-x-[1vw] mt-[1vh]">
                <InstagramIcon color="#693f91" />
                <FacebookIcon color="#693f91" />
                <TwitterIcon color="#693f91" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" xs:full lg:w-1/2 xs:h-fit  lg:h-screen z-10 flex items-center justify-center py-[15%]">
        <ContactForm />
      </div>

      <figure className="w-full h-1/3 absolute bottom-0 z--1">
        <Image
          width={2000}
          height={500}
          className="object-cover absolute bottom-0 "
          src="/contact-images/hero_background.png"
          alt="background"
        />
      </figure>
    </section>
  );
};
