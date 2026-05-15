// Simple Callback Example
// This code is Ugly

function findSum(n){
    let ans = 0;   
    for (let i = 0; i < n; i++){
        ans = ans + i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100, 1000)
console.log("I am waiting for the result of the sum of 100 numbers");


// Promises are syntactical sugar to make the code look better nd more readable





// -------------Ugly Way of doing making own async fnx-------------- //

const fs = require('fs');

// my own asynchronous function
function kiratsReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function(err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data)
}

kiratsReadFile(onDone)



// -------------Better Way of doing making own async fnx using Promises-------------- //

const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

kiratsReadFile().then(onDone);


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //
// without async awit syntax --- 

function kiratsAsyncFunction() {
  let p = new Promise(function(resolve) {
    // do some async logic here
    resolve("hi there!")
  });
  return p;
}

function main() {
  kiratsAsyncFunction().then(function(value) {
      console.log(value);
  });
}

main();



// ----async awit syntax 

function kiratsAsyncFunction() {
  let p = new Promise(function(resolve) {
    // do some async logic here
    resolve("hi there!")
  });
  return p;
}

// new keyword async and await , here no callbacks, no .then syntax
async function main() {
  // kiratsAsyncFunction().then(function(value) {
  //   console.log(value);

  const value = await kiratsAsyncFunction();
  console.log(value);
}

main();
console.log("after main");



//  promisified function inside fxn

console. log("at the top 1")
function promisifiedTimeout() {
  console. log("function called 3")
  return new Promise (function (resolve){
    console.log("inside promis callback 4")
    setTimeout(function () {
      console.log("settimeout called 5")
      resolve("done baby! I am burnt out.");
    }, 5000); 
  });
}

console.log("at the middle 2")
promisifiedTimeout().then(function (value){
  console.log("promisifed then 6")
  console.log(value);
});

// Output ----->>>
// at the top 1
// at the middle 2
// function called 3
// inside promis callback 4
// settimeout called 5
// promisifed then 6
// done baby! I am burnt out.