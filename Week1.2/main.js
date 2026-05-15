// let firstName = "Plinkster";
// let age = 18;
// let isMarried = true;


// let ans = 0;
// for(let i = 1 ; i <= 10000;i++){
//      ans = ans + i;
// }

// console.log(ans);

// const person = ["hello" , "i am mansavi" , "garg"]

// console.log(person[0]+ " " + person[2]);


// const ages = [ 12,45,64,36,2253,11,1234,13,17,100];

// let biggestNumber = ages[0];
// for (let i = 0 ; i <ages.length; i++){
//     if (biggestNumber < ages[i]){
//         biggestNumber= ages[i]
//     }
// }

// console.log(biggestNumber);

// const person = ["mansavi" , "hitesh", "gourav", "oviyan"];
// const gender = ["male" , "male" , "male", "female"];

// for (let i = 0 ; i < person.length; i ++){
//     if(gender[i] == "male"){
//         console.log(person[i]);
//     }
// }

// OBJECTS:
// const user1 = {
//         firstName : "Mansavi",
//         age : 22
// }
// console.log(user1["firstName"]);

// ARRAY OF OBJECTS
// const allUsers = [{
//         firstName : "Manu",
//         age : 22     
// },{
//         firstName : "Nanu",
//         age : 22    
// }]
// console.log(allUsers[0]["age"]);


// function sum(sd){
//         return sd;
// }
// console.log(sum(33));



// function sum (a , b) {
//     return a + b ;
// }


// console.log(sum(231, 2025));



// let sum=0;
// for (let i = 0 ; i < 10000000000000; i++){
//     sum = sum + i ;
// }
// console.log(sum);



// function sum1(num1, num2){
//         return num1 + num2;
// }

// function displayresult1(data){
//         console.log("Result of sum is : " + data);
// }

// function displayResultPassive1(data){
//         console.log("Result of sum is : " + data);
// }

// const ans1 = sum1(23,34);
// displayresult1(ans1)
// now i need to only call a single function to get the sum



// ------------>>>  CallBack Funcation  <<<------------ //

        // function sum (num1, num2, fnToCall){
        //     fnToCall(num1+num2);
        // }

        // function displayResult(data){
        //     console.log("Result of the sum is " + data);
        // }
        // function displayResultPassive(data){
        //     console.log("Sum's result is " + data);
        // }


        // sum(7,77,displayResultPassive);



// ------------>>>  CallBack Funcation  <<<------------ //

        function calculateAirthmatic(a,b, airthmaticFinalFunction){
            // function airthmaticFinalFunction(a,b){
            //     return a+b;
            // }
            const ans = airthmaticFinalFunction(a,b)
            return ans;
        }
        function sum(a,b){
            return a + b;
        }
        function minus(a,b){
            return a - b;
        }
        const value = calculateAirthmatic(1,7,minus);
        console.log(value);



// ------------>>>  setTimeout / setInterval <<<------------ //

        // setTimeout(functionToExecute,time in milliseconds)
        // setInterval(functionToExecute,time in milliseconds) ----->> executes the function repeat after that interval

        // function greet(){
        //     console.log("Hello World");
        // }
        // setInterval(greet, 1*1000);


        
// ------------>>> <<<------------ //
