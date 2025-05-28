import Image from "next/image";
import Link from "next/link";

export const WhatsUpButton = () => {
  return (
    <Link
      href="https://wa.me/5491123294642"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="xs:h-[50px] lg:h-[60px] aspect-square rounded-full bg-[#2b9f14] fixed  xs:bottom-5 lg:bottom-10 xs:right-5 right-10 flex justify-center items-center z-50  hover hover:scale-110 transition-transform duration-1000">
        <div className="xs:h-[25px] lg:h-[30px] aspect-square relative ">
          <Image
            fill
            className="object-cover"
            src="/whats-up-icon.webp"
            alt="whats up image"
          />
        </div>
      </div>
    </Link>
  );
};
