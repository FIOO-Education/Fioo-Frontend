"use client";

import LevelCard, { LevelCardProps } from "@/components/LevelCard/LevelCard";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";
import Title from "@/components/Title/Title";
import { colors } from "@/public/colors/colors";
import BackButton from "@/components/BackButton/BackButton";
import { doGetGames } from "@/utils/req/do-get-games";
import { Activity } from "@/public/entities/entities";
import LoadingGif from "@/components/LoadingGif/LoadingGif";

export default function Page() {
  const router = useRouter();

  const [paths, setPaths] = useState<(Activity & { current: boolean })[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleGetGames = useCallback(async () => {
    const data = await doGetGames();
    setPaths(
      data.data.map((el, index) => ({
        ...el,
        current: index === 0,
      }))
    );
  }, []);

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
    handleGetGames();
  }, []);

  if(!paths.length) {
    return <LoadingGif center />
  }

  return (
    <div>
      <span className={styles.steps_title}>
        <BackButton color="blue" onClick={() => router.push("/games")} />
        <h3>Que tal um jogo?</h3>
      </span>
      <p className={styles.steps_text}>
        Hoje é dia de aprender alguma coisa nova!
      </p>
      <div className={styles.paths}>
        {paths.map((el, index) => {
          const props: { levelCard: LevelCardProps, activity: Activity } = {
            levelCard: {
              index,
              currentIndex,
              color: getCardColor(index),
              current: el.current
            },
            activity: {...el}
          }
          return (
            <LevelCard
              key={index}
              {...props}
            />
          )
        })}
      </div>

      <Title
        text="Desbloqueie os últimos níveis para liberar mais!"
        size="16px"
        theme={colors.black}
        centered
      />
    </div>
  );
}
