console.log("Request data...");

// window.setTimeout(() => {
//     console.log("Data is ready to send.");
//
//     const backendData = {
//         server: "aws",
//         port: 2000,
//         status: "working"
//     };
//
//     setTimeout(() => {
//         backendData.modified = true;
//         console.log("Data received", backendData);
//     }, 2000)
// }, 2000);
//
new Promise(function (resolve, reject) {
    // async code ...
    setTimeout(() => {
        console.log("Data is ready to send.");

        const backendData = {
            server: "aws",
            port: 2000,
            status: "working"
        };

        resolve(backendData);
    }, 2000);
}).then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 2000)
    });
})
    .then(clientData => {
    console.log("Data received", clientData);
})
    .catch(error => console.error("Error: ", error))
    .finally(() => {console.log("Finally.")});

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => {resolve()}, ms);
    })
};

sleep(2000).then(() => {
    console.log("After 2 sec.");
})

Promise.all([sleep(2000), sleep(3000)]).then(() => {console.log("Promise.all")});