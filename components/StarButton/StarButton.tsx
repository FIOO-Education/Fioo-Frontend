import { useState, useEffect, useCallback } from "react";
import { StyledStarButton } from "./StarButton.style";
import BlueStarIcon from "@/public/images/blue-star-icon.svg";
import PinkStarIcon from "@/public/images/pink-star-icon.svg";
import FullBlueStarIcon from "@/public/images/full-blue-star-icon.svg";
import FullPinkStarIcon from "@/public/images/full-pink-star-icon.svg";

interface StarButtonProps {
  el: string;
  fixed?: boolean;
  color: "blue" | "pink";
  isFavorited?: boolean;
}

export default function StarButton({
  el,
  fixed,
  color,
  isFavorited,
}: StarButtonProps) {
  const [favorited, setFavorited] = useState(false);
  const [source, setSource] = useState<string | null>(null);

  const handleClick = useCallback(() => {
    setFavorited(!favorited);
    const fav = localStorage.getItem("fav");
    const favorite = fav ? JSON.parse(fav) as string[] : [];
    if (!favorited && !favorite.includes(el)) {
      localStorage.setItem("fav", JSON.stringify([...favorite, el]));
    } else {
      localStorage.setItem(
        "fav",
        JSON.stringify(favorite.filter((favo) => favo !== el))
      );
    }
  }, [favorited, setFavorited]);

  const getImageSource = useCallback(
    (color: "blue" | "pink", favorited: boolean) => {
      if (favorited) {
        if (color === "blue") {
          return FullBlueStarIcon.src;
        } else {
          return FullPinkStarIcon.src;
        }
      } else {
        if (color === "blue") {
          return BlueStarIcon.src;
        } else {
          return PinkStarIcon.src;
        }
      }
    },
    []
  );

  useEffect(() => {
    const src = getImageSource(color, favorited);
    setSource(src);
  }, [favorited]);

  useEffect(() => {
    setFavorited(isFavorited === undefined ? false : isFavorited);
  }, [isFavorited]);

  if (!source) {
    return null;
  }

  return (
    <StyledStarButton
      fixed={fixed ? fixed : false}
      onClick={handleClick}
      src={source}
      alt="Favorited Icon"
      width={25}
      height={25}
    />
  );
}
