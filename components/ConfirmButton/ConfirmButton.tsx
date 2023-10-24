import { MouseEventHandler } from "react";
import { StyledConfirmButton } from "./ConfirmButton.style";
import { colors } from "@/public/colors/colors";

interface ConfirmButtonProps {
    color: string;
    text: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}

export default function ConfirmButton({ color, text, onClick }: ConfirmButtonProps) {
    return (
        <StyledConfirmButton onClick={onClick} color={color === "pink" ? colors.pink.pastel : colors.blue.pastel}>
            <p>{text}</p>
        </StyledConfirmButton>
    );
}