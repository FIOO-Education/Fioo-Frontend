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
          router.push("/activities/quiz");
        },
      },
      {
        action: "Voltar para a tela inicial",
        onClick: () => {
          router.push("/home");
        },
      },
      {
        action: "Ir para a próxima aula",
        onClick: () => {
          console.log("próxima aula");
        },
        reverse: true,
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
        <svg width="100%" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", margin: "0 auto" }}>
          <g>
            <g>
              <title>background</title>
              <rect
                fill="none"
                width="100%"
                y="-1"
                x="-1"
              />
              <g
                display="flex"
                overflow="visible"
                y="0"
                x="0"
                height="100%"
                width="100%"
              >
                <rect
                  fill="none"
                  stroke-width="0"
                  y="0"
                  x="0"
                  height="100%"
                  width="100%"
                />
              </g>
            </g>
            <g style={{ display: "flex", justifyContent: "center" }}>
              <title>cool</title>
              <path
                id="cool"
                d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                fill="none"
              />
            </g>
            <text width="100%">
              <textPath fontSize={30} href="#cool">Você atingiu {result?.rightAnswer} de {result?.totalQuestion} acertos!</textPath>
            </text>
          </g>
        </svg>
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
