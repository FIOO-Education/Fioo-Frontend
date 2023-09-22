"use client";

import { useEffect, useState } from "react";
import { StyledFooter } from "./Footer.style";
import { useChildStore } from "@/stores/use-child";
import HomeIcon from "@/public/images/home-icon.svg";
import CatalogIcon from "@/public/images/catalog-icon.svg";
import StarIcon from "@/public/images/star-icon.svg";
import ProfileIcon from "@/public/images/profile-icon.svg";
import FooterAction from "../FooterAction/FooterAction";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();
  const footerActions = useChildStore((s) => s.footerActions);
  const setFooterActions = useChildStore((s) => s.setFooterActions);

  useEffect(() => {
    let tempFooterActions = [
      {
        src: HomeIcon.src,
        route: "/home",
        active: false,
      },
      {
        src: CatalogIcon.src,
        route: "/activities",
        active: false,
      },
      {
        src: StarIcon.src,
        route: "/games",
        active: false,
      },
      {
        src: ProfileIcon.src,
        route: "/profile",
        active: false,
      },
    ];
    const rootPath = pathName.split("/").filter((el) => el !== "")[0];
    let currentPage = tempFooterActions.find(
      (el) => el.route.replace("/", "") === rootPath
    );
    if (currentPage) {
      currentPage.active = true;
    }
    setFooterActions([...tempFooterActions]);
  }, []);

  useEffect(() => {
    let tempFooterActions = [...footerActions];
    const rootPath = "/" + pathName.split("/").filter((el) => el !== "")[0];
    let oldPage = tempFooterActions.find((el) => el.active);
    let newPage = tempFooterActions.find((el) => el.route === rootPath);

    if (newPage) {
      if (oldPage) {
        oldPage.active = false;
      }
      newPage.active = true;
      setFooterActions([...tempFooterActions]);
    }
  }, [pathName]);

  return (
    <StyledFooter>
      {footerActions.map((el) => (
        <FooterAction key={el.route} {...el} />
      ))}
    </StyledFooter>
  );
}
