const express = require("express")
const {UserModel, connection} = require("./db")

const server = express()

server.use(express.json())

server.get("/", (req, res)=>{
    res.send("Home Page")
})

//create
server.post("/adduser", async(req, res)=>{
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


//Read , filter, sort, pagination
server.get("/users", async(req, res)=>{
    let query = req.query
    const {sort, page, max_age, min_age, name, city} = req.query    
   
    try{
        if(max_age && min_age){ //filtering
            const data = await UserModel.find({ $and : [{"age": {$gte : +min_age} }, {"age": {$lte : +max_age}}]})
            res.send(data)
        }
        else if(max_age){ //filtering
            const data = await UserModel.find({"age": {$lte : +max_age}})
            res.send(data)
        }
        else if(min_age){ //filtering
            const data = await UserModel.find({"age": {$gte : +min_age}})
            res.send(data)
        }
        else if(sort=="asc"){ //sorting
            const data = await UserModel.find().sort({age: 1})
            res.send(data)
        }
        else if(sort=="dsc"){ //sorting
            const data = await UserModel.find().sort({age: -1})
            res.send(data)
        }
        else if(page){ //pagination
            const itemsperpage = 1   //this can be aslo taken as query, but i have not taken as query
            const pagestoskip = +page - 1
            const data = await UserModel.find().skip(pagestoskip).limit(itemsperpage)    //in skip we have to put no of pages to skip, in limit we have to put no. of items in one page
            res.send(data)
        }
        else if(name){ //regex helps in for eg. if in query I only type name=ne, I'll get all items having "ne" in their names,  "$options": "i" makes it case insensitive
            const data = await UserModel.find({ "name":{"$regex": name, "$options": "i"}})
            res.send(data)
        }
        else if(city){
            const data = await UserModel.find({ "city":{"$regex": city, "$options": "i"}})
            res.send(data)
        }
        else{ //filtering if query given like age=40 etc, and getting normal data if no query given
           
            const data = await UserModel.find(query)
            res.send(data)            
        }

    }
    catch(err){
        res.send(err)
    }
})

//if query provided like is_Married:true, I'll get filtereed data
//if query not provided I'll get whole data
//multiple queries can be put in url using "&"

//if query not provided like normal data

//user will provide quer like "sort=asc" or "sort=dsc"

//update
server.patch("/updateuser/:id", async(req,res)=>{
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


server.delete("/deleteuser/:id", async(req,res)=>{
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

//--------------------------------------------------------------------------

server. listen(4500, async()=>{
    try{
        await connection  //connection is written in db.js
        console.log("connected to the db");
    }
    catch(err){
        console.log(err);
        console.log("Something went wrong while connecting to db");
    }
    console.log("Server running at port 4500");
})