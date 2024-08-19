// //importing the data using the axios lib and showing use of useEffect in the code

// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [todos, setTodos] = useState([]);
    

//   // in the useEffect we can not make the first function  as  a async but to make this function async we can use the lib called as "asyncuseEffect"
//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(function(response){
//       setTodos(response.data.todos);
//     })
//   },[]);

//           // async function main(){
//           //   const response = await axios.get("https://sum-server.100xdevs.com/todos");
//           //   setTodos(response.data.todos);
//           // }
//           // useEffect(()=>{
//           //   main()
//           // },[count])  
//           // //the problem with this situation is that lets say count changes, then it will call the main function which will fetch the data. Meanwhile even before the data is being fetched, count updated again, then the main function will be called again, so this overriding of data is done. That's why this blunder happens.

//   return <div>
//     {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </div>
// }

// function Todo({title, description}){
//   return <div>
//     <h1>{title}</h1>
//     <h4>{description}</h4>
//   </div>
// }

// export default App








// Write a component that takes a todo id as an input And fetches the data for that todo from the given endpoint and then renders it
//How would the dependency change?
//https://sum-server.100xdevs.com/todos?id=1

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App(){
  const [id,setId] = useState(1);

  return <div>
    <button onClick={function(){ setId(1) }}>1</button>
    <button onClick={function(){ setId(2) }}>2</button>
    <button onClick={function(){ setId(3) }}>3</button>
    <button onClick={function(){ setId(4) }}>4</button>
    <Todo id={id}></Todo>
  </div>
}

function Todo({id}){
  const [todo, setTodos] = useState({});


  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(response => {
      setTodos(response.data.todo)
    })
  },[id]);


  return <div>
    <h1>{todo.title}</h1>
    <h5>{todo.description}</h5>
  </div>
}

export default App;