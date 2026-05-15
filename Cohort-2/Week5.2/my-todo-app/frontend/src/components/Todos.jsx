/*
    Object desctructuring means pass {todos} in the main function
    this is an array --->>
    todos = [{
    title: "go to gym",
    description: "go to gym now"
    }]

    jargon is how to render this array in the fucntion ===>> using new syntax
    {todos.map(function(todo){
    return})}
*/

export function Todos({todos}){
    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}