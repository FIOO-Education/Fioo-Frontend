import { colors } from "@/public/colors/colors";
import { styled } from "@mui/system";

export const StyledQuizOption = styled("div")<{ color: string; selected: boolean }>((props) => ({
    backgroundColor: props.selected ? props.color : colors.white,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    width: "100%",
    height: 50,
    border: `2px solid ${props.color}`,
    borderRadius: 20,
    padding: 20,
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
    fontWeight: 500
}))