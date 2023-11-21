import { colors } from "@/public/colors/colors";
import { styled } from "@mui/system";

export const StyledGameResponse = styled("div")(({
    "& > .game-options": {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px 20px",
        margin: "0 auto"
    },
    "& > .question-title": {
        fontSize: "30px",
        fontWeight: "600",
        color: colors.black,
        textAlign: "center",
        margin: "0 0 20px 0",
    },
    "& > img": {
        margin: "20px 0",
        borderRadius: "16px",
        position: "relative",
        left: "50%",
        transform: "translate(-50%, 0)",
    }
}));