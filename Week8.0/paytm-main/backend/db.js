const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mansavigarg9919:Mansavi9919@week3-100xdevs.misimqw.mongodb.net/paytm-app");


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const accountSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance : {
        type: Number,
        required: true
    }
})

const User = mongoose.model("User" , userSchema);
const Account = mongoose.model("Account" , accountSchema)

module.exports = {
    User,
    Account
};  