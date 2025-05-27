import { ImageDecoration } from "@/features/commons/ImageDecoration";

export const AboutUsImagesDecoration = () => {
  return (
    <>
      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
        heightClass={"xs:h-[6vh] lg:h-[8vh]"}
        widthClass={"xs:w-[12vh] lg:w-[16vh]"}
        verticalPositionClass="bottom-0"
        horizontalPositionClass="left-[8vh]"
      />
      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
    heightClass={"xs:h-[6vh] lg:h-[8vh]"}
        widthClass={"xs:w-[12vh] lg:w-[16vh]"}
        verticalPositionClass="bottom-[16vh]"
        horizontalPositionClass="right-0"
      />

      <ImageDecoration
        imagePath={"/ui/image_decorator_2.png"}
        heightClass={"xs:h-[12vh] lg:h-[16vh]"}
        widthClass={"xs:w-[6vh] lg:w-[8vh]"}
        verticalPositionClass="bottom-0"
        horizontalPositionClass="left-0"
      />
      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
         heightClass={"xs:h-[6vh] lg:h-[8vh]"}
        widthClass={"xs:w-[12vh] lg:w-[16vh]"}
        verticalPositionClass="top-[10vh]"
        horizontalPositionClass="left-[0vw]"
      />
    </>
  );
};
