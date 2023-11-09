"use client";

import PageTitle from "@/components/PageTitle/PageTitle";
import { useCallback, useEffect, useState } from "react";
import GameCard from "@/components/GameCard/GameCard";
import styles from "../games/page.module.css";
import ProfileActivityCard from "@/components/ProfileActivityCard/ProfileActivityCard";
import ExerciseCard from "@/components/ExerciseCard/ExerciseCard";
import { useChildStore } from "@/stores/use-child";
import { doGetRecentPlayed } from "@/utils/req/do-get-recent-played";
import { Action, Class } from "@/public/entities/entities";
import LoadingGif from "@/components/LoadingGif/LoadingGif";
import { doGetClasses } from "@/utils/req/do-get-classes";

export default function Page() {
  const { student } = useChildStore();
  const [recentPlayed, setRecentPlayed] = useState<Action[]>([]);
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
  const [continuePlaying, setContinuePlaying] = useState<Class | null>(null);

  const handleGetRecentPlayed = useCallback(async () => {
    const { data } = await doGetRecentPlayed(student!.codstudent);
    setRecentPlayed(data);
  }, [student]);

  const handleGetContinuePlaying = useCallback(async () => {
    const { data } = await doGetClasses("Matemática");
    if(data.length) {
      setContinuePlaying(data[0]);
    }
  }, []);

  useEffect(() => {
    handleGetRecentPlayed();
    handleGetContinuePlaying();
  }, []);

  if(!recentPlayed.length || !continuePlaying) {
    return <LoadingGif center />
  }

  return (
    <div>
      <PageTitle
        title={`Olá, ${student?.username} 👋`}
        text="Hoje é um ótimo dia para se divertir aprendendo!"
      />
      <h3>Continue seu exercício:</h3>
      <ExerciseCard {...continuePlaying} />
      <h3>Jogados recentemente</h3>
      <section className={styles.recent_played}>
        {recentPlayed.slice(0, 3).map((el, index) => (
          <GameCard key={index} {...el} index={index} size="small" />
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
