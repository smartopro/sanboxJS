const person = Object.create({
    // prototype object
    calculateAge: function() {
        console.log("Age: ", (new Date()).getFullYear() - this.birthYear);
    }
}, {
    name: {
        value: "Ilya",
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 1986,
        writable: true
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear;
        },
        set(value) {
            this.birthYear = new Date().getFullYear() - value;
        }
    }
});

//person.name = "Elias";

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`Key: ${key}, value: ${person[key]}`);
    }
}
