let str;

str = 0 || "default";
console.log(str); // "default"

str = "" || "default";
console.log(str); // "default"

str = NaN || "default";
console.log(str); // "default"

str = null || "default";
console.log(str); // "default"

str = undefined || "default";
console.log(str); // "default"

str = 0 ?? "default";
console.log(str); // 0

str = "" ?? "default";
console.log(str); // ""

str = NaN ?? "default";
console.log(str); // NaN

str = null ?? "default";
console.log(str); // "default"

str = undefined ?? "default";
console.log(str); // "default"


