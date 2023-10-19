export function getSubject(arg: string) {
    switch (arg) {
        case "1":
            return "Língua Portuguesa";
        case "2":
            return "Matemática";
        case "língua portuguesa" || "Língua portuguesa":
            return "1";
        case "matemática" || "Matemática":
            return "2";
        default:
            return arg;
    }
}