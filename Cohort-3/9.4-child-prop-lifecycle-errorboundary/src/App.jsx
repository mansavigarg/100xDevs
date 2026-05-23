// @ children is a special prop in React that allows you to pass elements or components as content to a parent component. It is used to create reusable components that can wrap other components or elements. The children prop can be accessed within the parent component and rendered as part of the component's output. This allows for greater flexibility and composition in building user interfaces.


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {

//   return (
//     <div>
//         <Card>Hello I am Mansavi</Card>
//         <Card>Class</Card>
//         <Card>This is Mansavi</Card>
//     </div>
//   )
// }

// function Card({children}){
//     return <div style={{background: "grey", borderRadius: 10, color: "white", padding: 10, margin: 10}}>
//         {children}
//     </div>
// }

// export default App


// @ Error Boundary
// @ An error boundary is a React component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of the component tree that crashed. Error boundaries are used to prevent the entire application from crashing when an error occurs in a specific part of the UI. They can be implemented using class components by defining a method called componentDidCatch, which is triggered when an error is thrown in any of the child components. This allows developers to handle errors gracefully and provide a better user experience.



import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

const BuggyComponent = () => {
    throw new Error("I crashed!");
};

const App = () => {
    return (
        <>
        <ErrorBoundary>
            <BuggyComponent />
        </ErrorBoundary>
        <div>This will still render even if the BuggyComponent crashes.</div>
        </>
    );
};

export default App




// 00:12 - children Prop
// 14:29 - Lists and Keys
// 23:13 - Inline styling
// 26:23 - Class based vs Functional Components
// 31:49 - Lifecycle Events
// 40:11 - Error Boundary
// 49:06 - Fragments in React
// 54:11-55:18 - Conclusion