import { styled } from "@mui/system";

export const StyledActionChip = styled("div")<{ color: string; background?: string }>((props) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 20,
    border: `2px solid ${props.background ? props.background : props.color}`,
    boxSizing: "border-box",
    padding: 15,
    fontWeight: 600,
    userSelect: "none",
    backgroundColor: props.background && props.background
}));