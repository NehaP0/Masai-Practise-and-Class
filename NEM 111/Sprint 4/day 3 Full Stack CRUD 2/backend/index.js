const express = require("express")
const connection = require("./db")
const {userRouter} = require("./routes/user.routes")
const jwt = require("jsonwebtoken")
const {noteRouter} = require("./routes/notes.routes")
const {auth} = require("./middlewares/auth.middleware")
const cors = require("cors")

const server = express()

server.use(cors())
server.use(express.json())


server.use("/users", userRouter)
server.use(auth)
server.use("/notes", noteRouter)





//-------------------------------------------------

server.listen(8080, async()=>{
    try{
        await connection
        console.log("Connected to db");
    }
    catch(err){
        console.log(err);
    }
    console.log("Server Running")
})

