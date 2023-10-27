import { Curriculum } from "@/public/entities/entities";

export async function doGetCurriculum(studentId: number): Promise<{
    statusCode: number;
    message: string;
    data: Curriculum[]
}> {
    const data = await fetch(
        `https://backend-fioo.onrender.com/api/curriculum/student/${studentId}`, {
            method: "GET",
        }
    ).then((res) => res.json());

    return data;
}