import { useCallback, useMemo } from "react";
import { StyledGameCard } from "./GameCard.style";
import { colors } from "@/public/colors/colors";
import { useRouter } from "next/navigation";
import WorldIcon from "@/public/images/world.svg";
import BeeIcon from "@/public/images/bee.svg";
import StarIcon from "@/public/images/star.svg";
import ControleIcon from "@/public/images/controle.svg";

interface Props {
    index: number;
    title: string;
    size: string;
}

const icons = {
    "bee": BeeIcon.src,
    "world": WorldIcon.src,
    "star": StarIcon.src,
    "control": ControleIcon.src
} as any;

export default function GameCard({ index, title, size }: Props) {
    const memoizedIcons = useMemo(() => icons, []);
    const router = useRouter();

    const getRandomColor = useCallback((icon: string) => {
        if (icon === "bee") {
          return colors.green.radiant;
        } else if (icon === "world") {
            return colors.blue.radiant;
        } else if(icon === "star") {
            return colors.pink.radiant;
        } else if(icon === "control") {
            return colors.yellow.radiant;
        }

        return colors.gray.normal;
      }, []);

    const getRandomIcon = useCallback((index: number) => {
        const random = Math.random();

        if(index % 2) {
            return random > 0.5 ? "bee" : "world";
        } else {
            return random > 0.5 ? "star" : "control";
        }
    }, []);

    const icon = getRandomIcon(index);
    const color = getRandomColor(icon);

    return (
        <StyledGameCard color={color} size={size} onClick={() => router.push("/games/steps")}>
            <img src={memoizedIcons[icon]} alt={title + "Icon"} />
            <p>{title}</p>
        </StyledGameCard>
    );
}