import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import { useChildStore } from "@/stores/use-child";
import GameOptionCard from "../GameOptionCard/GameOptionCard";
import { StyledGameResponse } from "./GameResponse.style";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import { colors } from "@/public/colors/colors";

interface GameResponseProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

export default function GameResponse({ onClick }: GameResponseProps) {
  const game = useChildStore((s) => s.game);
  const [currentQuestion, setCurrentQuestion] = useState<number>(-1);

  useEffect(() => {
    setCurrentQuestion(game.currentQuestion - 1);
  }, [game.currentQuestion]);

  if (currentQuestion === -1) {
    return null;
  }

  return (
    <StyledGameResponse>
      <Image
        src={game.currentGame.questions[currentQuestion].imgSrc}
        alt="Game Image"
        width={360}
        height={200}
      />
      <p className="question-title">
        {game.currentGame.questions[currentQuestion].question}
      </p>
      <section className="game-options">
        {game.currentGame.questions[currentQuestion].options.map(
          (el, index) => (
            <GameOptionCard key={el.option} index={index} {...el} />
          )
        )}
      </section>
      <ConfirmButton
        onClick={onClick}
        text="Confirmar alternativa"
        color={colors.pink.pastel}
      />
    </StyledGameResponse>
  );
}
