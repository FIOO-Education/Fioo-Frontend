import { Activity } from "@/public/entities/entities";

export async function doGetActivityId(acId: number): Promise<{
    statusCode: number;
    message: string;
    data: Activity;
}> {
    const data = await fetch(`https://backend-fioo.onrender.com/api/activities/id/${acId}`, {
        method: "GET",
    })
    .then((res) => res.json());

    return data;
}