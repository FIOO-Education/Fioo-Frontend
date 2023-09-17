import { useCallback } from "react";
import { StyledGameCard } from "./GameCard.style";
import { colors } from "@/public/colors/colors";

interface GameCard {
    title: string;
    icon: string;
    size: string;
}

export default function GameCard({ title, icon, size }: GameCard) {
    const getRandomColor = useCallback(() => {
        const random = Math.random();
        if (random <= 0.25) {
          return colors.blue.radiant;
        } else if (random <= 0.50) {
            return colors.yellow.radiant;
        } else if(random <= 0.75) {
            return colors.green.radiant;
        } else {
          return colors.pink.radiant;
        }
      }, []);

    return (
        <StyledGameCard color={getRandomColor()} size={size}>
            <img src={icon} alt={title + "Icon"} />
            <p>{title}</p>
        </StyledGameCard>
    );
}