import { StyledLevelCard } from "./LevelCard.style";
import Mascote from "@/public/images/mascote2.svg";
import Level from "@/public/images/game-level-icon.svg";
import CurrentLevel from "@/public/images/current-level-icon.svg";
import { colors } from "@/public/colors/colors";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useChildStore } from "@/stores/use-child";
import { Activity } from "@/public/entities/entities";

export interface LevelCardProps {
  index: number;
  current: boolean;
  currentIndex: number;
  color: string;
}

export default function LevelCard({ levelCard, activity } : { levelCard: LevelCardProps, activity: Activity }) {
  const { setCurrentQuiz } = useChildStore();
  const {
    index,
    current,
    currentIndex,
    color,
  } = levelCard;
  const router = useRouter();

  const handleClick = useCallback(() => {
    setCurrentQuiz(activity)
    router.push("/games/game");
  }, [current, index]);

  return (
    <StyledLevelCard color={color} onClick={handleClick}>
      <Image
        width={15}
        height={150}
        src={current || index < currentIndex ? CurrentLevel.src : Level.src}
        alt="Blocked step"
      />
      <div className="content">
        <p>Nível {index + 1}</p>
        <Image src={Mascote.src} alt="Filote" width={60} height={85} />
      </div>
    </StyledLevelCard>
  );
}
