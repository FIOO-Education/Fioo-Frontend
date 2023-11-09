"use client";

import InvertedArrow from "@/public/images/inverted-arrow.png";
import LeftArrow from "@/public/images/icon-changer-left.svg";
import RightArrow from "@/public/images/icon-changer-right.svg";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import ProfileIcon from "@/components/ProfileIcon/ProfileIcon";
import { useCallback, useMemo, useState } from "react";
import DefaultIcon from "@/public/images/profile-image.png";
import ManIcon from "@/public/images/man-icon.png";
import GirlIcon from "@/public/images/girl-icon.png";
import { useChildStore } from "@/stores/use-child";
import BackButton from "@/components/BackButton/BackButton";
import { Student } from "@/public/entities/entities";
import { doPatchStudent } from "@/utils/req/do-patch-student";

const icons = [
  "https://h-leone.github.io/images/public/images/fiooFundoRoxo.png",
  "https://h-leone.github.io/images/public/images/fiooFundoAzul.png",
  "https://h-leone.github.io/images/public/images/fiooFundoAmarelo.png",
]

export default function Page() {
  const memoizedIcons = useMemo(() => icons, []);
  const router = useRouter();
  const { student, setStudent } = useChildStore();
  const [currentIndex, setCurrentIndex] = useState(memoizedIcons.indexOf(student!.image));

  const handleChangeIcon = useCallback(
    (increment: number) => {
      let newIndex = currentIndex + increment;
      if (newIndex > icons.length - 1) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = icons.length - 1;
      }

      setCurrentIndex(newIndex);
    },
    [currentIndex, setCurrentIndex, icons]
  );

  const handleSetIcon = useCallback(async () => {
    const newStudent = {
      ...student,
      image: memoizedIcons[currentIndex]
    } as Student;
    setStudent({ ...newStudent });
    await doPatchStudent(newStudent);
  }, [currentIndex, icons, student, setStudent]);

  return (
    <div>
      <BackButton color="blue" onClick={() => router.push("/profile/config")} fixed />
      <p className={styles.icon_title}>Alterar foto de perfil</p>
      <section className={styles.icon_changer}>
        <ProfileIcon size="big" src={icons[currentIndex]} />
        <div className={styles.icon_select}>
          <img
            src={LeftArrow.src}
            alt="Back Icon Changer"
            onClick={() => handleChangeIcon(-1)}
          />
          <button
            onClick={() => {
              handleSetIcon();
              router.push("/profile");
            }}
          >
            Selecionar
          </button>
          <img
            src={RightArrow.src}
            alt="Next Icon Changer"
            onClick={() => handleChangeIcon(1)}
          />
        </div>
      </section>
    </div>
  );
}
