import Image from "next/image";

export const WhatsUpButton = () => {
  return (
    <div className=" h-[60px] aspect-square rounded-full bg-[#2b9f14] fixed bottom-10 right-10 flex justify-center items-center z-50  hover hover:scale-110 transition-transform duration-1000">
      <div className="h-[30px] aspect-square relative ">
        <Image
          fill
          className="object-cover"
          src="/whats-up-icon.webp"
          alt="whats up image"
        />
      </div>
    </div>
  );
};
