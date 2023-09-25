"use client";

import { FooterActions } from "@/public/entities/entities";
import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import HomeIconSelected from "@/public/images/home-icon-selected.svg";
import CatalogIconSelected from "@/public/images/catalog-icon-selected.svg";
import StarIconSelected from "@/public/images/star-icon-selected.svg";
import ProfileIconSelected from "@/public/images/profile-icon-selected.svg";

export default function FooterAction({ src, route, active }: FooterActions) {
  const router = useRouter();
  const pathname = usePathname();

  const handleGetSource = useCallback(() => {
    if (active) {
      switch (route) {
        case "/home":
          return HomeIconSelected.src;
        case "/activities":
          return CatalogIconSelected.src;
        case "/games":
          return StarIconSelected.src;
        case "/profile":
          return ProfileIconSelected.src;
        default:
          return src;
      }
    } else {
      return src;
    }
  }, [active, route, src]);

  const handleOnClick = useCallback(() => {
    const rootPath = pathname.split("/").filter((el) => el !== "")[0];
    router.push(route);
  }, [route, router, pathname]);

  return (
    <img
      width="32px"
      height="32px"
      src={handleGetSource()}
      style={{ cursor: "pointer", userSelect: "none" }}
      alt={route.charAt(0)}
      onClick={handleOnClick}
    />
  );
}
