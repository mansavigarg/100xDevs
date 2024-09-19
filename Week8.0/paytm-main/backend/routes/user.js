const express = require("express");
const zod = require("zod")
const { User } = require("../db");
const { JWT_SECRET } = require("../config")
const jwt = require("jsonwebtoken")

const router = express.Router();

// zod valiate function
function validateInput(obj){
    const schema = zod.object({
        username: zod.string().email(),
        password: zod.string().min(6).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
        lastName: zod.string(),
        firstName: zod.string()
    })
    return schema.safeParse(obj)
}

// test get router
router.get("/user" , (req,res) => {
    res.send("Hello from user router.")
})

// router for signup
router.post("/user/signup" , async (req,res) => {
    try{
        const response = req.body;
        const validateResponse = validateInput(response);

        if(!validateResponse.success){
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            })
        }

        const existingUser = await User.findOne({
            username: req.body.username
        })

        if(existingUser){
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            })
        }

        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })

        const userID = user._id

        const token = jwt.sign({
            userID 
        }, JWT_SECRET)

        res.status(200).json({
            message: "User created successfully",
            token: token
        })
    } catch(error) {
        console.error(error);
        res.status(500).json({
          message: "Internal server error"
        });
    }

});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post("/user/signin" , async (req,res) => {


    try{    
        const response = req.body;
        const success = signinBody.safeParse(response);
        if (!success) {
            return res.status(411).json({
                message: "Incorrect inputs"
            })
        }

        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })

        if(!user){
            return res.status(411).json({
                message: "User doesn't exist! Please login"
            })
        }
        
        const token = jwt.sign({
            userID: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
    }
    catch{
        res.status(411).json({
            message: "Error while logging in"
        })
    }
})


module.exports = router ;