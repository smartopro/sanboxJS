const citiesRussia = ["Москва", "СПб", "Новосибирск", "Казань", "Владивосток"];
const citiesEurope = ["Берлин", "Прага", "Париж", "Мюнхен"];

const citiesRussiaWithPopulation = {
    Moscow: 20,
    Spb: 8,
    Kazan: 3,
    Novosibirsk: 2
}

const citiesEuropeWithPopulation = {
    Berlin: 10,
    Praga: 6,
    Paris: 8,
    Munchen: 2
}

// Spread

// console.log(...citiesRussia);
//
// const allCities = [...citiesRussia, ...citiesEurope];
// console.log(allCities);

console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation});

const person = {
    name: "Ilya",
    age: 33,
    address: {
        country: "Russia",
        city: "SPb"
    }
}

const {
    name: n,
    age,
    address: {
        country: c,
        city
    }} = person;

console.log(n, c, city);


function printPerson({name, age}) {
    console.log(name, age);
}

printPerson(person);
