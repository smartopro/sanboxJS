let person = {
    age: 30,
    name: "Alex",

    log2: function () {
        console.group(`${this.name} group:`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.groupEnd();
    },

    log: function (job, phone) {
        console.group(`${this.name} group:`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Job: ${job}`);
        console.log(`Phone: ${phone}`);
        console.groupEnd();
    }
}

let lena = {
    age: 20,
    name: "Elena"
}

person.log2.bind(lena)();
person.log.bind(lena, "Developer", "8 (901) 1234567")();
person.log.call(lena, "Developer", "8 (901) 1234567");
person.log.apply(lena, ["Developer", "8 (901) 1234567"]);

// ============

let array = [1, 2, 3, 4, 5];

function multiplyBy(arr, n) {
    return arr.map(val => {
        return val * n;
    })
}

Array.prototype.multiplyBy = function (n) {
    return this.map(val => {
        return val * n;
    })
}

console.log(array.multiplyBy(2));
