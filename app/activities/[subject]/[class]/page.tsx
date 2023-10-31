"use client";

import BackButton from "@/components/BackButton/BackButton";
import ConfirmButton from "@/components/ConfirmButton/ConfirmButton";
import StarButton from "@/components/StarButton/StarButton";
import VideoCard from "@/components/VideoCard/VideoCard";
import VideoInfo from "@/components/VideoInfo/VideoInfo";
import { colors } from "@/public/colors/colors";
import { useChildStore } from "@/stores/use-child";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

const Page = () => {
    const router = useRouter();
    const { currentClass, setCurrentQuiz } = useChildStore();

    const handleClick = useCallback(() => {
        if(currentClass?.title && currentClass?.codClass && currentClass?.subject) {
            setCurrentQuiz({
                codActivity: 1,
                title: currentClass.title,
                codClass: currentClass.codClass,
                subject: currentClass.subject, 
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjzyY7-YcG_vt2C4tmNzNMrx8sticXXtEXAZF5gz5TQ&s"
            });
            router.push("/activities/quiz");
        }
    }, [currentClass, setCurrentQuiz]);

    useEffect(() => {
        if(!currentClass) {
            router.push(`/activities/${currentClass}`);
        }
    }, [currentClass]);

    if(!currentClass) {
        return <></>;
    }

    return ( 
        <div style={{ color: colors.black }}>
            <BackButton
                onClick={() => router.push("/activities")} 
                fixed
                color={currentClass.subject === "Língua Portuguesa" ? "pink" : "blue"}
            />
            <StarButton
                color={currentClass.subject === "Língua Portuguesa" ? "pink" : "blue"}
                fixed
            />
            <VideoCard />
            <h3 style={{ textAlign: "left" }}><span style={{ color: currentClass.subject === "Língua Portuguesa" ? colors.pink.dark : colors.blue.dark }}>{currentClass.title} |</span> {currentClass.nameClass}</h3>
            <VideoInfo color={currentClass.subject === "Língua Portuguesa" ? "pink" : "blue"} duration="1h 20m" level="Matemática Nível I" />
            <p style={{
                width: "85%",
                margin: "0 auto",
                fontSize: 15
            }}>{currentClass.description}</p>
            <ConfirmButton text="Ir para exercícios" color={currentClass.subject === "Língua Portuguesa" ? "pink" : "blue"} onClick={handleClick} />
        </div>
     );
}
 
export default Page;