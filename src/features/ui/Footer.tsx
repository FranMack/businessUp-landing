import Image from "next/image";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-screen h-[20vh] bg-primary flex flex-col items-center justify-center text-[#ffff]">
      <figure className="xs:w-1/2 lg:w-[12%] h-1/2 relative">
        <Image
          fill
          className="w-full object-contain absolute"
          src={`/ui/logo_blanco.png`}
          alt="background"
        />
      </figure>
      <p className="text-[0.8rem]">{`Copyright © ${year} Business Up. All Rights Reserved`}</p>
    </footer>
  );
};
