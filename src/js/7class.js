// const animal = {
//     name: "Animal",
//     age: 5,
//     hasTail: true
// }

class Animal {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }

    static type = "ANIMAL";

    static write() {
        console.log("write");
    }

    voice () {
        console.log(`I am ${this.name}`);
    }
}

class Cat extends Animal {
    constructor(options) {
        super(options);
        this.color = options.color;
    }

    voice() {
        console.log("Meow");
        super.voice();
    }

    get humanAge() {
        return this.age * 7;
    }

    set humanAge(value) {
        this.age = value / 7;
    }
}

const animal = new Animal({
    name: "Animal",
    age: 5,
    hasTail: true
});

const cat = new Cat({
    name: "Keks",
    color: "red",
    age: 7
});

cat.voice();
