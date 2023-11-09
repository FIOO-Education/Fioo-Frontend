"use client";

import PageTitle from "@/components/PageTitle/PageTitle";
import WorldIcon from "@/public/images/world.svg";
import BeeIcon from "@/public/images/bee.svg";
import StarIcon from "@/public/images/star.svg";
import styles from "./page.module.css";
import { useCallback, useEffect, useState } from "react";
import GameCard from "@/components/GameCard/GameCard";
import ProfileActivityCard from "@/components/ProfileActivityCard/ProfileActivityCard";
import { useChildStore } from "@/stores/use-child";
import { Action, Activity } from "@/public/entities/entities";
import { doGetGames } from "@/utils/req/do-get-games";
import LoadingGif from "@/components/LoadingGif/LoadingGif";
import { doGetRecentPlayed } from "@/utils/req/do-get-recent-played";

export default function Page() {
  const { student } = useChildStore();
  const [recentPlayed, setRecentPlayed] = useState<Action[]>([]);
  const [suggestions, setSuggestions] = useState<Activity[]>([]);

  const handleGetGames = useCallback(async () => {
    const { data } = await doGetGames();
    setSuggestions(data);
  }, []);

  const handleGetRecentPlayed = useCallback(async () => {
    const { data } = await doGetRecentPlayed(student!.codstudent);
    setRecentPlayed(data);
  }, [student]);

  useEffect(() => {
    handleGetGames();
    handleGetRecentPlayed();
  }, []);

  if (!recentPlayed.length || !suggestions.length) {
    return <LoadingGif center />;
  }

  return (
    <div className={styles.game_page}>
      <PageTitle
        title={`Eai, ${student?.username}`}
        text="O que iremos jogar hoje?"
      />
      {recentPlayed.length && (
        <>
          <h3>Jogados recentemente</h3>
          <section className={styles.recent_played}>
            {recentPlayed.slice(0, 3).map((el, index) => (
              <GameCard key={index} {...el} index={index} size="small" />
            ))}
          </section>
        </>
      )}
      <h3 style={{ marginTop: 15 }}>Que tal esses?</h3>
      <section className={styles.suggestions}>
        {suggestions.map((el, index) => (
          <GameCard key={index} {...el} index={index} size="big" />
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
