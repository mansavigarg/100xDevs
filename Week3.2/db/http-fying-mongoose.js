const express = require("express");

const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://mansavigarg9919:Mansavi9919@week3-100xdevs.misimqw.mongodb.net/")  

const User = mongoose.model('Users', { 
  name: String, 
  email: String, 
  password: String 
});

app.post("/signup" , async (req,res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const existingUser = await User.findOne({email: email});
    if(existingUser){
      return res.status(400).send("User already exists");
    }
    
  const user = new User({ 
    name: username , 
    email: email, 
    password: password });
    user.save();
    res.send({
      "msg":"User created successfully"
  })
})

app.listen(3000,()=>{
  console.log("Listening to port 3000");
})





// A= CLIENT
// B= SERVER
// The flow:

// 1) A -> B: Client sends username and password
// 2) B: Server checks them against DB records and if they match it creates; first, signgture using: 
// base64UrlEncode (header) .base64Url(payload), #secret# and then token using: signature.pay load.secret
// 3) A <- B: Server sends back token to client
// 4) A -> B: Client sends request to access certain URL with token in header
// 5) B: Server decodes header and payload, uses #secret# to create another digital signature and compares it with what was sent in to ensure integrity