// Step 1 ~  write basic express boilerplate in express
// with express.json() middleware


// Step 2 ~ for validation that  user is sending correct input or not we are going to use zod validation
// what input is exxpected from user is 
// body {
//     title : string;
//     description: string;
// }

// create zod types in the new file types.js

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

const port = 3000;
app.use(express.json());
app.use(cors());

app.post("/todos" , async (req,res)=>{
    const createPayload = req.body;
    const parsedpayload = createTodo.safeParse(createPayload);
    if(!parsedpayload.success){
        res.send(411).json({
            msg: "You send the wrong input",
        })
    }
    //put it in mongo db
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
    
});

app.get("/todos" , async (req,res)=>{
    const todos = await todo.find({}); 
    // console.log(todos); this will return you some promis so we have to use async await syntax here
    res.json({
        todos
    })
});

app.put("/completed" , async (req,res)=>{
    const updatePayload = req.body;
    const parsedpayload = updateTodo.safeParse(updatePayload);
    if(!updatePayload.success){
        res.send(411).json({
            msg: "You have send the wrong inputs"
        })
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});