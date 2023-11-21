"use client";

import { useCallback, useEffect, useState } from "react";
import BackButton from "@/components/BackButton/BackButton";
import { useRouter } from "next/navigation";
import { useChildStore } from "@/stores/use-child";
import GameStep from "@/components/GameStep/GameStep";
import GameResponse from "@/components/GameResponse/GameResponse";
import { colors } from "@/public/colors/colors";
import { Alternative } from "@/public/entities/entities";
import LoadingGif from "@/components/LoadingGif/LoadingGif";
import { doPostAction } from "@/utils/req/do-post-action";
import { doPostCurriculum } from "@/utils/req/do-post-curriculum";

export default function Page() {
  const { currentQuiz, setResult, student } = useChildStore();
  const [ currentQuestion, setQuestion ] = useState<number>(0);
  const [ answers, setAnswers ] = useState<Alternative[]>([]);
  const router = useRouter();

  const goToNextQuestion = useCallback(async () => {
    if(currentQuiz?.questions && currentQuestion < currentQuiz?.questions.length - 1) {
      setQuestion(currentQuestion + 1);
    } else if(currentQuiz?.codActivity && student?.codstudent) {
      const totalQuestion = answers.length;
      const rightAnswer = answers .filter((el) => el.correct).length;
      const rDate = new Date();
      setResult({
        rightAnswer: answers.filter((el) => el.correct).length,
        totalQuestion: answers.length,
      });
      await doPostAction({
        actionDate: rDate,
        codActivity: currentQuiz.codActivity,
        codClass: null,
        codStudent: student.codstudent,
      });
      await doPostCurriculum({
        codStudent: student.codstudent,
        codActivity: currentQuiz.codActivity,
        grade: 10 / totalQuestion * rightAnswer,
        realizationDate: rDate,
      });
      router.push("/games/result");
    }
  }, [student, currentQuiz, answers, currentQuestion, setQuestion]);

  const addAnswer = useCallback((answer: Alternative) => {
    setAnswers([...answers, answer]);
  }, [answers, goToNextQuestion]);
  
  useEffect(() => {
    answers.length && goToNextQuestion();
  }, [answers]);

  if(!currentQuiz) {
    router.push("/games/steps");
    return null;
  }

  if(answers.length === currentQuiz?.questions.length) {
    return <LoadingGif center />;
  }

  return (
    <div>
      <BackButton color="blue" onClick={() => router.push("/games/steps")} fixed />
      <p
        style={{
          color: colors.black,
          textAlign: "center",
          fontWeight: "500",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            color: colors.blue.dark,
            fontWeight: "700",
          }}
        >
          Nível 1 |
        </span>{" "}
        Complete a palavra
      </p>
      <GameResponse currentQuestion={currentQuestion} addAnswer={addAnswer} />
    </div>
  );
}
