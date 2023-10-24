import { colors } from "@/public/colors/colors";
import { styled } from "@mui/system";

export const StyledClassCard = styled("div")({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "& > section": {
        width: "70%",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        "& > p": {
            fontWeight: "600",
            margin: 0,
            fontSize: "16px",
        },
        "& > span": {
            color: colors.black,
            opacity: 0.7,
            fontSize: "12px",
            marginBottom: "2px",
        },
        "& > hr": {
            width: "100%",
        }
    }
})