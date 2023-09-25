"use client";

import { useChildStore } from "@/stores/use-child";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const router = useRouter();
    const game = useChildStore((s) => s.game);
    const answers = useChildStore((s) => s.answers);

    useEffect(() => {
        // if(game.currentGame.id === null) {
        //     router.push("/games/steps");
        // }

        console.log(answers);
    }, []);

    if(game.currentGame.id === null) {
        return null;
    }

    return (
        <div>Você acertou {answers.length} de {game.currentGame.questions.length} questões!</div>
    );
}