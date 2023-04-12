let express = require("express")
const fs = require("fs")
const timeLogger = require("./timeLogger")
const logger = require("./logger")
const cors = require("cors")
let app = express()

app.use(logger)
app.use(timeLogger)
app.use(cors())

app.use((req,res)=>{
    console.log(1);
    next()
    console.log();
})


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
    
    let data = fs.readFileSync("./db.json", "utf-8")    
    res.end(data)
})


app.listen(3000, ()=>{
    console.log("Srevre Running")
})