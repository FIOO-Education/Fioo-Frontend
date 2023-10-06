"use client";

import ClassCard from "@/components/ClassCard/ClassCard";
import ClassHeader from "@/components/ClassHeader/ClassHeader";
import { Class } from "@/public/entities/entities";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [subject, setSubject] = useState<
    "Língua Portuguesa" | "Matemática" | null
  >(null);
  const router = useRouter();
  const pathname = usePathname();
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    const sub = pathname.trim().split("/")[2];
    if (sub === "1") {
      setSubject("Língua Portuguesa");
      setClasses([
        {
          codClass: 1,
          title: "Sílabas",
          subject: "Língua Portuguesa",
          nameClass: "Divisão Sílabica",
          videoLink: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          viewed: true,
        },
        {
          codClass: 2,
          title: "Palavras",
          subject: "Língua Portuguesa",
          nameClass: "Divisão Sílabica",
          videoLink: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          viewed: true,
        },
        {
          codClass: 3,
          title: "Poesia",
          subject: "Língua Portuguesa",
          nameClass: "Divisão Sílabica",
          videoLink: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          viewed: false,
        },
      ]);
    } else if (sub === "2") {
      setSubject("Matemática");
      setClasses([
        {
          codClass: 1,
          title: "Soma",
          subject: "Matemática",
          nameClass: "O que são números",
          videoLink: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          viewed: true,
        },
        {
          codClass: 1,
          title: "Subtração",
          subject: "Matemática",
          nameClass: "O que são números",
          videoLink: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          viewed: true,
        },
        {
          codClass: 1,
          title: "Multiplicação",
          subject: "Matemática",
          nameClass: "O que são números",
          videoLink: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          viewed: false,
        },
      ]);
    } else {
      router.push("/activities");
    }
  }, []);

  if (!subject) {
    return null;
  }

  return (
    <div>
      <ClassHeader subject={subject} />
      <h3>Aulas</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {classes.map((el) => (
          <ClassCard {...el} key={el.codClass} />
        ))}
      </div>
    </div>
  );
};

export default Page;
