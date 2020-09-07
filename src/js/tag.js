function tag(strings, ...params) {
    const [s1, s2, s3] = strings;
    params[1] = params[1] > 42 ? "старшим" : "младшим";
    return `${s1}${params[0]}${s2}${params[1]}${s3}`;
}

const person = {
    name: "Ilya",
    age: 33
}

const output = tag`Человек по имени ${person.name} является ${person.age} в семье.`;
console.log(output);
