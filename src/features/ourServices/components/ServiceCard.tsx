import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  image: StaticImageData;
  paragraph1: string;
  paragraph2: string;
}

export const ServiceCard = ({
  title,
  image,
  paragraph1,
  paragraph2,
}: Props) => {
  return (
    <div
      key={title}
      className="w-[100%] h-full  relative  flex flex-col items-center rounded-lg bg-gradient-soft custom-shadow"
    >
      <figure className="w-[70%] aspect-square relative ">
        <Image
          fill
          className=" w-full  object-contain"
          src={image}
          alt={`${title} image`}
        />
      </figure>
      <div className="w-[80%] text-center flex flex-col gap-y-[1vh]">
        <h3 className="text-primary text-[2rem] font-semibold">{title}</h3>
        <p>{paragraph1}</p>

        <p>{paragraph2}</p>
      </div>
    </div>
  );
};
