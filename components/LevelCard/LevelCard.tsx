import { StyledLevelCard } from "./LevelCard.style";
import Mascote from "@/public/images/mascote2.svg";
import Level from "@/public/images/game-level-icon.svg";
import CurrentLevel from "@/public/images/current-level-icon.svg";
import { colors } from "@/public/colors/colors";
import Image from "next/image";

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
  color
}: LevelCardProps) {
  if (current || index < currentIndex) {
    return (
      <StyledLevelCard color={color}>
        <Image width={15} height={150} src={CurrentLevel.src} alt="Blocked step" />
        <div className="content">
          <p>{level}</p>
          <Image src={Mascote.src} alt="Filote" width={60} height={85} />
        </div>
      </StyledLevelCard>
    );
  } else {
    return (
      <StyledLevelCard color={color}>
        <Image width={15} height={150} src={Level.src} alt="Blocked step" />
        <div className="content">
          <p>{level}</p>
          <Image src={Mascote.src} alt="Filote" width={60} height={85} />
        </div>
      </StyledLevelCard>
    );
  }
}
