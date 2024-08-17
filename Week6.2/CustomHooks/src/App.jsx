import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

  // Creating out HOOK=>
function useTodos(){
      const [todos, setTodos] = useState([]);
      useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/todos")
        .then(function(response){
          setTodos(response.data.todos);
        })
      },[]);
  return todos;
}



function App() {

  //Creating a custom Hook for the following logic::::
        // const [todos, setTodos] = useState([]);
        // useEffect(()=>{
        //   axios.get("https://sum-server.100xdevs.com/todos")
        //   .then(function(response){
        //     setTodos(response.data.todos);
        //   })
        // },[]);
  // Calling the custom Hook

  const todos = useTodos();

  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
      <Hello></Hello>
    </div>
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App


