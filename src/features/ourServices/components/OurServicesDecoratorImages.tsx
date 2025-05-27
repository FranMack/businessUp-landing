import { ImageDecoration } from "@/features/commons/ImageDecoration";

export const OurServicesDecoratorImages = () => {
  return (
    <>
      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
          heightClass={"xs:h-[6vh] lg:h-[8vh]"}
        widthClass={"xs:w-[12vh] lg:w-[16vh]"}
        verticalPositionClass="top-[20vh]"
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
        verticalPositionClass="bottom-0"
        horizontalPositionClass="right-[2vw]"
      />

      <ImageDecoration
        imagePath={"/ui/image_decorator_3.png"}
         heightClass={"xs:h-[20vh] lg:h-[30vh]"}
        widthClass={"xs:w-[20vh] lg:w-[30vh]"}
        verticalPositionClass="top-[100vh]"
        horizontalPositionClass="left-0"
      />
    </>
  );
};
