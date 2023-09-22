import { useChildStore } from "@/stores/use-child";
import { StyledGameStep } from "./GameStep.style";
import { useEffect, useState } from "react";

interface GameStepProps {
    index: number;
}

export default function GameStep({ index }: GameStepProps) {
    const game = useChildStore((s) => s.game);
    const [answered, setAnswered] = useState<boolean | null>(null);

    useEffect(() => {
        setAnswered(index <= game.currentQuestion);
    }, [game]);

    if(answered === null) {
        return null;
    }

    return (
        <StyledGameStep answered={answered}>
            <p>{index}</p>
        </StyledGameStep>
    );  
}