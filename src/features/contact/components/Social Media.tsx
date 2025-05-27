"use client";

import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/app/utils";
import { useScreenSize } from "@/hooks/useScreenSize";

export const SocialMedia = () => {
  const { screenWidth } = useScreenSize();
  return (
    <div className="h-[3vh] w-full flex  items-center  xs:gap-x-[3vw] lg:gap-x-[1vw] mt-[1vh]">
      <InstagramIcon color={`${screenWidth < 1024 ? "#693f91" : "#ffff"} `} />
      <FacebookIcon color={`${screenWidth < 1024 ? "#693f91" : "#ffff"} `} />
      <TwitterIcon color={`${screenWidth < 1024 ? "#693f91" : "#ffff"} `}/>
    </div>
  );
};
