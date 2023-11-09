"use client";

import GradeCard from "@/components/GradeCard/GradeCard";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";
import SubjectsInfo from "@/components/SubjectInfo/SubjectInfo";
import { colors } from "@/public/colors/colors";
import PageTitle from "@/components/PageTitle/PageTitle";
import { useChildStore } from "@/stores/use-child";
import { doGetCurriculum } from "@/utils/req/do-get-curriculum";
import { Curriculum } from "@/public/entities/entities";
import LoadingGif from "@/components/LoadingGif/LoadingGif";

const Page = () => {
  const { student } = useChildStore();
  const [isLoading, setIsLoading] = useState(true);
  const [subjectsInfo, setSubjectsInfo] = useState([
    {
      id: 1,
      name: "Língua Portuguesa",
      description: "Vamos aprender como nossa língua é escrita!",
      color: colors.green.radiant,
    },
    {
      id: 2,
      name: "Matemática Básica",
      description: "Vamos aprender as contas básicas de essenciais!",
      color: colors.pink.radiant,
    },
  ]);
  const [grades, setGrades] = useState<Curriculum[]>([]);

  const handleGetCurriculum = useCallback(
    async (codStudent: number) => {
      const data = await doGetCurriculum(codStudent);
      setGrades(data.data);
      setIsLoading(false);
    },
    [student, setIsLoading]
  );

  useEffect(() => {
    if (student?.codstudent) {
      handleGetCurriculum(student.codstudent);
    }
  }, [student]);

  return (
    <div>
      <PageTitle
        title={`E então, ${student?.username}`}
        text="O que vamos estudar hoje?"
      />
      <div className={styles.subjects}>
        {subjectsInfo.map((el) => (
          <SubjectsInfo key={el.name} {...el} />
        ))}
      </div>
      <h3>Avaliações</h3>
      <span>
        {isLoading ? (
          <LoadingGif />
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {grades && grades.map((el, index) => (
                <GradeCard {...el} key={index} />
              ))}
            </div>
            <h4 style={{ textAlign: "center" }}>Isso é tudo!</h4>
          </>
        )}
      </span>
    </div>
  );
};

export default Page;
