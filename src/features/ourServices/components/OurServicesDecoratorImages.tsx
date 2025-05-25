import { ImageDecoration } from "@/features/commons/ImageDecoration";

export const OurServicesDecoratorImages = () => {
  return (
    <>
      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
        heightClass={"h-[8vh]"}
        widthClass={"w-[16vh]"}
        verticalPositionClass="top-[20vh]"
        horizontalPositionClass="right-0"
      />

      <ImageDecoration
        imagePath={"/ui/image_decorator_2.png"}
        heightClass={"h-[16vh]"}
        widthClass={"w-[8vh]"}
        verticalPositionClass="bottom-0"
        horizontalPositionClass="left-0"
      />

      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
        heightClass={"h-[8vh]"}
        widthClass={"w-[16vh]"}
        verticalPositionClass="bottom-0"
        horizontalPositionClass="right-[2vw]"
      />

      <ImageDecoration
        imagePath={"/ui/image_decorator_3.png"}
        heightClass={"h-[30vh]"}
        widthClass={"w-[30vh]"}
        verticalPositionClass="top-[100vh]"
        horizontalPositionClass="left-0"
      />
    </>
  );
};
