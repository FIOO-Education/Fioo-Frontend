import { styled } from "@mui/system";
import Image from "next/image";

export const StyledBackButton = styled(Image)<{ fixed: boolean; }>((props) => ({
    position: props.fixed ? "absolute" : "static",
    top: 10,
    left: 5,
    padding: 10
}))