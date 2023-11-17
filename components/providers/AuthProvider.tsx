"use client";

declare const Android: any;
import { useChildStore } from "@/stores/use-child";
import { doGetStudentInfo } from "@/utils/req/do-get-student-info";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const AuthProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [ isLogged, setIsLogged ] = useState(false);
    const [ isMounted, setIsMounted ] = useState(false);
    const { student, setStudent } = useChildStore();
    const pathname = usePathname();
    const router = useRouter();

    const handleGetStudentInfo = useCallback(async () => {
        // if(typeof Android !== undefined) {
            // const guardianEmail = Android.returnEmail();
            const data = await doGetStudentInfo("adm@gmail.com");
            if(data.message === "Success") {
                setStudent(data.data);
                setIsLogged(true);
            }
        // } else {
            // router.push("/home");
        // }

        setIsMounted(true);
    }, [setStudent, setIsLogged]);

    useEffect(() => {
        if(!student) {
            handleGetStudentInfo();
        }
    }, [pathname]);

    if(!isMounted) {
        return <></>;
    }

    if(!isLogged) {
        return <div>Não está logado!</div>
    }

    return (
        <>{children}</>
    );
}
 
export default AuthProvider;