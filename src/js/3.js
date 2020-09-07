person1 = {
    name: "Alex",
    age: 30,
    fn: logPerson
}

function logPerson(job, phone) {
    console.log(`Name: ${this.name}.`);
    console.log(`Age: ${this.age}.`);
    console.log(`Job: ${job}.`);
    console.log(`Phone: ${phone}.`);
}

function bind(context, fn) {
    context.tmp = fn;
    //return context.tmp;
    return function (...args) {
        return context.tmp(...args);
    }
}



bind(person1, logPerson)("Developer", "+7 (904) 1234567");
//console.log(logPerson.bind(person1)());

/*person1.tmp = logPerson;
person1.tmp();*/


function double(n) {
    return function() {
        console.log(2 * n);
    }
}

double(5)(); // 10