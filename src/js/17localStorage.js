const myNumber = 42;

localStorage.setItem("number", myNumber);
console.log(localStorage.getItem("number"));

const obj = {
    name: "Ilya",
    age: 33
}

localStorage.setItem("person", JSON.stringify(obj, null, 2));

let p = JSON.parse(localStorage.getItem("person"));
console.log("p: ", p);

window.addEventListener("storage", event => {

})
