const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mansavigarg9919:Mansavi9919@week3-100xdevs.misimqw.mongodb.net/paytm-app");


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const User = mongoose.model("User" , userSchema);

module.exports = {
    User
};  