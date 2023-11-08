import { Activity } from "@/public/entities/entities";

export async function doGetActivity(codClass: number): Promise<{
    statusCode: number;
    message: string;
    data: Activity[];
}> {
    const data = await fetch(`https://backend-fioo.onrender.com/api/activities/${codClass}`, {
        method: "GET",
    })
    .then((res) => res.json());

    return data;
}