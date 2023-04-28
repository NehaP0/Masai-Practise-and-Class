const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/expressDB")
//mongoose.connect "c" small


const userSchema = mongoose.Schema({
    name : {type : String, required: true}, 
    age: {type : Number, required: true},
    is_Married: {type : Boolean, required: true},
    city : {type : String, required: true}
},{
    versionKey : false
})
//mongoose.Schema "S" capital

const UserModel = mongoose.model("user", userSchema)
//mongoose.model "m" small


module.exports = {connection, UserModel}


//database --- expressDB
//collection --- UserModel
//document --- user