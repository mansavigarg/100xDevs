import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App(){
  return <div>
    <Todo id={1}></Todo>
  </div>
}

function Todo({id}){
  const [todo, setTodos] = useState({});


  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then(response => {
      setTodos(response.data.todo)
    })
  },[]);


  return <div>
    <h1>{todo.title}</h1>
    <h5>{todo.description}</h5>
  </div>
}

export default App;