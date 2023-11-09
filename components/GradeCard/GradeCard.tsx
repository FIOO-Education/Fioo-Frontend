import { colors } from "@/public/colors/colors";
import { useCallback, useEffect, useState } from "react";
import { StyledGradeCard } from "./GradeCard.style";
import { Curriculum } from "@/public/entities/entities";
import { getSubject } from "@/utils/get-subject";
import { doGetActivity } from "@/utils/req/do-get-activity";
import { doGetActivityId } from "@/utils/req/do-get-activity-id";

export default function GradeCard(props: Curriculum) {
  const [ subject, setSubject ] = useState("");
  const [ title, setTitle ] = useState("");
    const { grade } = props;

    const [color, setColor] = useState({
        color: "",
        dark: ""
    });

    const handleGetActivity = useCallback(async () => {
      const { data } = await doGetActivityId(props.codActivity);
      setSubject(data.subject);
      setTitle(data.title);
    }, []);

  const getRandomColor = useCallback(() => {
    const random = Math.random();
    if (random <= 0.25) {
      return [colors.blue.pastel, colors.blue.dark];
    } else if (random <= 0.50) {
        return [colors.yellow.pastel, colors.yellow.dark];
    } else if(random <= 0.75) {
        return [colors.green.pastel, colors.green.dark];
    } else {
      return [colors.pink.pastel, colors.pink.dark];
    }
  }, []);

  useEffect(() => {
    const [color, dark] = getRandomColor();
    setColor({ color, dark });
  }, []);

  return (
    <StyledGradeCard color={color.color} darkColor={color.dark} >
      <div>
        {/* <section>
          <p className="subject-title">{getSubject(subject)}</p>
          <p>
            <span className="subject-section">{title}</span>
          </p>
        </section> */}
        <p className="subject-grade">{grade === 10 ? grade : grade.toFixed(1)}</p>
      </div>
    </StyledGradeCard>
  );
}
