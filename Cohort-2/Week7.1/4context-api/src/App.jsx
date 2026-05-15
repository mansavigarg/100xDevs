// Context API
// Lets create a simple Counter application, first without the context api and then with it:

// Things to learn:
// ~ createContext
// ~ Provider
// ~ useContext Hook

// https://react.dev/learn/passing-data-deeply-with-context


// Redux and recoil are the state management tools That allows us to manage the states in react along with managing the prop drilling
// If we do not want to use redux and recoil, we can use something called as reducer and useReducer Hooks

import { useContext, useState } from "react"
import { CountContext } from "./context";


function App() {
  const [count,setCount] = useState(0);

  // wrap anyone that wants to use thhe telepoted value(context.jsx) inside a provider
  return (
    <div>
      <CountContext.Provider value={{count , setCount}}>
        <Count></Count>
      </CountContext.Provider>
    </div>
  )
}

function Count(){ // count should not be accepted as a prop here
  return <div>
    <CountRendered ></CountRendered>
    <Buttons></Buttons>
  </div>
}

function CountRendered(){
  const {count} = useContext(CountContext);  // getting the value of count using the useContext from the CountContext
  return <div>
    {count}
  </div>
}

function Buttons(){
  const {count,setCount} = useContext(CountContext);  // getting the value of count using the useContext from the CountContext
  return <div>
      <button onClick={() =>{
        setCount(count+1)
      }}>Increase</button>
      <button onClick={() =>{
        setCount(count-1)
      }}>Decrease</button>
  </div>
}

export default App
