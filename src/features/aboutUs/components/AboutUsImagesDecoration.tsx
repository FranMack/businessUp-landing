import { ImageDecoration } from "@/features/commons/ImageDecoration";

export const AboutUsImagesDecoration = () => {
  return (
    <>
      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
        heightClass={"h-[8vh]"}
        widthClass={"w-[16vh]"}
        verticalPositionClass="bottom-0"
        horizontalPositionClass="left-[8vh]"
      />
      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
        heightClass={"h-[8vh]"}
        widthClass={"w-[16vh]"}
        verticalPositionClass="bottom-[16vh]"
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
        verticalPositionClass="top-[10vh]"
        horizontalPositionClass="left-[0vw]"
      />


       


    </>
  );
};
