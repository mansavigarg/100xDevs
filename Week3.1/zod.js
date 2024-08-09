const express = require("express");
const zod = require("zod");
const app = express();

// input validation Libraries: Zod --->>>>>
const schema = zod.array(zod.number());

app.use(express.json());

// Example of zod
// {
//     email: string (which should look like an email such as @gmail.com type)
//     password: atleast 8 letters
//     country: "IN", "US"
// }
// ---->> const schema = zod.object({
//          email: zod.string(),
//          password: zod.string(),
//          country: zod.literal("IN").or(zod.literal("US"));
//        })   

// Another example
// {
//     email: => string => should loook like a mail 
//     passowrd => 8 letters
// }

// const schema = zod.object({
//     email: zod.string().email(),
//     passowrd: zod.string().min(8)
// })


app.post("/health-checkup", (req,res) => {

    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    const response = schema.safeParse(kidneys);

    // res.send("You have " + kidneyLength + " kidneys");
    res.send(
        {response}
    )

});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});





// Another Whole example:

// const zod = require(zod);

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email: "mansavigarg@gmail.com",
    password: "23456781"
});