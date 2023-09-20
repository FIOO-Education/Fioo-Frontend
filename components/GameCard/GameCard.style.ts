import { styled } from "@mui/system";
import { colors } from "@/public/colors/colors";

export const StyledGameCard = styled("div")<{ color: string; size: string }>(
  (props) => ({
    minWidth: props.size === "small" ? "150px" : "280px",
    maxWidth: props.size === "small" ? "150px" : "280px",
    height: props.size === "small" ? "170px" : "320px",
    border: `3px solid ${props.color}`,
    borderRadius: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    "& img": {
      fill: props.color,
      width: props.size === "small" ? "85px" : "180px",
      height: props.size === "small" ? "85px" : "180px",
    },
    "& > p": {
      fontSize: props.size === "small" ? "16px" : "30px",
      fontWeight: "700",
      color: colors.black,
    },
  })
);
