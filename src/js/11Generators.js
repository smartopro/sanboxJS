// Iterators
import "core-js/stable";
import "regenerator-runtime/runtime";

let arr = [1, 2, 3, 4, 5];

const iter = arr[Symbol.iterator]();

console.log(iter.next());

const country = {
    values: ["ru", "en", "us", "de"],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                const value = this.values[i++];
                return {
                    value,
                    done: i > this.values.length,
                }
            }
        }
    }
}

for (let c of country) {
    console.log(c);
}

// Generators

function* Gen(num = 4) {
    // try {
    //     yield "H"
    //     yield "e"
    //     yield "l"
    //     yield "l"
    //     yield "0"
    // } catch (err) {
    //     console.log(err)
    // }
    for(let i = 0; i < num; i++) {
        try {
            console.log("i = " + i);
            yield i;
        } catch (err) {
            console.log(err + " i = " + i);
        }
    }
    return num;
}

const iterator = Gen(5);
let result;
do {
    result = iterator.next();
    console.log(result);
    if (result.value === 2) iterator.throw("My error!");
} while (!result.done)
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.throw("My error"));
// console.log(iterator.next());
// console.log(iterator.next());

// function* numberGen(n = 10) {
//     for (let i = 0; i<n; i++) {
//         yield i;
//     }
// }
//
// for(let n of numberGen(7)) {
//     console.log(n);
// }
