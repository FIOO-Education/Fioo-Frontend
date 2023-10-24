import { colors } from "@/public/colors/colors";
import { StyledVideoInfo } from "./VideoInfo.style";

interface Props {
    duration: string;
    level: string;
    color: string;
}

export default function VideoInfo({ duration, level, color }: Props) {
    return (
        <StyledVideoInfo color={color === "pink" ? colors.pink.radiant : colors.blue.radiant}>
            <p>
                <strong>Duração: </strong>
                {duration}
            </p>
            <p>
                <strong>{level}</strong>
            </p>
        </StyledVideoInfo>
    );
}