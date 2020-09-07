export function getNow() {
    const d = new Date();
    const nullBefore = x => x.toString().padStart(2, "0");
    return `${nullBefore(d.getHours())}:${nullBefore(d.getMinutes())} ${nullBefore(d.getDay())}.${nullBefore(d.getMonth())}.${d.getFullYear()}`;
}
