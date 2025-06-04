import { ImageDecoration } from "@/features/commons/ImageDecoration";

export const HeroImageDecorators = () => {
  return (
    <>
      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
        heightClass={"xs:h-[6vh] lg:h-[8vh] saludoReveal"}
        widthClass={"xs:w-[12vh] lg:w-[16vh]"}
        verticalPositionClass="bottom-0"
        horizontalPositionClass="left-[8vh]"
      />
      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
        heightClass={"xs:h-[6vh] lg:h-[8vh] saludoReveal"}
        widthClass={"xs:w-[12vh] lg:w-[16vh]"}
        verticalPositionClass="bottom-[16vh]"
        horizontalPositionClass="right-0"
      />

      <ImageDecoration
        imagePath={"/ui/image_decorator_2.png"}
        heightClass={"xs:h-[12vh] lg:h-[16vh] saludoReveal"}
        widthClass={"xs:w-[6vh] lg:w-[8vh]"}
        verticalPositionClass="bottom-0"
        horizontalPositionClass="left-0"
      />
      <ImageDecoration
        imagePath={"/ui/image_decorator_3.png"}
        heightClass={"xs:h-[20vh] lg:h-[30vh] saludoReveal"}
        widthClass={"xs:w-[20vh] lg:w-[30vh]"}
        verticalPositionClass="xs:bottom-[25vh] lg:bottom-[10vh]"
        horizontalPositionClass="left-[25vw]"
      />

      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
        heightClass={"xs:h-[6vh] lg:h-[8vh] saludoReveal"}
        widthClass={"xs:w-[12vh] lg:w-[16vh]"}
        verticalPositionClass="xs:top-[10vh] lg:top-[12vh]"
        horizontalPositionClass="left-[45vw]"
      />
      <ImageDecoration
        imagePath={"/ui/image_decorator_2.png"}
        heightClass={"xs:h-[12vh] lg:h-[16vh] saludoReveal"}
        widthClass={"xs:w-[6vh] lg:w-[8vh]"}
        verticalPositionClass="top-[16vh]"
        horizontalPositionClass="right-5"
      />
    </>
  );
};
