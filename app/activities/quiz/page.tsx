"use client";

import QuizOption from "@/components/QuizOption/QuizOption";
import { Alternative, Question } from "@/public/entities/entities";
import { useChildStore } from "@/stores/use-child";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import BackButton from "@/components/BackButton/BackButton";
import { colors } from "@/public/colors/colors";
import ConfirmButton from "@/components/ConfirmButton/ConfirmButton";
import Mascote from "@/public/images/mascote.svg";
import LoadingGif from "@/components/LoadingGif/LoadingGif";
import { doPostAction } from "@/utils/req/do-post-action";
import { doPostCurriculum } from "@/utils/req/do-post-curriculum";

const QuizPage = () => {
  const router = useRouter();
  const { student, currentQuiz, setResult } = useChildStore();
  const [answers, setAnswers] = useState<Alternative[]>([]);
  const [selected, setSelected] = useState<Alternative | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  useEffect(() => {
    setResult(null);
  }, []);

  if (!currentQuiz) {
    router.push("/activities");
    return null;
  }

  if(answers.length === currentQuiz?.questions.length) {
    return <LoadingGif center />
  }

  return (
    <div>
      <BackButton fixed onClick={() => router.push("/activities/class")} color={currentQuiz.subject === "Matemática" ? "blue" : "pink"} />
      <h2 className={styles.quiz_title}>
        <span style={{ color: currentQuiz.subject === "Matemática" ? colors.blue.dark : colors.pink.dark }}>{currentQuiz.subject} |</span> {currentQuiz?.title}
      </h2>
      <section className={styles.quiz_info}>
        <p className={styles.curr_question}>Pergunta {currentQuestion + 1} de {currentQuiz.questions.length}</p>
        <p>{currentQuiz.questions[currentQuestion].question}</p>
      </section>
      <p className={styles.corr_question}>Qual das alternativas abaixo é a correta?</p>
      <div className={styles.options_wrapper}>
          {currentQuiz.questions[currentQuestion].alternatives.map((el) => (
            <QuizOption
              key={el.codAlternative}
              color={currentQuiz.subject === "Matemática" ? colors.blue.radiant : colors.pink.radiant}
              selected={el.codAlternative === selected?.codAlternative}
              setSelected={setSelected}
              option={el}
            />
          ))}
      </div>
      <img className={styles.mascote_icon} src={Mascote.src} alt="Mascote do Fioo" width={55} height={80}/>
      <ConfirmButton
        text="Confirmar alternativa"
        color={currentQuiz.subject === "Matemática" ? "blue" : "pink"}
        onClick={async () => {
          if (!selected) return 0;

          const newAnswers = [...answers, selected];
          setAnswers(newAnswers);

          if (currentQuestion < currentQuiz.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelected(null);
          } else if(student?.codstudent) {
            const totalQuestion = newAnswers.length;
            const rightAnswer = newAnswers.filter((el) => el.correct).length;
            const rDate = new Date();
            setResult({
              totalQuestion,
              rightAnswer,
            });
            await doPostAction({
              actionDate: rDate,
              codActivity: currentQuiz.codActivity,
              codClass: currentQuiz.codClass,
              codStudent: student.codstudent,
            });
            await doPostCurriculum({
              codStudent: student.codstudent,
              codActivity: currentQuiz.codActivity,
              grade: totalQuestion / rightAnswer,
              realizationDate: rDate,
            });
            router.push("/activities/quiz/result");
          }
        }}
      />
    </div>
  );
};

export default QuizPage;
