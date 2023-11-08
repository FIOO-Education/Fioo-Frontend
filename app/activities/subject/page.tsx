"use client";

import ClassCard from "@/components/ClassCard/ClassCard";
import ClassHeader from "@/components/ClassHeader/ClassHeader";
import LoadingGif from "@/components/LoadingGif/LoadingGif";
import { Class } from "@/public/entities/entities";
import { useChildStore } from "@/stores/use-child";
import { getSubject } from "@/utils/get-subject";
import { doGetClasses } from "@/utils/req/do-get-classes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

const Page = () => {
  const { subject } = useChildStore();
  const [sub, setSubject] = useState<
    "Língua Portuguesa" | "Matemática" | null
  >(null);
  const router = useRouter();
  const pathname = usePathname();
  const [ classes, setClasses ] = useState<Class[]>([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const handleGetClasses = useCallback(async (subject: string) => {
    const data = await doGetClasses(subject);
    setClasses(data.data);
    setIsLoading(false);
  }, [setClasses, setIsLoading]);

  useEffect(() => {
    if(subject) {
      const sub = getSubject(subject) as "Língua Portuguesa" | "Matemática" | null;
      if ((sub === "Matemática" || sub === "Língua Portuguesa") && subject) {
        setSubject(sub);
        handleGetClasses(sub);
      } else {
        router.push("/activities");
      }
    }
  }, []);

  if(!subject) {
    router.push("/activities");
    return null;
  } 

  return (
    <div>
      <ClassHeader subject={sub as "Língua Portuguesa" | "Matemática"} />
      <h3>Aulas</h3>
      {isLoading ? <LoadingGif /> : (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {classes && classes.map((el, index) => (
          <ClassCard {...el} viewed={index <= 1} key={el.codClass} />
        ))}
      </div>
      )}
    </div>
  );
};

export default Page;
