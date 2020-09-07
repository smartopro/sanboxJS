let obj = {
    name: "Ilya",
    age: 33,
    job: "Entrepreneur"
}

const entries = [
    ["name", "Ilya"],
    ["age", 33],
    ["job", "Entrepreneur"]
]

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

//!!!! MAP
const map = new Map(entries);
//console.log(map.get("job"));

for (let [key, value] of map.entries()) {
//    console.log(key, value);
}

map.forEach((value, key) => {
//    console.log(key, value);
})

const mapObj = Object.fromEntries(map.entries());
//console.log(mapObj);

const users = [
    {name: "Ilya"},
    {name: "Asya"},
    {name: "Keks"}
]

const visits = new Map();
visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000*60))
    .set(users[2], new Date(new Date().getTime() + 5000*60));

function lastVisit(user) {
    return visits.get(user)
}
//console.log(lastVisit(users[1]));

//!!!! SET
const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])
//console.log(set);

for(let key of set) {
//    console.log(key);
}

function uniqueValues(arr) {
    return [...new Set(arr)];
}

//console.log(uniqueValues([1, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 6, 6, 42]));

//!!!! WeakMap

let weakObj = {
    name: "weakmap"
}
const weakmap = new WeakMap([
    [weakObj, "obj data"]
]);
weakObj = null;
//console.log(weakmap.has(weakObj));

//!!!! WeakSet
// ...
