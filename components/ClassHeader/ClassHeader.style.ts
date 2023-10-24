import { colors } from "@/public/colors/colors";
import { styled } from "@mui/system";

export const StyledClassHeader = styled("header")<{
    color: string;
}>((props) => ({
    width: "100vw",
    height: "270px",
    position: "relative",
    backgroundColor: props.color,
    marginLeft: "-14px",
    borderRadius: "0 0 30px 30px",
    boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.1)",
    "& > p": {
        textAlign: "center",
        position: "absolute",
        left: "50%",
        top: "40%",
        transform: "translate(-50%, -40%)",
        fontSize: "28px",
        fontWeight: "800",
        color: colors.black
    }
}))