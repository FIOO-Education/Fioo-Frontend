export function Capitalize(text: string) {
    let j = text.split("");
    j[0] = j[0].toUpperCase();
    return j.join("");
}