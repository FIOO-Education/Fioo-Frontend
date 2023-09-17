"use client";

import PageTitle from "@/components/PageTitle/PageTitle";
import WorldIcon from "@/public/images/world.svg";
import BeeIcon from "@/public/images/bee.svg";
import StarIcon from "@/public/images/star.svg";
import styles from "./page.module.css";
import { useState } from "react";
import GameCard from "@/components/GameCard/GameCard";
import ProfileActivityCard from "@/components/ProfileActivityCard/ProfileActivityCard";

export default function Page() {
  const [recentPlayed, setRecentPlayed] = useState([
    {
      icon: WorldIcon.src,
      title: "Caça-palavras",
    },
    {
      icon: BeeIcon.src,
      title: "Caça-palavras",
    },
    {
      icon: StarIcon.src,
      title: "Caça-palavras",
    },
  ]);
  const [suggestions, setSuggestions] = useState([
    {
      icon: WorldIcon.src,
      title: "Caça-palavras",
    },
    {
      icon: BeeIcon.src,
      title: "Caça-palavras",
    },
    {
      icon: StarIcon.src,
      title: "Caça-palavras",
    },
  ]);

  return (
    <div className={styles.game_page}>
      <PageTitle title="Eai, {Criança}" text="O que iremos jogar hoje?" />
      <h3>Jogados recentemente</h3>
      <section className={styles.recent_played}>
        {recentPlayed.map((el, index) => (
          <GameCard key={index} {...el} size="small" />
        ))}
      </section>
      <h3>Que tal esses?</h3>
      <section className={styles.suggestions}>
        {suggestions.map((el, index) => (
          <GameCard key={index} {...el} size="big" />
        ))}
      </section>
      <ProfileActivityCard
        title="Tarefas"
        description="Que tal irmos para as atividades?"
        theme="green"
        redirect="/activities"
        center
      />
    </div>
  );
}
