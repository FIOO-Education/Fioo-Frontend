"use client";

import PageTitle from "@/components/PageTitle/PageTitle";
import WorldIcon from "@/public/images/world.svg";
import BeeIcon from "@/public/images/bee.svg";
import StarIcon from "@/public/images/star.svg";
import { useState } from "react";
import GameCard from "@/components/GameCard/GameCard";
import styles from "../games/page.module.css";
import ProfileActivityCard from "@/components/ProfileActivityCard/ProfileActivityCard";
import ExerciseCard from "@/components/ExerciseCard/ExerciseCard";

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
  const [activity, setActivity] = useState([
    {
      title: "Tarefas",
      description: "Que tal algumas atividades?",
      theme: "green",
      redirect: "/activities",
    },
    {
      title: "Jogos",
      description: "Que tal alguns jogos divertidos?",
      theme: "pink",
      redirect: "/games",
    },
  ]);
  const [continuePlaying, setContinuePlaying] = useState({
    codClass: 1,
    subject: "Matemática",
    title: "Soma",
    nameClass: "O que são números"
  });

  return (
    <div>
      <PageTitle
        title="Olá, {Criança} 👋"
        text="Hoje é um ótimo dia para se divertir aprendendo!"
      />
      <h3>Continue seu exercício:</h3>
      <ExerciseCard {...continuePlaying} />
      <h3>Jogados recentemente</h3>
      <section className={styles.recent_played}>
        {recentPlayed.map((el, index) => (
          <GameCard key={index} {...el} size="small" />
        ))}
      </section>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          padding: "20px 0"
        }}
      >
        {activity.map((el) => (
          <ProfileActivityCard key={el.title} {...el} />
        ))}
      </div>
    </div>
  );
}
