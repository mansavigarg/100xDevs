import { useState } from "react";
import { useEffect } from "react"

function App() {
  const [todos,setTodos] = useState([]);

  useEffect(() => { //first agrument to useEffect cannot be a async fxn
    setInterval(() => {
          fetch("https://sum-server.100xdevs.com/todos")
            .then( async (res)=>{
              const json = await res.json();
              setTodos(json.todos);
            })
    }, 5000); // to send the request every interval
  },[]) // this array takes state variable as an input

  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App