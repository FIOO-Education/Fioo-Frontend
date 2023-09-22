"use client";

import LevelCard from "@/components/LevelCard/LevelCard";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";
import Title from "@/components/Title/Title";
import { colors } from "@/public/colors/colors";
import BackButton from "@/components/BackButton/BackButton";
import { useChildStore } from "@/stores/use-child";

export default function Page() {
  const router = useRouter();
  const game = useChildStore((s) => s.game)
  const setGame = useChildStore((s) => s.setGame)
  const setOptionSelected = useChildStore((s) => s.setOptionSelected)
  const setAnswers = useChildStore((s) => s.setAnswers)

  const [paths, setPaths] = useState([
    {
      level: "Nível 1",
      current: true,
    },
    {
      level: "Nível 2",
      current: false,
    },
    {
      level: "Nível 3",
      current: false,
    },
    {
      level: "Nível 4",
      current: false,
    },
    {
      level: "Nível 5",
      current: false,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardColor = useCallback((index: number) => {
    const colorsArray = [
      colors.pink.pastel,
      colors.blue.pastel,
      colors.green.pastel,
    ];
    const colorIndex = index % colorsArray.length;
    return colorsArray[colorIndex];
  }, []);

  useEffect(() => {
    let tempGame = {...game};
    tempGame.currentQuestion = 1;
    tempGame.maxQuestionReached = 1;
    const path = paths.find((el) => el.current);
    if (path) {
      setCurrentIndex(paths.indexOf(path));
    }
    setOptionSelected({ selected: null, correctOption: false });
    setGame(tempGame);
    setAnswers([]);
  }, []);

  return (
    <div>
      <span className={styles.steps_title}>
      <BackButton onClick={() => router.push("/games")} />
        <h3>Que tal um jogo?</h3>
      </span>
      <p className={styles.steps_text}>Hoje é dia de aprender alguma coisa nova!</p>
      <div className={styles.paths}>
        {paths.map((el, index) => (
          <LevelCard
            key={el.level}
            {...el}
            index={index}
            currentIndex={currentIndex}
            color={getCardColor(index)}
          />
        ))}
      </div>

      <Title
        text="Desbloqueie os últimos níveis para liberar mais!"
        size="18px"
        theme={colors.black}
      />
    </div>
  );
}
