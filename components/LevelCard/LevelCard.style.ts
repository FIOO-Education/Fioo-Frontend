import { colors } from "@/public/colors/colors";
import { styled } from "@mui/system";

export const StyledLevelCard = styled("div")<{ color: string }>((props) => ({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    "& > div": {
        width: "300px",
        height: "135px",
        backgroundColor: props.color,
        borderRadius: "16px",
    },
    "& > .content": {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    "& > .current-content": {
        position: "relative",
    },
    "& > .current-content > .level": {
        position: "absolute",
        left: 40,
        bottom: 15,
    },
    "& > .current-content > input[type='range']": {
        width: "90%",
        position: "absolute",
        top: 18,
        left: "50%",
        transform: "translate(-50%, 0)",
    },
    "& > .current-content > .percentage": {
        fontSize: "12px",
        position: "absolute",
        left: 20,
        top: 25,
    },
    "& p": {
        fontSize: "20px",
        fontWeight: "700",
        color: colors.black,
    },
}));
