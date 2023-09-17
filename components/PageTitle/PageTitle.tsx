import { useRouter } from "next/navigation";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { StyledPageTitle } from "./PageTitle.style";

interface PageTitleProps {
    title: string;
    text: string;
}

export default function PageTitle({ title, text }: PageTitleProps) {
    const router = useRouter();

    return (
        <StyledPageTitle>
            <section>
                <h3>{title}</h3>
                <p>{text}</p>
            </section>
            <ProfileIcon onClick={() => router.push("/profile")} size="small" />
        </StyledPageTitle>
    );
}