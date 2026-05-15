// import React , { useState } from "react";
// import { useEffect } from "react";

import axios from "axios";
import { useMemo, useState } from "react";
import { useEffect, memo } from "react";


// function App() {
//   return (
//     <>
//       <CardWrapper innerComponent={<TextComponent />} />
//     </>
//   )
// }

// function TextComponent(){
//   return (
//     <div>
//       Hi there from the TextComponent
//     </div>
//   )
// }

// function CardWrapper({innerComponent}){
//   return <div style={{border: "2px solid pink"}}>
//     {innerComponent}
//   </div>
// }

// export default App;


function useTodos(){
	const [todos, setTodos] = useState([])

	useEffect(() => {
		// fetch("https://dummyjson.com/todos")
		//   .then(async (response) => {
		//     const json = await response.json()
		//     setTodos(json.todos)
		//   })
		
		axios.get("https://dummyjson.com/todos")
			.then(function(response) {
			setTodos(response.data.todos)
			})
	},[])

}

function App() {
	const todos = useTodos()

  return(
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1> Title:  {todo.id} </h1>
          <h2> Description: {todo.todo} </h2>
        </div>
      ))}
    </>
  )
}


export default App;
 





// function App() {

//   const [count, setCount] = useState(0)

//   function logSomething(){
//     console.log("Child Clicked")
//   }

//   return(
//     <div>
//         <Child inputFunction = {logSomething} />
//         <button onClick={() => {setCount(count+1)}}>Click me</button>
//     </div>
//   )
// }

// const Child = memo(({inputFunction}) => {
//   console.log("child render");
  
//   return <div>
//     <button onClick={inputFunction}> Button Clicked </button>
//   </div>
// })


// export default App;



// function App() {
//     const [counter, setCounter] = useState(0)
//     const [inputValue, setInputValue] = useState(1)

//     let count = useMemo(() => {
// 		console.log("memo called");
		
//       let finalCount = 0;
//       for(let i = 1; i <= inputValue; i++){
//         finalCount = finalCount + i;
//       }
// 	  return finalCount
//     }, [inputValue])


//     return(
//       <div>
//         <input onChange={(e) => {
//           setInputValue(e.target.value)
//         }} placeholder="Enter the number here"></input>
//         <br />
//         <br />
//         <br />
//         <br />

//         <div>
//         {count}
//         </div>

//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <button onClick={() => {setCounter(counter+1)}}>Counter {counter}</button>
//       </div>
//     )
// }


// export default App;
 