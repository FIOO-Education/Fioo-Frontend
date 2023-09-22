"use client";

import { useCallback } from "react";
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
  const gamePoints = useChildStore((s) => s.gamePoints);
  const setGamePoints = useChildStore((s) => s.setGamePoints);

  const goToNextQuestion = useCallback(() => {
    if (optionSelected.correctOption) {
      setGamePoints(gamePoints + 1);
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
  }, [game, setGame, optionSelected, gamePoints, setGamePoints]);

  // if (game.currentGame. === null) {
  //   router.push("/games/steps");
  //   return null;
  // }

  return (
    <div>
      <BackButton onClick={() => router.push("/games/steps")} fixed />
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
          <GameStep key={el.question} index={index + 1} />
        ))}
      </section>
      <GameResponse onClick={goToNextQuestion} />
    </div>
  );
}
