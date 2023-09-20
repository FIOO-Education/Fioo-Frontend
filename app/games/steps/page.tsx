"use client";

import LevelCard from "@/components/LevelCard/LevelCard";
import InvertedArrow from "@/public/images/inverted-arrow.png";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";
import Title from "@/components/Title/Title";
import { colors } from "@/public/colors/colors";
import Image from "next/image";

export default function Page() {
  const router = useRouter();

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
    const path = paths.find((el) => el.current);
    if (path) {
      setCurrentIndex(paths.indexOf(path));
    }
  }, [paths]);

  return (
    <div>
      <span className={styles.steps_title}>
        <Image
          onClick={() => router.push("/games")}
          src={InvertedArrow.src}
          alt="Inverted arrow"
          width={10}
          height={17.5}
        />
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
