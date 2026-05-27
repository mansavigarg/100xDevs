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