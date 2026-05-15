//  promisified function inside fxn

// console. log("at the top 1")
// function promisifiedTimeout() {
//   console. log("function called 3")
//   return new Promise (function (resolve){
//     console.log("inside promis callback 4")
//     setTimeout(function () {
//       console.log("settimeout called 5")
//       resolve("done baby! I am burnt out.");
//     }, 5000); 
//   });
// }

// console.log("at the middle 2")
// promisifiedTimeout().then(function (value){
//   console.log("promisifed then 6")
//   console.log(value);
// });

// // Output ----->>>
// // at the top 1
// // at the middle 2
// // function called 3
// // inside promis callback 4
// // settimeout called 5
// // promisifed then 6
// // done baby! I am burnt out.