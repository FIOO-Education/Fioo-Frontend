import { StyledLevelCard } from "./LevelCard.style";
import Mascote from "@/public/images/mascote2.svg";
import Level from "@/public/images/game-level-icon.svg";
import CurrentLevel from "@/public/images/current-level-icon.svg";
import { colors } from "@/public/colors/colors";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useChildStore } from "@/stores/use-child";

interface LevelCardProps {
  index: number;
  level: string;
  current: boolean;
  currentIndex: number;
  color: string;
}

export default function LevelCard({
  index,
  level,
  current,
  currentIndex,
  color,
}: LevelCardProps) {
  const router = useRouter();
  const game = useChildStore((s) => s.game);
  const setGame = useChildStore((s) => s.setGame);

  const handleOnClick = useCallback(() => {
    if (current) {
      let tempGame = {...game};
      tempGame.currentGame.id = index + 1;
      setGame(tempGame);
      router.push("/games/game");
    }
  }, [current, index, game]);

  return (
    <StyledLevelCard color={color} onClick={handleOnClick}>
      <Image
        width={15}
        height={150}
        src={current || index < currentIndex ? CurrentLevel.src : Level.src}
        alt="Blocked step"
      />
      <div className="content">
        <p>{level}</p>
        <Image src={Mascote.src} alt="Filote" width={60} height={85} />
      </div>
    </StyledLevelCard>
  );
}
