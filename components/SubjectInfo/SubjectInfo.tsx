import { useCallback } from "react";
import { StyledSubjectsInfo } from "./SubjectInfo.style";
import { useRouter } from "next/navigation";

interface SubjectsInfoProps {
    id: number;
    name: string;
    description: string;
    color: string;
}

export default function SubjectsInfo({ id, name, description, color }: SubjectsInfoProps) {
    const router = useRouter();

    const handleClick = useCallback(() => {
        router.push(`/activities/${id}`);
    }, [id]);

    return (
        <StyledSubjectsInfo color={color} onClick={handleClick}>
            <p className="subject-info-title">{name}</p>
            <p className="subject-info-description">{description}</p>
        </StyledSubjectsInfo>
    );
}