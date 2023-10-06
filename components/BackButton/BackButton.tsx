import { MouseEventHandler, useCallback } from "react";
import { StyledBackButton } from "./BackButton.style";
import BlueInvertedArrow from "@/public/images/blue-inverted-arrow.png";
import PinkInvertedArrow from "@/public/images/pink-inverted-arrow.png";

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
      width={10}
      height={17.5}
    />
  );
}
