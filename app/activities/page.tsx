"use client";

import GradeCard from "@/components/GradeCard/GradeCard";
import ProfileIcon from "@/components/ProfileIcon/ProfileIcon";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";
import SubjectsInfo from "@/components/SubjectInfo/SubjectInfo";
import { colors } from "@/public/colors/colors";

export default function Page() {
  const router = useRouter();
  const [subjectsInfo, setSubjectsInfo] = useState([
    {
      name: "Língua Portuguesa",
      description: "Vamos aprender como nossa língua é escrita!",
      color: colors.green.radiant,
    },
    {
      name: "Matemática Básica",
      description: "Vamos aprender as contas básicas de essenciais!",
      color: colors.pink.pastel,
    },
  ]);
  const [grades, setGrades] = useState([
    {
      subject: "Português",
      section: "Gramática",
      content: "Vogais",
      grade: 7.8,
    },
    {
      subject: "Matemática",
      section: "Multiplicação",
      content: "Dois números",
      grade: 9.5,
    },
    {
      subject: "Matemática",
      section: "Soma",
      content: "O que são números?",
      grade: 8,
    },
    {
      subject: "Português",
      section: "Multiplicação",
      content: "Dois números",
      grade: 10,
    },
    {
      subject: "Matemática",
      section: "Divisão",
      content: "Fração",
      grade: 6.5,
    },
    {
      subject: "Português",
      section: "Texto",
      content: "Poesia",
      grade: 8.2,
    },
  ]);

  return (
    <div>
      <h3>E então, {"{Criança}"}</h3>
      <p>O que vamos estudar hoje?</p>
      <div className={styles.subjects}>
        {subjectsInfo.map((el) => (
          <SubjectsInfo key={el.name} {...el} />
          ))}
      </div>
      <h3>Avaliações</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {grades.map((el, index) => (
          <GradeCard {...el} key={index} />
        ))}
      </div>
      <h4 style={{ textAlign: "center" }}>Isso é tudo!</h4>
      <ProfileIcon onClick={() => router.push("/profile")} size="small" />
    </div>
  );
}
