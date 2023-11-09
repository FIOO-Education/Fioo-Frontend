import { Activity } from "@/public/entities/entities";

export async function doGetActivities(): Promise<{
    statusCode: number;
    message: string;
    data: Activity[];
}> {
    const data = await fetch(`https://backend-fioo.onrender.com/api/activities`, {
        method: "GET",
    })
    .then((res) => res.json());

    return data;
}