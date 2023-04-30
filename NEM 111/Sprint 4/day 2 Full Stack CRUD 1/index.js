const express = require("express")
const connection = require("./db")
const {userRouter} = require("./routes/user.routes")
const jwt = require("jsonwebtoken")


const server = express()


server.use(express.json())

server.use("/users", userRouter)


server.get("/", (req, res)=>{
    res.send("Home Page")
})

server.get("/about", (req, res)=>{
    res.send("About Page")
})

server.get("/contacts", (req, res)=>{
    res.send("Contacts Page")
})


//Protected Routes:

server.get("/movie", (req, res)=>{
    const token = req.headers.authorization

    jwt.verify(token, 'masai', function(err, decoded) {
        if(decoded){
            res.status(200).send("Movie Page")
        }
        else{
            res.status(200).send("Please login first")
        }
      });
  
})

server.get("/series", (req, res)=>{
    const token = req.headers.authorization

    jwt.verify(token, 'masai', function(err, decoded) {
        if(decoded){
            res.status(200).send("Series Page")
        }
        else{
            res.status(200).send("Please login first")
        }
      });
})





//-------------------------------------------------

server.listen(8000, async()=>{
    try{
        await connection
        console.log("Connected to db");
    }
    catch(err){
        console.log(err);
    }
    console.log("Server Running")
})

