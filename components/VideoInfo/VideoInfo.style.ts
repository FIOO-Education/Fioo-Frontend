import { colors } from "@/public/colors/colors";
import { styled } from "@mui/system";

export const StyledVideoInfo = styled("div")<{ color: string }>((props) => ({
    color: colors.black,
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 15px",
    width: "100%",
    height: 55,
    border: `2px solid ${props.color}`,
    borderRadius: 20,
    margin: "15px auto",
}));