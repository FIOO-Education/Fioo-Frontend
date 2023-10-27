export async function doGetConsecutiveDays(studentId: number): Promise<{
    statusCode: number;
    message: string;
    data: number
}> {
    const data = await fetch(
        `https://backend-fioo.onrender.com/api/action/consecutiveDays/${studentId}`, {
            method: "GET",
        }
    ).then((res) => res.json());

    return data;
}