import { styled } from "@mui/system";

export const StyledProfileInfoChip = styled("div")<{ color: string }>((props) => ({
    width: "165px",
    height: "190px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    borderRadius: "24px",
    boxShadow: "1px 4px 10px rgba(0, 0, 0, 0.2)",
    border: `2px solid ${props.color}`,
    "& > p": {
        margin: "2px"
    },
}));