import { styled } from "@mui/system";

export const StyledConfigOption = styled("div")(({
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "600",
    fontSize: "18px",
    userSelect: "none",
    "& > span": {
        display: "flex",
        alignItems: "center",
        gap: "14px",
    }
}))