import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // we need to hit the backend get back the current set of todos and call setTodos with the new net of todos 
      // the wrong way ==== because infinte fetch request are being send here in the network using the fetch api
      /*
              fetch("http://localhost:3000/todos")
                .then(async function(response){
                  const json = await response.json();
                  setTodos(json.todos);
              })
      */            

  // solve this problem we use the useEffect hook of react

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} ></Todos>
    </div>
  )
}

export default App
