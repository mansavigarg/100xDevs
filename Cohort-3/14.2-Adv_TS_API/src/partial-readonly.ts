// Partial Type

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Using Pick to create a new type with only 'id' and 'name' properties
type UserPreview = Pick<User, 'id' | 'name'>;

type updateUser = Partial<User>;

function updateUserInfo(user: User, updatedInfo: updateUser): User {
    return { ...user, ...updatedInfo };
}

const user1: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30
};

const updatedUser = updateUserInfo(user1, { name: "Jane Doe", age: 25 });

console.log(updatedUser);




// Readonly Type

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}
interface User33 {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly age: number;
}

type ReadonlyUser = Readonly<User>;

const user2: ReadonlyUser = {
    id: 2,
    name: "Alice Smith",
    email: "mansavi@gmail.com",
    age: 28
};

// user2.name = "Bob Smith"; // Error: Cannot assign to 'name' because it is a read-only property.