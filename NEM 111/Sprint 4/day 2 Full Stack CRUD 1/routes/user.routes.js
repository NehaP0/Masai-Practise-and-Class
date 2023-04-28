const express = require("express")
const {UserModel} = require("../model/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userRouter = express.Router()
userRouter.use(express.json())

userRouter.get("/", async(req, res)=>{  
    try{
        const user = await UserModel()       
        res.status(200).send( user)
    }
    catch(err){
        res.status(400).send({"err" : err.message})
    }    
})

userRouter.post("/register", async(req, res)=>{  //remeber its a "post" request
    const {email, password, name, age} = req.body
    try{
        bcrypt.hash(password, 5, async(err, hash)=> {
            //hash == hashed password
            const user = new UserModel({email, password:hash, name, age}) //while testing I cannot put my data in database directly hence I am creating a new instance of userModel
            await user.save()
            res.status(200).send({"msg" : "New user registered"})//standard way of sending response
        });
        
    }
    catch(err){
        res.status(400).send({"err" : err.message})
    }
    
})

userRouter.post("/login", async(req, res)=>{ 
    const{email, password} = req.body    

    try{
        const user = await UserModel.findOne({email}) 
        

        if(user){
            bcrypt.compareSync(password, user.password, (err, result)=>{
                if(result){
                    const token = jwt.sign({ course: 'backend' }, 'masai');
                    res.status(200).send({"msg": "Login Successful", "token" : token})
                }
                else{
                    res.status(200).send({"msg": "Invalid Credentials"})
                }
            });
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