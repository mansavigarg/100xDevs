// function greet(user : {
//     name: string,
//     age: number
// }){
//     console.log("Hello " + user.name + " your age is " + user.age)
// }

// greet({name:"mansavi", age: 12})


// interface UserType {
//     firstName: string,
//     lastName: string,
//     age: number,
//     email?: string // optional property
// }

// function greeting(userNew: UserType){

// }

// let userNew: UserType = {
//     firstName: "mannuuu",
//     lastName: "Garg",
//     age: 22
// }

// let userNewWithEmail: UserType = {
//     firstName: "mannuuu",
//     lastName: "Garg",
//     age: 22,
//     email: "mannuuu@example.com"
// }

// interface Address {
//     city: string,
//     state: string,
//     country: string
// }

// interface Employee {
//     name: string,
//     age: number,
//     address: Address
// }

// let employee: Employee = {
//     name: "harkirat",
//     age: 22,
//     address: {
//         city: "Chandigarh",
//         state: "Punjab",
//         country: "India"
//     }
// }


// ! Implementing interfaces

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
    // greet: (phrase: string) => void; // this is also correct way to define function type in interface
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

//another example

interface People {
    name: string;
    age: number;
    greet: () => string;
}

// creating normal object 
let Person : People = {
    name: "Manuu",
    age: 22,
    greet: () => {
        return "Hi there"
    }
}


// creating a class that implements the blue print of the People interface
class Manager implements People {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet(){
        return "Hi there by " + this.name
    }
}

const newManager = new Manager("Mannuuu", 22)

console.log(newManager.greet())




//! ABSTRACT CLASS
abstract class User {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    abstract greet: () => string

    // this is default implementation 
    hello(){
        console.log('hi there')
    }

}


class Employeee extends User {
    name: string
    constructor(name:string){
        super(name)
        this.name = name
    }

    greet = () => {
        return "hi there"
    };
}