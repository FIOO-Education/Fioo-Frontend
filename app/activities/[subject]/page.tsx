"use client";

import ClassCard from "@/components/ClassCard/ClassCard";
import ClassHeader from "@/components/ClassHeader/ClassHeader";
import { Class } from "@/public/entities/entities";
import { getSubject } from "@/utils/get-subject";
import { doGetClasses } from "@/utils/req/do-get-classes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

const Page = () => {
  const [subject, setSubject] = useState<
    "Língua Portuguesa" | "Matemática" | null
  >(null);
  const router = useRouter();
  const pathname = usePathname();
  const [classes, setClasses] = useState<Class[]>([]);

  const handleGetClasses = useCallback(async (subject: string) => {
    const data = await doGetClasses(subject);
    setClasses(data.data);
  }, [setClasses]);

  useEffect(() => {
    const sub = pathname.trim().split("/")[2];
    if (sub === "1" || sub === "2") {
      const subject = getSubject(sub) as "Língua Portuguesa" | "Matemática" | null;
      if(subject) {
        setSubject(subject);
        handleGetClasses(subject);  
      }
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
        {classes.map((el, index) => (
          <ClassCard {...el} viewed={index <= 1} key={el.codClass} />
        ))}
      </div>
    </div>
  );
};

export default Page;
