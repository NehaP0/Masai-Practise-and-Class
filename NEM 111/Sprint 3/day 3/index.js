const express = require("express")
const {connection} = require("./configs/db")

const {userRouter} = require("./routes/User.routes")
const {heroRouter} = require("./routes/Hero.routes")

const server = express()

server.use(express.json())

server.use("/users", userRouter)
server.use("/heroes", heroRouter)


server.get("/", (req, res)=>{
    res.send("Home Page")
})

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