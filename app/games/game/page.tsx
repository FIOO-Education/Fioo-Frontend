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

export default function Page() {
  const { currentQuiz, setResult } = useChildStore();
  const [ currentQuestion, setQuestion ] = useState<number>(0);
  const [ answers, setAnswers ] = useState<Alternative[]>([]);
  const router = useRouter();

  const goToNextQuestion = useCallback(() => {
    if(currentQuiz?.questions && currentQuestion < currentQuiz?.questions.length - 1) {
      setQuestion(currentQuestion + 1);
    } else {
      setResult({
        rightAnswer: answers.filter((el) => el.correct).length,
        totalQuestion: answers.length,
      });
      router.push("/games/result");
    }
  }, [currentQuiz, answers, currentQuestion, setQuestion]);

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
