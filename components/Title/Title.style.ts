import { styled } from "@mui/system";

export const StyledTitle = styled("p")<{ size: string; color: string, centered: boolean }>((props) => ({
    width: props.centered ? "75%" : "auto",
    textAlign: "center",
    fontSize: props.size,
    fontWeight: "bolder",
    color: props.color,
    margin: props.centered ? "20px auto": "20px",
}));