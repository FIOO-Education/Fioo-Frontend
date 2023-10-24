import { colors } from "@/public/colors/colors";
import { styled } from "@mui/system";

export const StyledExerciseCard = styled("div")<{ color: string; secondary: string }>((props) => ({
    boxSizing: "border-box",
    margin: "0 auto",
    width: "95%",
    height: 130,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 20,
    backgroundColor: props.color,
    borderRadius: 20,
    padding: 20,
    "& > div": {
        color: colors.black,
        "& > p": {
            fontSize: 12,
        },
        "& span": {
            color: props.secondary
        },
        "& > *": {
            margin: 0,
            fontWeight: 600
        }
    }
}));