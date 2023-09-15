import { colors } from "@/public/colors/colors";
import { styled } from "@mui/system";

export const StyledGradeCard = styled("div")<{ color: string, darkColor: string }>((props) => ({
    position: "relative",
    width: "85%",
    height: "75px",
    borderRadius: "16px",
    padding: "8px 12px",
    backgroundColor: props.color,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.black,
    "& .subject-title": {
        fontSize: "22px",
        fontWeight: "600",
    },
    "& section": {
        fontSize: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "5px",
        width: "75%",
    },
    "& .subject-section": {
        fontWeight: "500",
        color: props.darkColor
    },
    "& > div": {
        width: "85%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    "& p": {
       color: "black",
       margin: 0,
    },
    "& .subject-grade": {
        fontSize: "30px",
        fontWeight: "600",
        color: props.darkColor
    },
}));