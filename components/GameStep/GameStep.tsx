import { useChildStore } from "@/stores/use-child";
import { StyledGameStep } from "./GameStep.style";
import { useEffect, useState } from "react";

interface GameStepProps {
  index: number;
  onClick: (index: number) => void;
}

export default function GameStep({ index, onClick }: GameStepProps) {
  // const game = useChildStore((s) => s.game);
  const [answered, setAnswered] = useState<boolean | null>(null);

  // useEffect(() => {
  //   setAnswered(index <= game.maxQuestionReached);
  // }, [game]);

  if (answered === null) {
    return null;
  }

  return (
    <StyledGameStep onClick={() => onClick(index)} answered={answered}>
      <p>{index}</p>
    </StyledGameStep>
  );
}
