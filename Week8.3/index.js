// axios vs fetch

const express = require("express");

function main() {
    fetch("https://sum-server.100xdevs.com/todos")
        .then( async (response) => {
            const json = await response.json();
            console.log(json.todos.length);
        })
}

main();

// // same thing as above
// async function main() {
//     const response = await fetch("https://sum-server.100xdevs.com/todos")
//     const json = await response.json();
//     console.log(json.todos.length);
// }

// main();





// using axios
async function main() {
    const response = await axios.get("https://sum-server.100xdevs.com/todos")
    // axios is returning the final data in => response.data
    console.log(response.data.todos.length);
}

main();

// read axios docs

// httpdump.app
