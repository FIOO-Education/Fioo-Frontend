import { colors } from "@/public/colors/colors";
import Title from "../Title/Title";
import { StyledProfileInfoChip } from "./ProfileInfoChip.style";

interface ProfileInfoChipProps {
  number: number;
  title: string;
  description: string;
  theme: string;
}

export default function ProfileInfoChip({
  number,
  title,
  description,
  theme,
}: ProfileInfoChipProps) {
  return (
    <StyledProfileInfoChip 
        color={theme === "blue" ? colors.blue.radiant : colors.green.radiant}
    >
      <Title
        text={number.toString()}
        size="36px"
        theme={
          theme === "blue" ? colors.blue.dark : colors.green.dark
        }
        centered
      />
      <Title text={title} size="16px" theme={colors.black} centered />
      <p style={{
        color: colors.black,
        fontSize: "12px",
        width: "87.5%",
        fontWeight: "500"
      }}>{description}</p>
    </StyledProfileInfoChip>
  );
}
