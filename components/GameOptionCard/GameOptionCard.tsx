import { useCallback, useEffect, useState } from "react";
import { StyledGameOptionCard } from "./GameOptionCard.style";
import { colors } from "@/public/colors/colors";
import { useChildStore } from "@/stores/use-child";
import { Alternative } from "@/public/entities/entities";

export default function GameOptionCard({ codAlternative, alternative, isSelected, index, setSelected }: Alternative & { isSelected: boolean, index: number, setSelected: Function }) {
  const getCardColor = useCallback((index: number, fundo?: boolean) => {
    let localColors: string[];

    if (fundo) {
      localColors = [
        colors.green.radiant,
        colors.pink.radiant,
        colors.blue.radiant,
        colors.yellow.radiant,
      ];
    } else {
      localColors = [
        colors.green.dark,
        colors.pink.dark,
        colors.blue.dark,
        colors.yellow.dark,
      ];
    }

    if (index > localColors.length - 1) {
      return colors.gray.normal;
    }

    return localColors[index];
  }, []);

  const handleOnClick = useCallback(() => {
    setSelected(codAlternative);
  }, []);

  return (
    <StyledGameOptionCard
      onClick={handleOnClick}
      isSelected={isSelected}
      color={getCardColor(index, true)}
      fontColor={getCardColor(index)}
    >
      <p>{alternative}</p>
    </StyledGameOptionCard>
  );
}
