// // one way of writing the code in which every thing is shoved in App() ------>>>>>>


// //  for dynamic website we define two things that is state and components
// // let state = {
// //   count: 0
// // }
// // by this even if we are defining the state here but react do not watch over every state to rerender so that's why we have to define a rerendering state 

// // ddefining the rerendering state
// import {Component, useState} from "react";  // {userState} is a hook

// // here we have componet as App 
// function App() {

//   const [count , setCount] = useState(0); 
//   // here userstate(0) return two value which is then stores in count and setCount
   
//   function onClickHandler(){
//     setCount(count+1); // we are given a setCount function and we need to call that function we the new value of the count
//   }

//   return (
//     <div>
//       <button onClick={onClickHandler} > Counter {count} </button>
//     </div>
//   )
// }
// export default App




// other way of writing the code is that we divide everything in Component and write the logic ---->>>


import { Component, useState } from "react";

function App(){
  const [count , setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount} ></CustomButton>
      <CustomButton count={count+1} setCount={setCount} ></CustomButton>
      <CustomButton count={count-1} setCount={setCount} ></CustomButton>
      <CustomButton count={count*10} setCount={setCount} ></CustomButton>
    </div>
  )
} 


// Component
function CustomButton(props){  //props is the input what takes the both state variable as input
  
  function onClickHandler(){
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}


export default App







// this is todo wala code ------>>>>


// import {useState} from "react";

// function App() {
//   const [todos, setTodos] = useState([{
//     title: "Go to gym",
//     description: "Go to gym from 7-9",
//     completed: false
//   }, {
//     title: "Study DSA",
//     description: "Study DSA form 9-100",
//     completed: true
//   }, {
//     title: "Study DSA",
//     description: "Study DSA form 9-100",
//     completed: true
//   }, ]); 

//   function addTodo() {
//     // [1, 2]
//     // [...todos, 3] => [1, 2, 3]
//     setTodos([...todos, {
//       title: "new Todo",
//       description: "desc of new todo"
//     }])
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a random todo</button>
//       {todos.map(function(todo) {
//         return <Todo title={todo.title} description={todo.description} />
//       })}

//     </div>
//   )
// }

// function Todo(props) {
//   return <div>
//     <h1>{props.title}</h1>
//     <h2>{props.description}</h2>
//   </div>
// }

// export default App



// react context, recoil, redux, zustand

// new way to call a fxn in jsx
// function Sum(a,b){

// }


// const [a, setA] = useState(0);
// <Sum a={a} b={2}></Sum> now anytime a is updated using setA then react will know to rerender the a here in the Sum Component 