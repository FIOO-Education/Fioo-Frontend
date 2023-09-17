import { StyledSubjectsInfo } from "./SubjectInfo.style";

interface SubjectsInfoProps {
    name: string;
    description: string;
    color: string;
}

export default function SubjectsInfo({ name, description, color }: SubjectsInfoProps) {
    return (
        <StyledSubjectsInfo color={color}>
            <p className="subject-info-title">{name}</p>
            <p className="subject-info-description">{description}</p>
        </StyledSubjectsInfo>
    );
}