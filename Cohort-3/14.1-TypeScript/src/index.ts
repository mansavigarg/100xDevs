function greet(firstName: string) {
    console.log("Hello " + firstName);
}

greet("harkirat");



function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(2, 3));



function isLegal(age: number) {
    if (age > 18) {
        return true;
    } else {
        return false
    }
}

console.log(isLegal(2));


function delayedCall(fn: () => void){ // input function type is () => void ----> which means it takes no argument and return type of the function is void
    setTimeout(() => {
        fn  
    }, 1000);
}

delayedCall(function() {
    console.log("hi there");
})

let greeting = () => {
    console.log("Hello world");
}
greeting();