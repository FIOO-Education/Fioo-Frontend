import { useChildStore } from "@/stores/use-child";
import { StyledResultDisplay } from "./ResultDisplay.style";
import { colors } from "@/public/colors/colors";
import Mascote from "@/public/images/mascote.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ActionChip from "../ActionChip/ActionChip";

export interface Action {
  action: string;
  onClick: () => void;
  reverse?: boolean;
}

const ResultDisplay = () => {
  const router = useRouter();
  const { currentQuiz, result } = useChildStore();
  const [actions, setActions] = useState<Action[]>([]);

  useEffect(() => {
    setActions([
      {
        action: "Tentar novamente",
        onClick: () => {
          router.push(currentQuiz?.codClass ? "/activities/quiz" : "/games/game");
        },
      },
      {
        action: "Voltar para a tela inicial",
        onClick: () => {
          router.push("/home");
        },
      },
    ]);
  }, []);

  if (!currentQuiz?.subject) {
    router.push("/activities");
    return null;
  }

  return (
    <StyledResultDisplay
      textColor={
        currentQuiz!.subject === "Matemática"
          ? colors.blue.dark
          : colors.pink.dark
      }
    >
      <h2>
        <span>{currentQuiz?.subject} |</span> {currentQuiz?.title}
      </h2>
      <div>
        <h3>Você atingiu {result?.rightAnswer} de {result?.totalQuestion} acertos!</h3>
        <img src={Mascote.src} alt="Mascote do FIOO" width={115} height={170} />
        <p>Parabéns! Que tal mais uma tentativa?</p>
      </div>
      <section>
        {actions.map((el) => (
          <ActionChip key={el.action} subject={currentQuiz.subject} {...el} />
        ))}
      </section>
    </StyledResultDisplay>
  );
};

export default ResultDisplay;
