import { styled } from "@mui/system";

export const StyledVideoCard = styled("video")({
    position: "relative",
    width: "100%",
    height: 200,
    margin: "0 auto",
    marginTop: 70,
    borderRadius: 30,
    boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)",
    "& > img": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        userSelect: "none"
    }
});