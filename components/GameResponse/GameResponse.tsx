import { MouseEventHandler, useEffect, useState } from "react";
import { useChildStore } from "@/stores/use-child";
import GameOptionCard from "../GameOptionCard/GameOptionCard";
import { StyledGameResponse } from "./GameResponse.style";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import { colors } from "@/public/colors/colors";
import { Alternative, Question } from "@/public/entities/entities";
import Rino from "@/public/images/rinoceronte.jpg";

interface GameResponseProps {
  currentQuestion: number;
  addAnswer: Function;
}

export default function GameResponse({ currentQuestion, addAnswer }: GameResponseProps) {
  const { currentQuiz } = useChildStore();
  const [ question, setQuestion ] = useState<Alternative | null>(null)
  const [ selected, setSelected ] = useState<number | undefined>(undefined);

  useEffect(() => {
    const curr = currentQuiz?.questions[currentQuestion].alternatives.find((el) => el.codAlternative === selected);
    curr && setQuestion(curr);
  }, [currentQuestion, selected]);

  return (
    <StyledGameResponse>
      <img
        src={currentQuiz?.questions[currentQuestion].image}
        alt="Game Image"
        height={300}
        style={{ maxWidth: "95%" }}
      />
      <p className="question-title">
        {currentQuiz?.questions[currentQuestion].question}
      </p>
      <section className="game-options">
        {currentQuiz?.questions[currentQuestion].alternatives.map(
          (el, index) => (
            <GameOptionCard key={el.codAlternative} setSelected={setSelected} isSelected={el.codAlternative === selected} index={index} {...el} />
          )
        )}
      </section>
      <ConfirmButton
        onClick={() => {
          if(selected !== undefined) {
            setSelected(undefined);
            setQuestion(null);
            addAnswer(question);
          }
        }}
        text="Confirmar alternativa"
        color={colors.pink.pastel}
      />
    </StyledGameResponse>
  );
}
