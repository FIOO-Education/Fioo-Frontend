import { Question } from "@/public/entities/entities";

export async function doGetQuestions(codActivity: number): Promise<{
    statusCode: number;
    message: string;
    data: Question[];
}> {
    const data = await fetch(`https://backend-fioo.onrender.com/api/questions/${codActivity}`, {
        method: "GET",
    })
    .then((res) => res.json());

    return data;
}