"use client";

import { GameQuestion } from "@/public/entities/entities";
import { useChildStore } from "@/stores/use-child";
import { doGetQuestions } from "@/utils/req/do-get-questions";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const QuizPage = () => {
    const router = useRouter();
    const [ questions, setQuestions ] = useState<GameQuestion[]>([]);
    const { currentQuiz } = useChildStore();

    if(!currentQuiz) {
        router.push("/activities");
        return 0;
    }

    const handleGetQuestions = useCallback(async (codActivity: number) => {
        const data = await doGetQuestions(codActivity);
        setQuestions(data);
    }, [setQuestions]);

    useEffect(() => {
        handleGetQuestions(currentQuiz.codActivity);
    }, []);

    return (
        <div>
            {currentQuiz.title}
        </div>
    );
}
 
export default QuizPage;