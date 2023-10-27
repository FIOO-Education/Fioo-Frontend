import { Student } from "@/public/entities/entities";

export async function doGetStudentInfo(guardianEmail: string): Promise<{
    statusCode: number;
    message: string;
    data: Student
}> {
    const data = await fetch(
        `https://backend-fioo.onrender.com/api/student/${guardianEmail}`, {
            method: "GET",
        }
    ).then((res) => res.json())

    console.log(data);

    return data;
}