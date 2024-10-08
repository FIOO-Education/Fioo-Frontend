"use client";

import { colors } from "@/public/colors/colors";
import Title from "../Title/Title";
import {
  StyledImage,
  StyledProfileActivityCard,
  StyledText,
} from "./ProfileActivityCard.style";
import Mascote from "@/public/images/mascote2.svg";
import GreenArrow from "@/public/images/green-arrow.svg";
import PinkArrow from "@/public/images/pink-arrow.svg";
import { useRouter } from "next/navigation";

interface ProfileActivityCardProps {
  title: string;
  description: string;
  theme: string;
  redirect: string;
  center?: boolean;
}

export default function ProfileActivityCard({
  title,
  description,
  theme,
  redirect,
  center
}: ProfileActivityCardProps) {
  const router = useRouter();

  return (
    <StyledProfileActivityCard
      color={theme === "green" ? colors.green.pastel : colors.pink.pastel}
      style={{ margin: center ? "auto" : 0 }}
      onClick={() => router.push(redirect)}
    >
      <Title text={title} size="24px" theme={colors.black} />
      <p
        style={{
          color: colors.black,
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        {description}
      </p>
      <StyledText
        color={theme === "green" ? colors.green.dark : colors.pink.dark}
      >
        <span>Vamos lá!</span>
        <img src={theme === "green" ? GreenArrow.src : PinkArrow.src} />
      </StyledText>
      <StyledImage src={Mascote.src} />
    </StyledProfileActivityCard>
  );
}
