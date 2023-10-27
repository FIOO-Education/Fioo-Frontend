"use client";

import { useCallback, useEffect } from "react";
import styles from "./page.module.css";
import BackButton from "@/components/BackButton/BackButton";
import { useRouter } from "next/navigation";
import { useChildStore } from "@/stores/use-child";
import GameStep from "@/components/GameStep/GameStep";
import GameResponse from "@/components/GameResponse/GameResponse";
import { colors } from "@/public/colors/colors";

export default function Page() {
  const router = useRouter();
  const game = useChildStore((s) => s.game);
  const setGame = useChildStore((s) => s.setGame);
  const optionSelected = useChildStore((s) => s.optionSelected);
  const setOptionSelected = useChildStore((s) => s.setOptionSelected);
  const answers = useChildStore((s) => s.answers);
  const setAnswers = useChildStore((s) => s.setAnswers);

  const handleStepClick = useCallback(
    (index: number) => {
      if (index <= game.maxQuestionReached) {
        let tempGame = { ...game };
        tempGame.currentQuestion = index;
        setGame(tempGame);
      }
    },
    [game, setGame]
  );

  const goToNextQuestion = useCallback(() => {
    const alreadyExists = answers.find(
      (el) => el.questionId === game.currentQuestion
    );

    if (optionSelected.correctOption && alreadyExists === undefined) {
      setAnswers([...answers, { questionId: game.currentQuestion }]);
    } else if (!optionSelected.correctOption && alreadyExists !== undefined) {
      let tempAnswers = [...answers].filter(
        (el) => el.questionId !== game.currentQuestion
      );
      setAnswers(tempAnswers);
    }

    if (optionSelected.selected === null) {
      return;
    } else if (game.currentQuestion === 5) {
      router.push("/games/result");
    } else if (game.currentQuestion < 5) {
      let tempGame = { ...game };
      tempGame.currentQuestion++;
      setGame(tempGame);
      let tempOptionSelected = { ...optionSelected };
      tempOptionSelected.selected = null;
      setOptionSelected(tempOptionSelected);
    }
  }, [game, setGame, optionSelected, answers, setAnswers]);

  useEffect(() => {
    if (game.currentQuestion > game.maxQuestionReached) {
      let tempGame = { ...game };
      tempGame.maxQuestionReached = game.currentQuestion;
      setGame(tempGame);
    }
  }, [game.currentQuestion]);

  if (game.currentGame.id === null) {
    router.push("/games/steps");
    return 0;
  }

  return (
    <div className={styles.game_page_wrapper}>
      <BackButton color="blue" onClick={() => router.push("/games/steps")} fixed />
      <p
        style={{
          color: colors.black,
          textAlign: "center",
          fontWeight: "500",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            color: colors.pink.dark,
            fontWeight: "700",
          }}
        >
          Nível {game.currentGame.id} |
        </span>{" "}
        Complete a palavra
      </p>
      <section className={styles.game_step}>
        <hr />
        {game.currentGame.questions.map((el, index) => (
          <GameStep
            onClick={handleStepClick}
            key={el.question}
            index={index + 1}
          />
        ))}
      </section>
      <GameResponse onClick={goToNextQuestion} />
    </div>
  );
}
