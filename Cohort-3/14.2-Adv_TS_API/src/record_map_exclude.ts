interface User {
  id: string;
  name: string;
}

type Users = { [key: string]: User };

const users: Users = {
  'abc123': {
        id: 'abc123', 
        name: 'John Doe' 
    },
  'xyz789': { 
        id: 'xyz789', 
        name: 'Jane Doe' 
    },
};



//* records -- Record let’s you give a cleaner type to objects

interface User {
  id: string;
  name: string;
}

type Users1 = Record<string, User>;

const users1: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }




//* Map -- maps gives you an even fancier way to deal with objects. Very similar to Maps in C++

interface User {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }




//* Exclude -- In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.

type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK