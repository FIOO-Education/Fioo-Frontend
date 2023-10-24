import { styled } from "@mui/system";
import Image from "next/image";

export const StyledStarButton = styled(Image)<{ fixed: boolean; }>((props) => ({
    position: props.fixed ? "absolute" : "static",
    top: "17px",
    right: "20px",
}))