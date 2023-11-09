import { Student } from "@/public/entities/entities";

export async function doPatchStudent(student: Student): Promise<{
    statusCode: number;
    message: string;
    data: Student
}> {
    const data = await fetch("https://backend-fioo.onrender.com/api/student", {
        method: "PATCH",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(student)
    })
    .then((res) => res.json());

    return data;
}