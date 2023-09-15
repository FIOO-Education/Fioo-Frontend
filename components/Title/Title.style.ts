import { styled } from "@mui/system";

export const StyledTitle = styled("p")<{ size: string; color: string }>((props) => ({
    fontSize: props.size,
    fontWeight: "bolder",
    color: props.color,
}));