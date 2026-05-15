const fs = require("fs");
//filesystem - gives access to read file

fs.readFile("./Week1.5/a.txt","utf-8",function(err ,data){
    console.log(data);
})

//readfile- for reading file
//utf-8 - encoding the data
//function (err,data) - asynfun ,give error first then data

console.log("hii there 2");
let a=0;
//takes very long,longer than time read
//it waits to cmplete upper task before
for (let i=0;i<100000000;i++){
    a++;
}
console.log("hii cutu");