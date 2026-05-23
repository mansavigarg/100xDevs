/*
    ## USE EFFECT HOOK IN REACT
    ## Cleaning up the useEffect Hook in React
    This is the code for the useEffect Hook in React. 
    The useEffect Hook allows you to perform side effects in your components, such as fetching data, updating the DOM, or setting up subscriptions. 
    It takes a function as an argument and runs that function after the component renders. 
    You can also specify dependencies for the effect, so it only runs when those dependencies change.
*/


import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    const [counterVariable, setCounterVariable] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setCounterVariable( c => !c)
        }, 5000)
    }, [])
//   function increaseCount(){
//     setCount(count + 1)
//   }

  return (
    <div>
        {/* {counterVariable ? <Counter></Counter> : null} */}
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0)
  

  console.log("Counter")

/*
    This is a very crazy concept 
    So when we do a setInterval in the useEffect, then this interval is never cleared and it will be called again again in all the requests 
    @ hmne setinterval ko useEffect ke andar isliye use kiya hai taki jab bhi component unmount ho to ye interval clear ho jaye
    # hmne setinterval se interval ko start kiya hai, to ye interval har 1 second me count ko increase karta rahega, lekin jab component unmount ho jaye to ye interval clear nahi hoga aur ye count ko increase karta rahega, isliye hume useEffect ke return function me clearInterval ka use karna padta hai taki jab component unmount ho jaye to ye interval clear ho jaye aur count ko increase na kare
    
    So we need to do --- clearInterval(clock); -- so that the clock which is stated will be unmounted 
*/

    useEffect(() => {
        console.log("On Mount :)")
        const clock =  setInterval(() => {
            console.log("Inside Interval")
            setCount(count => count + 1)
        }, 1000);
        return () => {
            console.log("On Unmount :)")
            clearInterval(clock)};
    }, [])

    return (
    <div>
        <div> This is upper </div>
      <h1>{count}</h1>
        <div> This is lower </div>
      {/* <button onClick={increaseCount}> Click Me </button> */}
    </div>
  )
}

export default App