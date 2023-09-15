import { StyledTitle } from "./Title.style";

interface TitleProps {
    text: string;
    size: string;
    theme: string;
}

export default function Title({ text, size, theme }: TitleProps) {
    return (
        <StyledTitle size={size} color={theme} >
            {text}
        </StyledTitle>
    );
}