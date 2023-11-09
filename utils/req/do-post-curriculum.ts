import { Action, Curriculum } from "@/public/entities/entities";

export async function doPostCurriculum(curr: Curriculum): Promise<{
    statusCode: number;
    message: string;
    data: Curriculum;
}> {
    const data = await fetch(`https://backend-fioo.onrender.com/api/curriculum`, {
        method: "Post",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(curr)
    })
    .then((res) => res.json());

    return data;
}