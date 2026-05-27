 // Generics in TypeScript

// Generics allow you to create reusable components that can work with a variety of types rather than a single one. This is particularly useful when you want to create functions, classes, or interfaces that can operate on different data types while still maintaining type safety.

// Example of a generic function
function identity<T>(arg: T): T {
    return arg;
}

// Using the generic function with different types
let output1 = identity<string>("Hello, Generics!");
let output2 = identity<number>(42);

console.log(output1); // Output: Hello, Generics!
console.log(output2); // Output: 42

// Example of a generic class
class Box<T> {
    contents: T;

    constructor(value: T) {
        this.contents = value;
    }

    getContents(): T {
        return this.contents;
    }
}

// Using the generic class with different types
let stringBox = new Box<string>("This is a box of strings");
let numberBox = new Box<number>(12345);

console.log(stringBox.getContents()); // Output: This is a box of strings
console.log(numberBox.getContents()); // Output: 12345

// Example of a generic interface
interface Pair<K, V> {
    key: K;
    value: V;
}

let pair1: Pair<string, number> = { key: "age", value: 30 };
let pair2: Pair<number, string> = { key: 1, value: "one" };

console.log(pair1); // Output: { key: 'age', value: 30 }
console.log(pair2); // Output: { key: 1, value: 'one' }



// example by harkirat ---------

type Input = string | number;

function firstEl(arr: Input[]){
    return arr[0];
} 

const value = firstEl(["harkirat", "manu", "manny"]);
const value2 = firstEl([1, 2, 3, "harkirat"]); // -- user can also send mixed array of string and number
console.log(value); // Output: harkirat
console.log(value.toUpperCase()); // -- error as typescript is not sure whether value is string or number and toUpperCase is only available for string type so it will throw an error



// Two problems with the above code:
// 1. TS is not able to infer the type as it can be either string or number
// 2. The function is not type safe as it can accept mixed array of string and number which can lead to runtime errors when we try to call string methods on number type or vice versa.

// To solve these problems, we can use generics in TypeScript. Generics allow us to create a reusable function that can work with any type while still maintaining type safety.



// generic syntex :

function firstElement<T>(arr: T[]): T {
    return arr[0]!; // -- we can also use non-null assertion operator to tell typescript that we are sure that the array will not be empty and it will return a value of type T
}

const value3 = firstElement<string>(["harkirat", "manu", "manny"]);
const value4 = firstElement<number>([1, 2, 3, 4]);
console.log(value3); // Output: harkirat
console.log(value4); // Output: 1

// Now, the function is reusable and type safe. We can use it with any type by specifying the type parameter when calling the function. TypeScript will ensure that the correct type is used and will throw an error if we try to use it with an incompatible type.


function identityWithDefault<T = string>(arg: T): T {
    return arg;
}

let output3 = identityWithDefault("Hello, Generics with Default Type!");
let output4 = identityWithDefault(42);

console.log(output3); // Output: Hello, Generics with Default Type!
console.log(output4); // Output: 42

// In this example, we have provided a default type of string for the generic type parameter T. This means that if we do not specify a type when calling the function, it will default to string. However, we can still specify a different type if needed, as shown in the second call to the function where we use number.


function newidentity<T>(arg: T){
    return arg
}

let output5 = newidentity<string>("Mystring")
let output6 = newidentity<number>(100)



// solution to the problem:

function getFirstElement<T>(arr: T[]) {
    return arr[0]
}

const el1 = getFirstElement<string>(["manu", "nanu"])
const el2 = getFirstElement<number>([1,2,3,4])
