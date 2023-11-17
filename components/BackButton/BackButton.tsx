import { MouseEventHandler, useCallback } from "react";
import { StyledBackButton } from "./BackButton.style";
import BlueInvertedArrow from "@/public/images/blue-inverted-arrow.svg";
import PinkInvertedArrow from "@/public/images/pink-inverted-arrow.svg";

interface BackButtonProps {
    color: "blue" | "pink";
    fixed?: boolean;
    onClick: MouseEventHandler<HTMLImageElement>
}

export default function BackButton({ color, fixed, onClick }: BackButtonProps) {
  const getImageSource = useCallback((color: "blue" | "pink") => {
    if(color === "pink") {
      return PinkInvertedArrow.src;
    } else {
      return BlueInvertedArrow.src;
    }
  }, []);

  return (
    <StyledBackButton
      fixed={fixed ? fixed : false}
      onClick={onClick}
      src={getImageSource(color)}
      alt="Inverted arrow"
      width={25}
      height={22.5}
    />
  );
}
