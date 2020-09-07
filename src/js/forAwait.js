const delay = (ms, id) => new Promise(resolve => setTimeout(resolve, ms, [id]));

const promises = [
    delay(500, 1),
    delay(3000, 2),
    delay(1500, 3),
    delay(2000, 4)
]

async function run() {
    for await (const promise of promises) {
        console.log(promise);
    }
}

run(); // 0: Array [ 1 ], 1: Array [ 2 ], 2: Array [ 3 ], 3: Array [ 4 ]
