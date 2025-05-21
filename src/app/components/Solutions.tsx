import Image from "next/image";
import { Title } from "./commons/Title";

export const Solutions = () => {
  return (
    <section className="w-screen h-screen relative">
      <Title title1="Soluciones Integrales" title2="Soluciones" align="center"  />

      <figure className="absolute h-full w-[22%] right-0 top-0">
        <Image
          fill
          className="w-full object-cover"
          src="/soluciones-images/ELEMENTO-04.webp"
          alt="background"
        />
      </figure>
    </section>
  );
};
