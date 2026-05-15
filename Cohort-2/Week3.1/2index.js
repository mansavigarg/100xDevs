const express = require('express');
const app = express();


app.get("/health-checkup", (req,res) =>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    
    if (username != "mansavi" || password != "pass"){
        res.status(400).json({"msg" : "something is up with your inputs"})
        return
    } 

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg" : "something is up with your inputs"})
        return
    }

    // do something

    res.json({
        "msg" : "Your Kidney is fine"
    });

});


app.listen(3000,()=>{
    console.log("App is listening on PORT 3000");
})