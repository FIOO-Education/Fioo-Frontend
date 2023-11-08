import { colors } from "@/public/colors/colors";
import { StyledClassHeader } from "./ClassHeader.style";
import BackButton from "../BackButton/BackButton";
import { useRouter } from "next/navigation";
import StarButton from "../StarButton/StarButton";

interface ClassHeaderProps {
    subject: "Língua Portuguesa" | "Matemática";
}

const ClassHeader = ({ subject }: ClassHeaderProps) => {
    const router = useRouter();

    return ( 
        <StyledClassHeader color={subject === "Língua Portuguesa" ? colors.pink.pastel : colors.blue.pastel}>
            <BackButton
                onClick={() => router.push("/activities")} 
                fixed
                color={subject === "Língua Portuguesa" ? "pink" : "blue"}
            />
            <p>{subject}</p>
        </StyledClassHeader>
     );
}
 
export default ClassHeader;