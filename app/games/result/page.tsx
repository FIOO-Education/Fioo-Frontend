"use client";

import { useChildStore } from "@/stores/use-child";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const router = useRouter();
    const game = useChildStore((s) => s.game);
    const gamePoints = useChildStore((s) => s.gamePoints);

    useEffect(() => {
        if(game.currentGame.id === null) {
            router.push("/games/steps");
        }
    }, []);

    if(game.currentGame.id === null) {
        return null;
    }

    return (
        <div>Você acertou {gamePoints} de {game.currentGame.questions.length} questões!</div>
    );
}