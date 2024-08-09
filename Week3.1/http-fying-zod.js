const express = require("express");
const zod = require("zod");
const app = express();
app.use(express.json());



function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
    })
    // const response = schema.safeParse(obj);
    // console.log(response);
    return schema.safeParse(obj);
}

// validateInput({
//     email: "mansavigarg@gmail.com",
//     password: "23456781"
// });

app.post("/login", (req,res)=>{

    const response = validateInput(req.body);
    console.log(response);

    if(!response.success){
        res.json({
        msg: "Your Inputs are invalid"
        })
        return;
    }
    res.json({
        "msg" : "login Successful"
    })
})



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});