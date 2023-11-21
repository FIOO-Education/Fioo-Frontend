import { styled } from "@mui/system";

export const StyledSubjectsInfo = styled("div")<{ color: string }>((props) => ({
    width: "40%",
    height: "170px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "24px",
    boxShadow: "3px 3px 12px 1px rgba(0, 0, 0, 0.1)",
    border: `2px solid ${props.color}`,
    userSelect: "none",
    '@media (max-width: 500px)': {
        width: "170px",
    },
    "& .subject-info-title": {
        fontSize: "18px",
        fontWeight: 600,
    },
    "& .subject-info-description": {
        fontSize: "12px",
        width: "70%",
    },
    "& > *": {
        margin: "8px"
    }
}));