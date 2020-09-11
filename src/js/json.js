document.addEventListener("DOMContentLoaded", async function () {
    const fetchResult = await fetch("js/json.json");
    const json = await fetchResult.json();
    console.log(json);
        // .then(response => response.json())
        // .then(json => console.log(json));
});
