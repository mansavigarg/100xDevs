function findSum(n){
    let ans = 0;   
    for (let i = 0; i < n; i++){
        ans = ans + i;
    }
    return ans;
}

function findSumTill100(){
    console.log (findSum(100));
}

setTimeout(findSumTill100, 5000) // asynchronous function as it will wait for 5 seconds before executing the function but the controller reches the next line and executes it without waiting for the setTimeout function to complete. After 5 seconds, the function findSumTill100 will be executed.
console.log("I am waiting for the result of the sum of 100 numbers");




// async function that JS provides
        // setTimeout
        // fs.readFile
        // fetch