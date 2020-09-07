//import "@style/style.scss";

// var person = {
//     age: 20,
//     print: () => {
//         console.log("Person: print");
//     }
// }
//
// Object.prototype.sayHello = () => {
//     console.log("Object: hello");
// }
//
// var lena = Object.create(person);
//
// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector(".world").innerHTML = "world";
//     person.print();
//     person.sayHello();
//     person.age = 30;
//     console.log(lena.age)
// });

import "core-js/stable";
import "regenerator-runtime/runtime";

class Parent {
    constructor(options) {
        this.age = options.age;
        this.name = options.name;
    }

    info() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const parent = new Parent({name: "Ilya", age: 33});
parent.info();
