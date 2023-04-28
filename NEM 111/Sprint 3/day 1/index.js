const mongoose = require("mongoose")


const main = async ()=>{
    //logic to connect the DB
    try{
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/learningMongoose") //mongodb url, database name
        console.log("Connected to the DB");
        const user = new UserModel({
            name : "Albert",
            age : 23, 
            city: "Delhi"
        })
        await user.save()
        await UserModel.insertMany([{name : "Aman", age:34, city: "Mumbai"}, {name: "Nrupul", age: 50, city:"Bnaglore"} ])
        console.log("Inserted the data");

        connection.disconnect()
        console.log("Disconnected");
    }
    catch(err){
        console.log("Cannot connect to DB");
        console.log(err)
    }
}

main()

//Schema
const userSchema = mongoose.Schema({
    name : {type: String, required:true} ,
    age : Number,
    city : String
},{
    versionKey: false
})

//Model
const UserModel = mongoose.model("user", userSchema) 



// Database - learningMongoose  we declare it in url i.e line num 7
// Collection - user            we declare it in model i.e line num 39