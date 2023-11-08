"use client";

import BackButton from "@/components/BackButton/BackButton";
import ConfirmButton from "@/components/ConfirmButton/ConfirmButton";
import StarButton from "@/components/StarButton/StarButton";
import VideoCard from "@/components/VideoCard/VideoCard";
import VideoInfo from "@/components/VideoInfo/VideoInfo";
import { colors } from "@/public/colors/colors";
import { Activity } from "@/public/entities/entities";
import { useChildStore } from "@/stores/use-child";
import { doGetActivity } from "@/utils/req/do-get-activity";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [ duration, setDuration ] = useState<string>("");
  const [ activity, setActivity ] = useState<Activity | null>(null);
  const [ isFavorite, setFavorite ] = useState(false);
  const { currentClass, setCurrentQuiz } = useChildStore();

  const handleGetActivity = useCallback(async (codClass: number) => {
    const data = await doGetActivity(codClass);
    if(data.data.length) {
        setActivity(data.data[0]);
    }
  }, []);

  const handleClick = useCallback(() => {
    if (
      currentClass?.title &&
      currentClass?.codClass &&
      currentClass?.subject &&
      activity
    ) {
      setCurrentQuiz(activity);
      router.push("/activities/quiz");
    }
  }, [activity, currentClass, setCurrentQuiz]);

  useEffect(() => {
    if (!currentClass) {
      router.push(`/activities/${currentClass}`);
    } else {
        handleGetActivity(currentClass.codClass);
    }
  }, [currentClass]);

  useEffect(() => {
    let fav = localStorage.getItem("fav");
    if(fav) {
        const isFavorited = (JSON.parse(fav) as string[]).find((el) => el === currentClass?.nameClass);
        if(isFavorited) setFavorite(true);
    }
  }, []);

  if (!currentClass) {
    return <></>;
  }

  return (
    <div style={{ color: colors.black }}>
      <BackButton
        onClick={() => router.push("/activities")}
        fixed
        color={currentClass.subject === "Língua Portuguesa" ? "pink" : "blue"}
      />
      <StarButton
        color={currentClass.subject === "Língua Portuguesa" ? "pink" : "blue"}
        fixed
        isFavorited={isFavorite}
        el={currentClass.nameClass}
      />
      <VideoCard setDuration={setDuration} video={currentClass.videoLink} />
      <h3 style={{ textAlign: "left" }}>
        <span
          style={{
            color:
              currentClass.subject === "Língua Portuguesa"
                ? colors.pink.dark
                : colors.blue.dark,
          }}
        >
          {currentClass.title} |
        </span>{" "}
        {currentClass.nameClass}
      </h3>
      <VideoInfo
        color={currentClass.subject === "Língua Portuguesa" ? "pink" : "blue"}
        duration={duration}
        level="Matemática Nível I"
      />
      <p
        style={{
          width: "90%",
          margin: "0 auto",
          fontSize: 15,
        }}
      >
        {currentClass.description}
      </p>
      <ConfirmButton
        text="Ir para exercícios"
        color={currentClass.subject === "Língua Portuguesa" ? "pink" : "blue"}
        onClick={handleClick}
        full
      />
    </div>
  );
};

export default Page;
