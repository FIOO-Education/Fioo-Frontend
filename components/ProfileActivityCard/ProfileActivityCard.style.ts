import { styled } from "@mui/system";

export const StyledProfileActivityCard = styled("div")<{ color: string }>((props) => ({
    boxSizing: "border-box",
    position: "relative",
    width: "100%",
    height: "110px",
    borderRadius: "24px",
    padding: "8px 12px",
    backgroundColor: props.color,
    userSelect: "none",
    "& > p": {
        margin: "8px"
    }
}));

export const StyledImage = styled("img")(({
    width: "55px",
    position: "absolute",
    right: "28px",
    top: "50%",
    transform: "translate(0, -50%)",
}))

export const StyledText = styled("p")<{ color: string }>((props) => ({
    color: props.color,
    fontWeight: "bolder",
    display: "flex",
    gap: "8px",
}))