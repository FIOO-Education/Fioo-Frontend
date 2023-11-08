import { colors } from "@/public/colors/colors";
import { Action } from "../ResultDisplay/ResultDisplay";
import { StyledActionChip } from "./ActionChip.style";

const ActionChip = ({ action, onClick, subject, reverse }: Action & {
    subject: string;
}) => {
    return (
        <StyledActionChip background={reverse ? (
            subject === "Matemática" ? colors.blue.pastel : colors.pink.pastel
        ) : undefined} color={subject === "Matemática" ? colors.blue.radiant : colors.pink.radiant} onClick={onClick}>
            <p>{action}</p>
        </StyledActionChip>
    );
}
 
export default ActionChip;