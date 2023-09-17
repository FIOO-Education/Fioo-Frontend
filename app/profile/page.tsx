"use client";

import ProfileIcon from "@/components/ProfileIcon/ProfileIcon";
import "./page.style.css";
import { useState } from "react";
import ProfileInfoChip from "@/components/ProfileInfoChip/ProfileInfoChip";
import Title from "@/components/Title/Title";
import { colors } from "@/public/colors/colors";
import ConfigIcon from "@/public/images/config-icon.svg";
import ProfileActivityCard from "@/components/ProfileActivityCard/ProfileActivityCard";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const pathName = usePathname();
  const [info, setInfo] = useState([
    {
      number: 10,
      title: "Dias seguidos",
      description: "Jogando, aprendendo e se divertindo dentro do FIOO.",
      theme: "blue",
    },
    {
      number: 13,
      title: "Atividades",
      description: "Já realizadas e aprendidas dentro do FIOO.",
      theme: "green",
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

  return (
    <div className="profile-page">
      <ProfileIcon size="big" />
      <Title text="{Criança}" size="28px" theme={colors.black} />
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
        <Image
          src={ConfigIcon.src}
          alt="Config Icon"
          width={27}
          height={27}
          onClick={() => router.push(pathName + "/config")}
        />
      </div>
    </div>
  );
}
