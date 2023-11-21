"use client";

import ProfileIcon from "@/components/ProfileIcon/ProfileIcon";
import "./page.style.css";
import { useCallback, useEffect, useState } from "react";
import ProfileInfoChip from "@/components/ProfileInfoChip/ProfileInfoChip";
import Title from "@/components/Title/Title";
import { colors } from "@/public/colors/colors";
import ConfigIcon from "@/public/images/config-icon.svg";
import ProfileActivityCard from "@/components/ProfileActivityCard/ProfileActivityCard";
import { useRouter, usePathname } from "next/navigation";
import { useChildStore } from "@/stores/use-child";
import { doGetConsecutiveDays } from "@/utils/req/do-get-consecutive-days";
import LoadingGif from "@/components/LoadingGif/LoadingGif";
import { doGetCurriculum } from "@/utils/req/do-get-curriculum";

export default function Page() {
  const router = useRouter();
  const pathName = usePathname();
  const { student } = useChildStore();
  const [info, setInfo] = useState<{
    number: number;
    title: string;
    description: string;
    theme: string;
  }[]>([]);
  const [activity, setActivity] = useState<any[]>([]);

  const handleGetInfo = useCallback(async () => {
    // const consecutiveDays = (await doGetConsecutiveDays(student!.codstudent)).data;
    const curr = (await doGetCurriculum(student!.codstudent)).data.filter((el) => el.codActivity);

    setInfo([
      {
        number: 0,
        title: "Dias seguidos",
        description: "Jogando, aprendendo e se divertindo dentro do FIOO.",
        theme: "blue",
      },
      {
        number: curr.length,
        title: "Atividades",
        description: "Já realizadas e aprendidas dentro do FIOO.",
        theme: "green",
      },
    ])
  }, [student, setInfo]);

  useEffect(() => {
    handleGetInfo();
    setActivity([
      {
        title: "Tarefas",
        description: "Que tal algumas atividades?",
        theme: "green",
        redirect: "/activities"
      },
      {
        title: "Jogos",
        description: "Que tal alguns jogos divertidos?",
        theme: "pink",
        redirect: "/games"
      },
    ]);
  }, []);

  if(!activity.length || !info.length) {
    return <LoadingGif center />;
  }

  return (
    <div className="profile-page">
      <ProfileIcon size="big" />
      <Title text={student?.username!} size="28px" theme={colors.black} centered />
      <div className="child-info">
        {...info.map((el) => <ProfileInfoChip key={el.title} {...el} />)}
      </div>
      <div className="activity-wrapper">
        {activity.map((el) => (
          <ProfileActivityCard key={el.title} {...el} />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: "25px",
          right: "25px",
          cursor: "pointer",
          padding: "8px",
        }}
      >
        <img src={ConfigIcon.src} style={{ userSelect: "none" }} onClick={() => router.push(pathName + "/config")} />
      </div>
    </div>
  );
}
