let express = require("express")
const fs = require("fs")
const timeLogger = require("./timeLogger")
const logger = require("./logger")
const cors = require("cors")
let app = express()

app.use(logger)         //middleware
app.use(timeLogger)     //middleware
app.use(cors())         //middleware

// app.use((req,res)=>{    //middleware
//     console.log(1);
//     next()
//     console.log("hey");
// })


app.get("/", (req, res)=>{
    console.log("Home Page");
    res.end("Home Page")
})
app.get("/about", (req, res)=>{
    console.log("About Page");
    res.end("About Page")
})
app.get("/contact", (req, res)=>{
    console.log("Contact Page");
    res.end("Contact Page")
})
app.get("/data", (req, res)=>{

    let data = {
        pune : "32C",
        mumbai : "42C"
    }

    const {city} = req.query 
    const temp = data.city   
    
    res.end(temp)
})


app.listen(3000, ()=>{
    console.log("Srevre Running")
})