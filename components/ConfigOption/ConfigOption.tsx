import { StyledConfigOption } from "./ConfigOption.style";
import Image from "next/image";
import Arrow from "@/public/images/arrow.svg";

interface ConfigOptionProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

export default function ConfigOption({ icon, text, onClick }: ConfigOptionProps) {
  return (
    <StyledConfigOption>
      <span>
          <Image src={icon} alt={text + "Icon"} width={25} height={25} />
          <p>{text}</p>
      </span>
      <Image onClick={onClick} src={Arrow.src} alt="Arrow Icon" width={20} height={20} />
    </StyledConfigOption>
  );
}
