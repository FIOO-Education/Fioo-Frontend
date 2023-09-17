"use client";

import { useChildStore } from "@/stores/use-profile";
import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";

interface ProfileIconProps {
  size: "big" | "small";
  src?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

export default function ProfileIcon({ size, src, onClick }: ProfileIconProps) {
  const userIcon = useChildStore((s) => s.userIcon);
  const [currentSource, setCurrentSource] = useState("");

  useEffect(() => {
    if(!src) {
      setCurrentSource(userIcon);
    } else {
      setCurrentSource(src);
    }
  }, [src]);

  if (size === "big") {
    return (
      <Image
        onClick={onClick}
        src={currentSource}
        alt="Ícone do usuário"
        width={210}
        height={210}
      />
    );
  } else {
    return (
      <Image
        style={{
          position: "absolute",
          top: "25px",
          right: "25px",
        }}
        onClick={onClick}
        src={currentSource}
        alt="Ícone do usuário"
        width={40}
        height={40}
      />
    );
  }
}
