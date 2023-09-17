"use client";

import InvertedArrow from "@/public/images/inverted-arrow.png";
import LeftArrow from "@/public/images/icon-changer-left.svg";
import RightArrow from "@/public/images/icon-changer-right.svg";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import ProfileIcon from "@/components/ProfileIcon/ProfileIcon";
import { useCallback, useState } from "react";
import DefaultIcon from "@/public/images/profile-image.png";
import ManIcon from "@/public/images/man-icon.png";
import GirlIcon from "@/public/images/girl-icon.png";
import { useChildStore } from "@/stores/use-profile";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const [icons, setIcons] = useState([
    DefaultIcon.src,
    ManIcon.src,
    GirlIcon.src,
  ]);
  const userIcon = useChildStore((s) => s.userIcon);
  const setUserIcon = useChildStore((s) => s.setUserIcon);
  const [currentIndex, setCurrentIndex] = useState(icons.indexOf(userIcon));

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

  const handleSetIcon = useCallback(() => {
    setUserIcon(icons[currentIndex]);
  }, [currentIndex, icons, setUserIcon]);

  return (
    <div>
      <Image
        onClick={() => router.push("/profile/config")}
        className={styles.icon_button}
        src={InvertedArrow.src}
        alt="Inverted arrow"
        width={20}
        height={20}
      />
      <p className={styles.icon_title}>Alterar foto de perfil</p>
      <section className={styles.icon_changer}>
        <ProfileIcon size="big" src={icons[currentIndex]} />
        <div className={styles.icon_select}>
          <Image
            src={LeftArrow.src}
            alt="Back Icon Changer"
            onClick={() => handleChangeIcon(-1)}
            width={20}
            height={35}
          />
          <button
            onClick={() => {
              handleSetIcon();
              router.push("/profile");
            }}
          >
            Selecionar
          </button>
          <Image
            src={RightArrow.src}
            alt="Next Icon Changer"
            onClick={() => handleChangeIcon(1)}
            width={20}
            height={35}
          />
        </div>
      </section>
    </div>
  );
}
