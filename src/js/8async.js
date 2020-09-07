const delay = ms => new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })

// delay(2000)
//     .then(() => new Promise(resolve => {console.log("2s"); resolve(); }))
//     .then(() => delay(2000))
//     .then(() => {console.log("!2s")});

const url = "https://jsonplaceholder.typicode.com/todos";

// function fetchToDos() {
//     console.log("Start 'fetchToDos'");
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json());
// }
//
// fetchToDos()
//     .then(data => console.log(`Data: ${data}`))
//     .catch(err => console.log(err));

async function fetchAsyncToDos() {
    console.log("Start 'fetchToDos'");
    try {
        // Await позволяет не переходить с следующей строчке, пока не выполнится промис
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Finally");
    }
    console.log(`Data: ${data}`);
}

fetchAsyncToDos();
