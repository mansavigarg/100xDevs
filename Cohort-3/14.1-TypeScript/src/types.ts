type SumInput = string | number

function sum(a: SumInput, b: SumInput){
    return a
}

type User = {
	firstName: string;
	lastName: string;
	age: number
}

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202



type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};




// creaete two types called user and admin
// create a function that takes user and admin as input and return the name of the user or admin


type NewUser = {
    name: string,
    email:string
}

type NewAdmin = {
    name: string,
    email:string
}

function greeting(user : NewAdmin | NewUser ): string {
    return "Hello" + user.name
}

const greetings = (user : NewAdmin | NewUser): string => {
    return "Hello" + user.name
}


let ans = greeting({name: "Manu", email: "user@gmail.com"})

console.log(ans)
