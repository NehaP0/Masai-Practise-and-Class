const express = require("express")
const {UserModel} = require("../models/User.model")

const userRouter = express.Router()


//create
userRouter.post("/add", async(req, res)=>{
    const data = req.body
    try{
        const user = UserModel(data)
        await user.save()               //addition of data shoul be done in async function 
        res.send("Added the new data")
    }
    catch(err){
        res.send(err)
    }
   
})


//Read , filter
userRouter.get("/", async(req,res)=>{
    const query = req.query           //for filtering
    try{
        const users = await UserModel.find(query)
        res.send(users)
    }
    catch(err){
        res.send(err)
    }
    
})

//if query provided like is_Married:true, I'll get filtereed data
//if query not provided I'll get whole data
//multiple queries can be put in url using "&"

//sorting
// userRouter.get("/users", async(req,res)=>{
//     const {sort} = req.query
//     try{
//         if(sort=="asc"){
//             users = await UserModel.find().sort({age: 1})
//         }
//         else if(sort=="dsc"){
//             users = await UserModel.find().sort({age: -1})
//         }
//         else{
//             users = await UserModel.find()
//         }
//     }
//     catch(err){
//         res.send(err)
//     }    
// })
//if query not provided like normal data

//user will provide quer like "sort=asc" or "sort=dsc"

//update
userRouter.patch("/update/:id", async(req,res)=>{
    const {id} = req.params
    const updationData = req.body

    try{
        //await UserModel.findByIdAndUpdate("filterBy", "updation stuf")
        await UserModel.findByIdAndUpdate({_id : id}, updationData)
        //why _id and not id. Coz see in mongoose, ids are saved as _id
        res.send("User Updated")
    }
    catch(err){
        res.send(err)
    }

})


userRouter.delete("/delete/:id", async(req,res)=>{
    const {id} = req.params
    try{
        await UserModel.findByIdAndDelete({_id : id})
        res.send("User Deleted")
    }
    catch(err){
        res.send(err)
    }
})

//Difference between delete and remove 
//mongoosejs.com

module.exports = {userRouter}