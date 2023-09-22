import { MouseEventHandler } from "react";
import { StyledBackButton } from "./BackButton.style";
import InvertedArrow from "@/public/images/inverted-arrow.png";

interface BackButtonProps {
    fixed?: boolean;
    onClick: MouseEventHandler<HTMLImageElement>
}

export default function BackButton({ fixed, onClick }: BackButtonProps) {
  return (
    <StyledBackButton
      fixed={fixed ? fixed : false}
      onClick={onClick}
      src={InvertedArrow.src}
      alt="Inverted arrow"
      width={10}
      height={17.5}
    />
  );
}
