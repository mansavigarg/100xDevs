import React, { useRef, useState } from 'react';
import Clock from './Clock';
import Chat from './Chat';




// ! SPA - Single Page Application And Routing in React
// # React Router
// # React Router is a popular library for handling routing in React applications. It allows developers to create single-page applications (SPAs) with multiple views and navigation without the need for full page reloads. React Router provides components like BrowserRouter, Routes, Route, Link, and more to define routes and manage navigation within the application. It enables developers to create dynamic and responsive user interfaces by rendering different components based on the current URL path. With React Router, you can easily implement features like nested routes, route parameters, and programmatic navigation, making it an essential tool for building modern web applications with React.

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function App() {

//   return <div>
//     <BrowserRouter>
//       <Link to="/">Allen</Link>
//       ------
//       <Link to="/neet/online-coaching-class-11">Class 11</Link> 
//       ------
//       <Link to="/neet/online-coaching-class-12">Class 12</Link>
//       <Routes>
//         <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
//         <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
//         <Route path="/" element={<Landing />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </BrowserRouter>
//   </div>
// }

// function ErrorPage(){
//     return <div>
//         Sorry not found
//     </div>
// }

// function Landing() {
//   return <div>
//     Welcome to allen
//   </div>
// }

// function Class11Program() {
//   return <div>
//       NEET programs for Class 11th
//   </div>
// }

// function Class12Program() {
//   return <div>
//       NEET programs for Class 12th
//   </div>
// }

// export default App








// ! useRef - The useRef hook in React is a built-in function that allows you to create a mutable reference that persists across re-renders of a component. It is commonly used to access and manipulate DOM elements directly, store mutable values, or keep track of previous state values without causing re-renders. The useRef hook returns an object with a current property that can be assigned to a DOM element or used to store any mutable value. When the current property is updated, it does not trigger a re-render of the component, making it useful for scenarios where you want to maintain state without causing unnecessary updates to the UI.
// useref gives reference to a dom element and allows us to manipulate it directly without re-rendering the component. It is useful for cases like focusing an input field, measuring the size of an element, or storing mutable values that do not require re-rendering the component when they change.
// useref gives reference to a value, such that when we update the value, it does not cause the component to re-render. This is useful for cases where we want to store mutable values that do not affect the rendering of the component, such as timers, intervals, or previous state values. By using useRef, we can keep track of these values without triggering unnecessary re-renders, improving performance and efficiency in our React applications.


function App() {

    // 3 ways to define variables in React component
    // 1. Normal variable - does not persist across re-renders - rarely used
    let value = 0
    // 2. State variable - persists across re-renders and causes re-render when updated
    const [count, setCount] = useState(0)
    // 3. Ref variable - persists across re-renders but does not cause re-render when updated
    const valueRef = useRef(0)

     function handleNormalVariable() {
        value += 1
        console.log("Normal Variable:", value)
    }
    
    function handleStateVariable() {
        setCount(count + 1)
        console.log("State Variable:", count)
    }

    const countRef = useRef(0)

    function handleClick() {
        countRef.current += 1
        console.log("Count:", countRef.current)
    }

    return <div>
        {/* <button onClick={handleClick}>Increment Count</button>
        <p>Count: {countRef.current}</p> */}
        <Clock />
        <Chat />
    </div>
}       

export default App