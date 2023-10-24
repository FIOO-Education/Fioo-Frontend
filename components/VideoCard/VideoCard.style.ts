import { styled } from "@mui/system";
import Background from "@/public/images/video-background.png";

export const StyledVideoCard = styled("div")({
    position: "relative",
    width: "90%",
    height: 200,
    margin: "0 auto",
    marginTop: 70,
    borderRadius: 30,
    backgroundImage: `url(${Background.src})`,
    backgroundSize: "cover",
    boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)",
    "& > img": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        userSelect: "none"
    }
});