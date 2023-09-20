import { StyledTitle } from "./Title.style";

interface TitleProps {
    text: string;
    size: string;
    theme: string;
    centered?: boolean;
}

export default function Title({ text, size, theme, centered }: TitleProps) {
    return (
        <StyledTitle size={size} color={theme} centered >
            {text}
        </StyledTitle>
    );
}