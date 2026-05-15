const express = require("express");
const app = express();

//This middleware will always be called every time in {app.}
app.use(express.json());


// middlewares are used for two pre-checks --1>> authantication --2>> input validation

// Using middlewares
function userMiddlesware(req,res,next){
    const username = req.query.username;
    const password = req.query.password;
    if(username != "Mansavi" || password != "pass"){
        res.status(403).json({
            msg: "User not exits"
        })
    }else next();
}


function kidneyMiddlesware(req,res,next){
    const kidneyID = req.query.kidneyID;
    if(kidneyID != 1 && kidneyID != 2){
        res.status(403).json({
            msg: "Wrong inputs"
        })
    }else next();
}

//rate limiter
let numberofRequest = 0;

function calculateRequests(req,res,next){
    numberofRequest++;
    console.log(numberofRequest);
    next();
}

app.use(calculateRequests);

app.get("/health", userMiddlesware ,kidneyMiddlesware , (req, res)=>{
    res.send("your health is healthy")
})
app.get("/kidney-health", userMiddlesware ,kidneyMiddlesware , (req, res)=>{
    res.send("your kideny is healthy")
})
app.get("/heart-health", userMiddlesware, (req, res)=>{
    res.send("your heart is healthy")
})




// <<<<<<<<<<<<-------Ugly way of doing checks--------->>>>>>>>>>>>>>>>> //

// app.get("/" , (req,res) => {
    
//     const kidneyID = req.query.kidneyID;
//     const username = req.query.username;
//     const password = req.query.password;

//     if(username != "Mansavi" || password != "pass"){
//         res.status(403).json({
//             msg: "User not exits"
//         })
//         return;
//     }

//     if(kidneyID != 1 && kidneyID != 2){
//         res.status(403).json({
//             msg: "Wrong inputs"
//         })
//         return;
//     }

//     res.send("You are healthy");
// })


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
