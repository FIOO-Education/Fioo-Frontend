import { styled } from "@mui/system";

export const StyledConfirmButton = styled("div")<{ color: string; full: boolean | undefined; }>((props) => ({
    boxSizing: "border-box",
    width: props.full ? "100%" : "220px",
    height: "60px",
    margin: "16px auto",
    padding: "0 20px",
    backgroundColor: props.color,
    textAlign: "center",
    border: "none",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.1)",
    "& > p": {
        fontSize: "16px",
        fontWeight: "600",
    }
}));