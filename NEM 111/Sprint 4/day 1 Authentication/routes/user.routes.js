const express = require("express")
const {UserModel} = require("../model/user.model")
const jwt = require("jsonwebtoken")

const userRouter = express.Router()

userRouter.post("/register", async(req, res)=>{  //remeber its a "post" request
    const userdetails = req.body
    try{
        const user = new UserModel(userdetails) //while testing I cannot put my data in database directly hence I am creating a new instance of userModel
        await user.save()
        res.status(200).send({"msg" : "New user registered"})//standard way of sending response
    }
    catch(err){
        res.status(400).send({"err" : err.message})
    }
    
})

userRouter.post("/login", async(req, res)=>{ //remeber its a "post" request not "get" request
    const{email, password} = req.body

    try{
        //const user = await UserModel.find({email: email, password: password})
        const user = await UserModel.findOne({email, password}) //es6 of above
        //console.log(user); //if found, I'll get that user's object, if not found, I'll get null
        if(user){
            const token = jwt.sign({ course: 'backend' }, 'masai');
            res.status(200).send({"msg": "Login Successful", "token" : token})
        }
        else{
            res.status(200).send({"msg": "Invalid Credentials"}) //200, not 400 coz request is successful
        }
        //res.send("....work in progress")
    }
    catch(err){
        res.status(400).send({"err" : err.message})
    }
})


module.exports = {userRouter}