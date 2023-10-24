import { useCallback, useState } from "react";
import { StyledVideoCard } from "./VideoCard.style";
import PlayIcon from "@/public/images/play-icon.svg";

export default function VideoCard() {
    const [ isPlaying, setIsPlaying ] = useState(false);

    const handleClick = useCallback(() => {
        setIsPlaying(!isPlaying);
    }, [isPlaying, setIsPlaying]);

    return (
        <StyledVideoCard onClick={handleClick}>
            {!isPlaying && <img src={PlayIcon.src} width={70} height={70} alt="" />}
        </StyledVideoCard>
    );
};