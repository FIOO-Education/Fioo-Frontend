import { MouseEventHandler } from "react";
import { StyledConfirmButton } from "./ConfirmButton.style";

interface ConfirmButtonProps {
    color: string;
    text: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}

export default function ConfirmButton({ color, text, onClick }: ConfirmButtonProps) {
    return (
        <StyledConfirmButton onClick={onClick} color={color}>
            <p>{text}</p>
        </StyledConfirmButton>
    );
}