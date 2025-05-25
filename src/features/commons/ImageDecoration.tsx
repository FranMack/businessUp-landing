import Image from "next/image";

interface Props {
  imagePath: string;
  heightClass: string;
  widthClass: string;
  horizontalPositionClass?: string;
  verticalPositionClass?: string;
}
export const ImageDecoration = ({
  imagePath,
  heightClass,
  widthClass,
  horizontalPositionClass,
  verticalPositionClass,
}: Props) => {
  return (
    <figure
      className={`absolute ${heightClass} ${widthClass}  ${horizontalPositionClass} ${verticalPositionClass} z-[30] overflow-hidden `}
    >
      <Image
        width={200}
        height={100}
        className="h-full w-full object-cover object-center"
        src={imagePath}
        alt="decoration image"
      />
    </figure>
  );
};
