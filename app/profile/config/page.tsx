"use client";

import ChangeIcon from "@/public/images/change-icon.svg";
import InstagramIcon from "@/public/images/instagram-icon.svg";
import ConfigIcon from "@/public/images/config-icon.svg";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import ConfigOption from "@/components/ConfigOption/ConfigOption";
import { usePathname, useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const [options, setOptions] = useState([
        {
            icon: ChangeIcon.src,
            text: "Alterar foto de perfil",
            onClick: () => router.push("/profile/config/icon")
        },
        {
            icon: InstagramIcon.src,
            text: "Instagram",
            onClick: () => window.location.replace("https://www.instagram.com/fiooeducation/?hl=pt"),
        },
    ]);

  return (
    <div>
      <section className={styles.crumb}>
          <Image src={ConfigIcon.src} alt="Config Icon" width={27} height={27} />
          <h3>Configurações</h3>
      </section>
      <section className={styles.options}>
        {options.map((el) => <ConfigOption key={el.text} {...el} />)}
      </section>
    </div>
  );
}
