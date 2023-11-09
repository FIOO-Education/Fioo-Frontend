"use client";

import BackButton from "@/components/BackButton/BackButton";
import ResultDisplay from "@/components/ResultDisplay/ResultDisplay";
import { useChildStore } from "@/stores/use-child";
import { getSubject } from "@/utils/get-subject";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const { currentQuiz } = useChildStore();

    if(!currentQuiz) {
        router.push("/games/steps");
        return null;
    }

    return (
        <div>
            <BackButton fixed onClick={() => router.push("/games/steps")} color={currentQuiz!.subject === "Matemática" ? "blue" : "pink"} />
            <ResultDisplay />
        </div>
    );
}