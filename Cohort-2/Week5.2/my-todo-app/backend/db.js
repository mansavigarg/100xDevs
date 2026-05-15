const mongoose = require("mongoose")


/*
    Todo {
    title: string,
    description: string,
    completed: boolean
    }
*/

mongoose.connect("mongodb+srv://mansavigarg9919:Mansavi9919@week3-100xdevs.misimqw.mongodb.net/todos")
    
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}