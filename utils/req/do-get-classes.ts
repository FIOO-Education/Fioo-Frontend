import { Class } from "@/public/entities/entities";

export async function doGetClasses(subject: string): Promise<{
    statusCode: number;
    message: string;
    data: Class[];
}> {
    const data = await fetch(
        `https://backend-fioo.onrender.com/api/class/${subject}`, {
            method: "GET",
        }
    ).then((res) => res.json());

    return data;
}