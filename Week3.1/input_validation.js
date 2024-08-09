const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());

app.post("/health-checkup", (req,res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys");

});

// Global catches Middleware----->>> willl be called after all the code if there is an exception this guy will be called

app.use((err, req, res, next)=>{
    res.json({
        msg: "Sorry something is up with server"
    })

})

// input validation Libraries: Zod --->>>>>




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


