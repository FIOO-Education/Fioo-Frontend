import { Action } from "@/public/entities/entities";

export async function doGetRecentPlayed(studentId: number): Promise<{
    statusCode: number;
    message: string;
    data: Action[];
}> {
    const data = await fetch(`https://backend-fioo.onrender.com/api/action/${studentId}`, {
        method: "GET",
    })
    .then((res) => res.json());

    return data;
}