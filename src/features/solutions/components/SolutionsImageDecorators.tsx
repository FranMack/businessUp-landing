import { ImageDecoration } from "@/features/commons/ImageDecoration";

export const SolutionsImageDecorators = () => {
  return (
    <>
      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
        heightClass={"xs:h-[6vh] lg:h-[8vh]"}
        widthClass={"xs:w-[12vh] lg:w-[16vh]"}
        verticalPositionClass="xs:bottom-[18vh] lg:bottom-[20vh]"
        horizontalPositionClass="xs:left-0 lg:left-[20vw]"
      />
      <ImageDecoration
        imagePath={"/ui/image_decorator_2.png"}
      heightClass={"xs:h-[12vh] lg:h-[16vh]"}
        widthClass={"xs:w-[6vh] lg:w-[8vh]"}
        verticalPositionClass="bottom-[10vh]"
        horizontalPositionClass="xs:right-0 lg:right-10"
      />

      <ImageDecoration
        imagePath={"/ui/image_decorator_2.png"}
      heightClass={"xs:h-[12vh] lg:h-[16vh]"}
        widthClass={"xs:w-[6vh] lg:w-[8vh]"}
        verticalPositionClass="bottom-0"
        horizontalPositionClass="left-0"
      />
      <ImageDecoration
        imagePath={"/ui/image_decorator_3.png"}
      heightClass={"xs:h-[20vh] lg:h-[30vh]"}
        widthClass={"xs:w-[0vh] lg:w-[30vh]"}
        verticalPositionClass="bottom-[40vh]"
        horizontalPositionClass="left-0"
      />
      <ImageDecoration
        imagePath={"/ui/image_decorator_1.png"}
       heightClass={"xs:h-[6vh] lg:h-[8vh]"}
        widthClass={"xs:w-[12vh] lg:w-[16vh]"}
        verticalPositionClass="xs:top-[10vh] lg:bottom-[25vh]"
        horizontalPositionClass="xs:right-[2vw] lg:right-[2vw]"
      />
    </>
  );
};
