import { styled } from "@mui/system";
import { colors } from "@/public/colors/colors";

export const StyledGameCard = styled("div")<{ color: string; size: string }>(
  (props) => ({
    boxSizing: "border-box",
    minWidth: props.size === "small" ? "150px" : "240px",
    maxWidth: props.size === "small" ? "150px" : "240px",
    height: props.size === "small" ? "170px" : "270px",
    border: `3px solid ${props.color}`,
    borderRadius: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 15,
    "& img": {
      fill: props.color,
      width: props.size === "small" ? "85px" : "150px",
      height: props.size === "small" ? "85px" : "150px",
    },
    "& > p": {
      fontSize: props.size === "small" ? "14px" : "20px",
      fontWeight: "700",
      color: colors.black,
    },
  })
);
