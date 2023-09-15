import ProfileImage from "@/public/images/profile-image.png";
import { MouseEventHandler } from "react";

interface ProfileIconProps {
  size: "big" | "small";
  onClick?: MouseEventHandler<HTMLImageElement>;
}

export default function ProfileIcon({ size, onClick }: ProfileIconProps) {
  if (size === "big") {
    return (
      <img
        style={{ width: "210px", height: "210px" }}
        onClick={onClick}
        src={ProfileImage.src}
      />
    );
  } else {
    return (
      <img
        style={{
          width: "40px",
          height: "40px",
          position: "absolute",
          top: "25px",
          right: "25px",
        }}
        onClick={onClick}
        src={ProfileImage.src}
      />
    );
  }
}
