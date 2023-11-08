"use client";

import BackButton from "@/components/BackButton/BackButton";
import ResultDisplay from "@/components/ResultDisplay/ResultDisplay";
import { useChildStore } from "@/stores/use-child";
import { getSubject } from "@/utils/get-subject";
import { useRouter } from "next/navigation";

const QuizResultPage = () => {
    const router = useRouter();
    const { result, currentQuiz } = useChildStore();

    if(!result) {
        router.push("/activities");
        return null;
    }
    
    return (
        <div>
            <BackButton fixed onClick={() => {
                currentQuiz && router.push(`/activities/${getSubject(currentQuiz?.subject)}/${currentQuiz?.codClass}`);
            }} color={currentQuiz!.subject === "Matemática" ? "blue" : "pink"} />
            <ResultDisplay />
        </div>
    );
}
 
export default QuizResultPage;