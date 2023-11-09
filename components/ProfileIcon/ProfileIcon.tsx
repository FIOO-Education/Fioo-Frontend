"use client";

import { useChildStore } from "@/stores/use-child";
import { MouseEventHandler, useEffect, useState } from "react";

interface ProfileIconProps {
  size: "big" | "small";
  src?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

export default function ProfileIcon({ size, src, onClick }: ProfileIconProps) {
  const { student } = useChildStore();
  const [currentSource, setCurrentSource] = useState("");

  useEffect(() => {
    if(!src && student?.image) {
      setCurrentSource(student.image);
    } else if(src) {
      setCurrentSource(src);
    }
  }, [src, student?.image]);

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
