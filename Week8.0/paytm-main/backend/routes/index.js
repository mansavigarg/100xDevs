const express = require("express");
const userRouter = require("./user")

const router = express.Router();

router.use("/api/v1" , userRouter )

module.exports = router ;