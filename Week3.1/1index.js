const express = require("express");
const app = express();
app.use(express.json());

app.get("/" , (req, res) =>{

    const n = req.query.n;
    if (n==1 || n == 2){
    res.send("Yes Eligible");
    }else res.send("Not Eligible")
})



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});