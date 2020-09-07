class Student {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Привет ${this.name}!`);
    }
}

class ProtoStudent {
    univercity = "Politeh"
}

const student = Reflect.construct(Student, ["Elias"], ProtoStudent);
console.log(student);

const student2 = Reflect.construct(ProtoStudent, ["Elias"]);
console.log(student2);

const student3 = new ProtoStudent(); // same as student2
console.log(student3);

console.log(student.__proto__ === ProtoStudent.prototype);
console.log(student3.__proto__ === ProtoStudent.prototype);

const student4 = Reflect.construct(Student,  ["Ilya"]);
Reflect.apply(student4.greet, {name: "tester"}, []);
console.log(Reflect.ownKeys(student));
