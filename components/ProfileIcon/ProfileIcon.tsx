"use client";

import { useChildStore } from "@/stores/use-profile";
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
      <img
        style={{ width: "210px", height: "210px" }}
        onClick={onClick}
        src={currentSource}
      />
    );
  } else {
    return (
      <img
        style={{
          width: "40px",
          height: "40px",
          position: "absolute",
          top: "25px",
          right: "25px",
        }}
        onClick={onClick}
        src={currentSource}
      />
    );
  }
}
