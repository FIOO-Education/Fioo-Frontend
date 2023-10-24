"use client";

import BackButton from "@/components/BackButton/BackButton";
import ConfirmButton from "@/components/ConfirmButton/ConfirmButton";
import StarButton from "@/components/StarButton/StarButton";
import VideoCard from "@/components/VideoCard/VideoCard";
import VideoInfo from "@/components/VideoInfo/VideoInfo";
import { colors } from "@/public/colors/colors";
import { useChildStore } from "@/stores/use-child";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
    const router = useRouter();
    const { currentClass } = useChildStore();

    useEffect(() => {
        if(!currentClass) {
            router.push("/activities");
        }
    }, [currentClass]);

    if(!currentClass?.subject) {
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
            <h3>{currentClass.title} | {currentClass.nameClass}</h3>
            <VideoInfo color={currentClass.subject === "Língua Portuguesa" ? "pink" : "blue"} duration="1h 20m" level="Matemática Nível I" />
            <p style={{
                width: "85%",
                margin: "0 auto",
                fontSize: 15
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ConfirmButton text="Ir para exercícios" color={currentClass.subject === "Língua Portuguesa" ? "pink" : "blue"} onClick={() => {
                console.log("cria");
            }} />
        </div>
     );
}
 
export default Page;