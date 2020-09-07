// Objects
const person = {
    name: "Ilya",
    age: 33,
    job: "Entrepreneur"
}

//const objectProxy = new Proxy(target, handlers);
const objectProxy = new Proxy(person, {
    get(target, prop) {
        console.log(`Getting ${prop}`);
        if (prop in target) {
            return target[prop];
        } else {
            return prop
                .split("_")
                .map(p => target[p])
                .join(" ");
        }
    },
    set(target, prop, value) {
        console.log(`Setting. ${target}.${prop} = ${value}`);
        target[prop] = value;
    },
    has(target, prop) {
        console.log("Has");
        return ["name", "age", "job"].includes(prop);
    },
    deleteProperty(target, prop) {
        console.log(`Deleting property ${prop}`);
        delete target[prop];
        return true;
    }
});

// Functions

const log = text => `Log: ${text}`;

const functionProxy = new Proxy(log, {
    // метод apply вызывается, когда вызывается сама функция (перехват вызова функции)
    apply(target, thisArg, argArray) {
        // target - сама функция
        // thisArg - контекст
        console.log("Calling function");
        return target.apply(thisArg, argArray);
    }
});

// Classes

class Person {
    constructor(name,  age) {
        this.name = name;
        this.age = age;
    }
}

const PersonProxy = new Proxy(Person, {
    // Перехват конструктора
    construct(target, argArray) {
        console.log(`Constructor`);
        return new target(...argArray);
    }
});

const p =new PersonProxy("Asya", 30);