import PlayIcon from "@/public/images/play-icon.svg";
import { StyledExerciseCard } from "./ExerciseCard.style";
import { colors } from "@/public/colors/colors";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { getSubject } from "@/utils/get-subject";
import { useChildStore } from "@/stores/use-child";
import { Class } from "@/public/entities/entities";

export default function ExerciseCard(props: Class) {
    const { codClass, subject, title, nameClass } = props;
    const router = useRouter();
    const { setCurrentClass } = useChildStore();

    const handleClick = useCallback(() => {
        setCurrentClass(props);
        router.push(`/activities/class`);
    }, [codClass, subject, setCurrentClass]);
  
  return (
    <StyledExerciseCard
      onClick={handleClick}
      color={
        subject.toLowerCase() === "matemática"
          ? colors.blue.pastel
          : colors.pink.pastel
      }
      secondary={
        subject.toLowerCase() === "matemática"
          ? colors.blue.dark
          : colors.pink.dark
      }
    >
      <div>
        <h2>{subject}</h2>
        <p>
          <span>{title} | </span>
          {nameClass}
        </p>
      </div>
      <img src={PlayIcon.src} alt="" width={40} height={40} />
    </StyledExerciseCard>
  );
}
