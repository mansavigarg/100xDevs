const fs = require("fs");

fs.readFile("./Week1.5/a.txt", "utf8", function(err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data);
});

console.log("I am waiting for the result of the file read operation");