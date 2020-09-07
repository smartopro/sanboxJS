// // https://www.youtube.com/watch?v=cTlxzxsFbDQ
// // BEFORE ES6
// // constructor
// const Animal = function (options) {
//     this.name = options.name;
//     this.color = options.color;
//
//     // this.voice = function () {
//     //     console.log("Base voice from", this.name);
//     // }
// }
//
// Animal.prototype.voice = function () {
//     console.log("Base voice from", this.name);
// }
//
// const dog = new Animal({name: "Bobik", color: "#FFF"});
//
// // child class
// const Cat = function (options) {
//     Animal.apply(this, [options]);
//     this.hasTail = options.hasTail;
//     this.type = "cat";
// }
//
// // переопределение прототипа в дочернем классе
// Cat.prototype = Object.create(Animal.prototype);
// // определение конструктора
// Cat.prototype.constructor = Cat;
// Cat.prototype.voice = function () {
//     // method from parent class
//     Animal.prototype.voice.apply(this, arguments);
//
//     console.log(this.name, "says Meow.");
// }
//
// const cat = new Cat({name: "Keks", color: "#000", hasTail: true});
// console.log(cat.voice());

// AFTER ES6
class Animal {
    constructor(options) {
        this.name = options.name;
        this.color = options.color;
    }

    voice() {
        console.log("Base voice from", this.name);
    }
}

const dog = new Animal({name: "Bobik", color: "#000"});

class Cat extends Animal {
    constructor(options) {
        super(options);
        this.hasTail = options.hasTail;
        this.type = "cat";
    }

    voice() {
        super.voice();
        console.log(this.name, "says Meow.");
    }
}

const cat = new Cat({name: "Keks", color: "#000", hasTail: true});
console.log(cat.voice());

// EXAMPLES

Object.prototype.print = function () {
    console.log("I am object ", this);
}
cat.print();

Array.prototype.myMap = function (callback) {
    let arr = [];
    this.forEach(item => arr.push(callback(item)));
    return arr;
}

console.log("New array: ", [1, 2, 3, 4].myMap(x => x ** 2));