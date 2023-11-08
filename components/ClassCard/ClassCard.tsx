import { Class } from "@/public/entities/entities";
import PinkClassIcon from "@/public/images/pink-class-icon.svg";
import BlueClassIcon from "@/public/images/blue-class-icon.svg";
import LockedClassIcon from "@/public/images/locked-class-icon.svg";
import { StyledClassCard } from "./ClassCard.style";
import { useCallback } from "react";
import { useChildStore } from "@/stores/use-child";
import { usePathname, useRouter } from "next/navigation";

const ClassCard = (props: Class) => {
    const router = useRouter();
    const pathname = usePathname();
    const { setCurrentClass } = useChildStore(state => state);
    const { subject, title, viewed } = props;
 
    const handleClick = useCallback(() => {
        if(viewed) {
            setCurrentClass(props);
            router.push("/activities/class");
        }
    }, [viewed, props]);

    const getImageSource = useCallback((viewed: boolean, subject: string) => {
        if(viewed) {
            if(subject === "Língua Portuguesa") {
                return PinkClassIcon.src;
            } else if(subject === "Matemática") {
                return BlueClassIcon.src;
            }
        }

        return LockedClassIcon.src;
    }, []);

    return ( 
        <StyledClassCard onClick={handleClick}>
            <img 
                src={getImageSource(viewed, subject)} 
                alt=""
                width={65}
                height={60}
            />
            <section>
                <p>{title}</p>
                <span>1h 20m</span>
                <hr />
            </section>
        </StyledClassCard>
     );
}
 
export default ClassCard;