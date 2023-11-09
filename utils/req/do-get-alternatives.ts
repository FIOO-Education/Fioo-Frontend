import { Alternative } from "@/public/entities/entities";

export async function doGetAlternatives(codActivity: number): Promise<{
    statusCode: number;
    message: string;
    data: Alternative[];
}> {
    const data = await fetch(`https://backend-fioo.onrender.com/api/alternatives/${codActivity}`, {
        method: "GET",
    })
    .then((res) => res.json());

    return data;
}