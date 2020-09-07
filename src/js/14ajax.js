import 'whatwg-fetch'

const requestURL = "https://jsonplaceholder.typicode.com/users";

// XMLHttpRequest

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.responseType = "json";
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }
        xhr.onerror = () => {
            reject(xhr.response);
        }
        xhr.send(JSON.stringify(body));
    });
}

// sendRequest("GET", requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const body = {
    name: "Ilya",
    age: 33
}

// sendRequest("POST", requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// fetch

function sendRequestFetch(method, url, body) {
    const headers = {
        "Content-Type": "application/json"
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(
        // data.text()
        data => {
            if (data.ok) {
                return data.json()
            } else {
                return data.json().then(err => {
                    const e = new Error("Some error");
                    e.data = err;
                    throw e;
                })
            }
        }
    );
}

// sendRequestFetch("GET", requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

sendRequestFetch("POST", requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err));
