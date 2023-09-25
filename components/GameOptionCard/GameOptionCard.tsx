import { useCallback, useEffect, useState } from "react";
import { StyledGameOptionCard } from "./GameOptionCard.style";
import { colors } from "@/public/colors/colors";
import { useChildStore } from "@/stores/use-child";

interface GameOptionCardProps {
  option: string;
  isCorrect: boolean;
  index: number;
}

export default function GameOptionCard({
  option,
  isCorrect,
  index,
}: GameOptionCardProps) {
  const optionSelected = useChildStore((s) => s.optionSelected);
  const setOptionSelected = useChildStore((s) => s.setOptionSelected);
  const [isSelected, setIsSelected] = useState(false);

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
    if (optionSelected.selected !== index) {
      let tempOptionSelected = { ...optionSelected };
      tempOptionSelected.selected = index;
      
      if(isCorrect) {
        tempOptionSelected.correctOption = true;
      } else {
        tempOptionSelected.correctOption = false;
      }

      setOptionSelected(tempOptionSelected);
    }
  }, [isCorrect, optionSelected, setOptionSelected]);

  useEffect(() => {
    if (
      optionSelected.selected === index
    ) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [optionSelected]);

  return (
    <StyledGameOptionCard
      onClick={handleOnClick}
      isSelected={isSelected}
      color={getCardColor(index, true)}
      fontColor={getCardColor(index)}
    >
      <p>{option}</p>
    </StyledGameOptionCard>
  );
}
