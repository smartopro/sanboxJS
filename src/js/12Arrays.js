const people = [
    {name: "Ilya", age: 33, budget: 90000},
    {name: "Asya", age: 32, budget: 75000},
    {name: "Keks", age: 2, budget: 5000},
    {name: "Mama", age: 60, budget: 55000},
    {name: "Papa", age: 62, budget: 75000},
    {name: "Babushka", age: 82, budget: 35000},
]

// ES6
// for(person of people) {
//     console.log(person);
// }

//people.forEach((item, index, arr) => console.log(p));
//------------
const newPeople = people.map((person, index, array) => {
    return person.name;
})
//------------
const canBuyAlco = people.filter(p => p.age >= 18);
//------------
const totalBudget = people.reduce((budget, person) => budget + person.budget, 0);
const avgAge = people.reduce((age, person) => age + person.age, 0) / people.length;
// console.log(totalBudget);
// console.log(avgAge);
//------------
const findOldest = people.find(person => person.age === Math.max(...people.map(p => p.age)));
//console.log(findOldest);
//------------ example
console.log(people
    .filter(p => p.budget >= 50000)
    .map(p => {
        return {
            info: `${p.name} (${p.age}): ${p.budget}`,
            budget: p.budget
        }
    })
    .reduce((budget, p) => budget + p.budget, 0));
