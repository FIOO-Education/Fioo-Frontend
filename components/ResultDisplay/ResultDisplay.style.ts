import { styled } from "@mui/system";

export const StyledResultDisplay = styled("div")<{ textColor: string; }>((props) => ({
    display: "flex",
    flexDirection: "column",
    gap: 20,
    "& > h2": {
        textAlign: "center",
        fontSize: 18,
        maxWidth: "80%",
        margin: "18.5px auto",
        "& > span": {
            color: props.textColor,
        }
    },
    "& > div": {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        "& > svg": {
            position: "relative",
            "& > g": {
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-20%, 0)"
            }
        },
        "& text": {
            fill: props.textColor,
            fontWeight: 700,
        },
        "& > p": {
            fontWeight: 700,
            fontSize: 20,
        },
    },
    "& > section": {
        display: "flex",
        flexDirection: "column",
        gap: 12,
    }
}));