import { useEffect, useRef } from "react";
import { StyledVideoCard } from "./VideoCard.style";

export default function VideoCard({ video, setDuration }: {
    video: string;
    setDuration: Function;
}) {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(ref.current) {
            setDuration(ref.current.currentTime);
        }
    }, [ref.current]);

    return (
        <StyledVideoCard ref={ref} controls>
            <source src="https://www.youtube.com/watch?v=cSNaDEM3z7s&list=RDCLAK5uy_lJLWbvlgOPedbqoQeFUoxLTrzbBSb1qQA" type="video/mp4" />
            Your browser does not support the video tag.
        </StyledVideoCard>
    );
};