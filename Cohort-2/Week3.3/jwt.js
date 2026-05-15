const express = require("express")

const jwt = require("jsonwebtoken")


// decode, verify and generate 

const value = {
    name : "Mansavi",
    accountNumber : 123456789
}

// generating jwt token 
const token = jwt.sign(value, "secret");
console.log(token)

// this token has been generated using this "secret", and hence this token can only be verifid using this secret

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFuc2F2aSIsImFjY291bnROdW1iZXIiOjEyMzQ1Njc4OSwiaWF0IjoxNzE1MzE5MTgzfQ.PFsFxmmcOP_buNFUNwWGZ4761JUHEGTH5XhBx1fzAx0

// use jwt.io to check it or decode it




// verifing token
const verifyToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFuc2F2aSIsImFjY291bnROdW1iZXIiOjEyMzQ1Njc4OSwiaWF0IjoxNzE1MzE5MTgzfQ.PFsFxmmcOP_buNFUNwWGZ4761JUHEGTH5XhBx1fzAx0", "secret");
console.log(verifyToken)