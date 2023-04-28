const mongoose = require("mongoose")


//user's Schema
const userSchema = mongoose.Schema({
    name : {type : String, required: true}, 
    age: {type : Number, required: true},
    is_Married: {type : Boolean, required: true},
    city : {type : String, required: true}
},{
    versionKey : false
})


//User's model
const UserModel = mongoose.model("user", userSchema)


module.exports = {UserModel}