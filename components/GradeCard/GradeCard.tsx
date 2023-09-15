import { colors } from "@/public/colors/colors";
import { useCallback, useEffect, useState } from "react";
import { StyledGradeCard } from "./GradeCard.style";

interface GradeCardProps {
  subject: string;
  section: string;
  content: string;
  grade: number;
}

export default function GradeCard({
  subject,
  section,
  content,
  grade,
}: GradeCardProps) {
    const [color, setColor] = useState({
        color: "",
        dark: ""
    });

  const getRandomColor = useCallback(() => {
    const random = Math.random();
    if (random <= 0.33) {
      return [colors.blue.pastel, colors.blue.dark];
    } else if (random <= 0.66) {
        return [colors.yellow.pastel, colors.yellow.dark];
    } else {
        return [colors.green.pastel, colors.green.dark];
    }
  }, []);

  useEffect(() => {
    const [color, dark] = getRandomColor();
    setColor({ color, dark });
  }, []);

  return (
    <StyledGradeCard color={color.color} darkColor={color.dark} >
      <div>
        <section>
          <p className="subject-title">{subject}</p>
          <p>
            <span className="subject-section">{section} |</span> {content}
          </p>
        </section>
        <p className="subject-grade">{grade === 10 ? grade : grade.toFixed(1)}</p>
      </div>
    </StyledGradeCard>
  );
}
