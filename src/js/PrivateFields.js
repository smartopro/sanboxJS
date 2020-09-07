// Private fields

class Person {
    #year = 1986;
    static #type = "HUMAN";

    get age() {
        return new Date().getFullYear() - this.#year;
    }

    set age(age) {
        this.#year = new Date().getFullYear() - age;
    }

    static getType() {
        return this.#type;
    }
}

const person = new Person();
// console.log(Person.#year); // error
console.log(person.age);
person.age = 20;
console.log(person.age);
console.log(Person.getType());
