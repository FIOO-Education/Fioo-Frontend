import { Action } from "@/public/entities/entities";

export async function doPostAction(action: Action): Promise<{
    statusCode: number;
    message: string;
    data: Action
}> {
    const data = await fetch("https://backend-fioo.onrender.com/api/action", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(action)
    })
    .then((res) => res.json());

    return data;
}