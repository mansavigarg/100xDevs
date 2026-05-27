// Pick in TypeScript

// The Pick utility type allows you to create a new type by selecting specific properties from an existing type. It is useful when you want to create a subset of an existing type.

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Using Pick to create a new type with only 'id' and 'name' properties
type UserPreview = Pick<User, 'id' | 'name'>;

const user: UserPreview = {
    id: 1,
    name: "John Doe"
};

console.log(user);