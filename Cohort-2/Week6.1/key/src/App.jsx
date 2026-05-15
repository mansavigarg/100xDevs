import { useState } from 'react'

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym ",
    description: "Now"
  },{
    id: 2,
    title: "Eat food ",
    description: "Now"
  },{
    id: 3,
    title: "Do Coding ",
    description: "Now"
  }])

  function addTodo(){

    // spread syntax in js :
    setTodos([...todos,{
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])

          // // this also do the same think as above
          // const newTodos = [];
          // for(let i = 0; i < todos.length; i++){
          //   newTodos.push(todos[i]);
          // }
          // // newTodos == todos
          // newTodos.push({
          //   id:4,
          //   title: Math.random(),
          //   description: Math.random()      
          // })
          // setTodos(newTodos)

  }

  return (
    <div>
        {/* a button in the top level app component to add a new to do */}
        <button onClick={addTodo}>Add a Todo</button>

        {/* One way to Iterate over the array to render all the todos, */}
        {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} /> )}
        {/* here we need to give an key to every element in the array so that react can easily identify them */}
        {/* https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key */}



        {/* 2nd way to Iterate over the array to render all the todos, */}
        {/* 
                  {todos.map(function(todo){
                    return <Todo title={todo.title} description={todo.description} />
                  })} 
        */}
    </div>
  )
}

function Todo({title, description}){
    return <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
}

export default App
