import { Alternative } from "@/public/entities/entities";
import { useCallback } from "react";
import { StyledQuizOption } from "./QuizOption.style";

interface QuizOptionProps {
    option: Alternative;
    selected: boolean;
    setSelected: Function;
    color: string;
}

const QuizOption = ({ option, selected, setSelected, color }: QuizOptionProps) => {
    const { alternative } = option;

    const handleClick = useCallback(() => {
        setSelected(option);
    }, [option, setSelected]);

    return (
        <StyledQuizOption selected={selected} color={color} onClick={handleClick}>
            <span>{alternative}</span>
        </StyledQuizOption>
    );
}
 
export default QuizOption;