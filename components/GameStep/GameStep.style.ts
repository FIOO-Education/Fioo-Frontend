import { colors } from "@/public/colors/colors";
import { styled } from "@mui/system";

export const StyledGameStep = styled("div")<{ answered: boolean; }>((props) => ({
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    color: props.answered ? colors.yellow.dark : colors.gray.dark,
    backgroundColor: props.answered ? colors.yellow.pastel : colors.gray.normal,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    zIndex: 3,
    border: `5px solid ${colors.white}`
}));