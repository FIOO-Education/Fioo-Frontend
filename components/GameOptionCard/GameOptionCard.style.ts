import { colors } from "@/public/colors/colors";
import { styled } from "@mui/system";

export const StyledGameOptionCard = styled("div")<{
  color: string;
  fontColor: string;
  isSelected: boolean;
}>((props) => ({
  width: "45%",
  height: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `1px solid ${props.color}`,
  borderRadius: "20px",
  boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.1)",
  backgroundColor: props.isSelected ? props.color : colors.white,
  "& > p": {
    fontSize: "30px",
    fontWeight: "700",
    color: props.isSelected ? colors.white : props.fontColor,
  },
}));
