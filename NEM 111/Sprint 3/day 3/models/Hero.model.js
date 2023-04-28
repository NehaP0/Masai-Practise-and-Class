const mongoose = require("mongoose")

//heroes's Schema
const heroSchema = mongoose.Schema({
    name : {type : String, required: true}, 
    age: {type : Number, required: true}
},{
    versionKey : false
})


//User's model
const heroesModel = mongoose.model("hero", heroSchema)

module.exports = {heroesModel}