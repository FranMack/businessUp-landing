"use client";

import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/app/utils";
import { useScreenSize } from "@/hooks/useScreenSize";
import Link from "next/link";

const icons = [
  {
    icon: InstagramIcon,
    path: "https://www.instagram.com/businessup.com.ar/",
  },
  {
    icon: FacebookIcon,
    path: "https://www.facebook.com/businessup.com.ar/",
  },
  {
    icon: LinkedinIcon,
    path: "https://www.linkedin.com/company/business-up-consultora/posts/?feedView=all",
  },
];
export const SocialMedia = () => {
  const { screenWidth } = useScreenSize();

  return (
    <>
      {icons.map((icon, i) => {
        return (
          <Link
            key={i}
            className="h-full"
            href={icon.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <icon.icon color={`${screenWidth < 1024 ? "#693f91" : "#ffff"} `} />
          </Link>
        );
      })}
    </>
  );
};
