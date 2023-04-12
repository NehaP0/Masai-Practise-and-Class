const http = require("http")  //1.
const fs = require("fs")

const server = http.createServer((req, res)=>{//here I just write logic
    //logic for API endpoints

    if(req.url=="/"){//request
        res.setHeader("Content-type", "text/html")//extra info, its text/html type
        res.end("<h1>This is the home Page</h1>")//response
    }
    else if(req.url=="/about"){
        res.write("This is the about Page")
        res.end()
    }
    else if(req.url=="/contacts"){
        res.end("Contact Me!!!")
    }
    // else if(req.url=="/data"){
    //     fs.readFile("./data.json", "utf-8", (err, data)=>{
    //         if(err){
    //             res.end(err)
    //         }
    //         else{
    //             res.end(data)
    //         }
    //     })
    // }

    else if(req.url=="/data"){
        try{
            const data = fs.readFileSync("./data.json", "utf-8")
            res.end(data)
        }
        catch(err){
            res.end(err)
        }
    }

    else if(req.url=="/writedata"){
        try{
            fs.writeFileSync("./text.txt", "This is me")
            res.end("Data added")
        }
        catch(err){
            res.end(err)
        }
    }
})
//Why res.end and not res.send?
//Telling my clinet that once the response has ended, display this
//For my client know, that response has ended and I can display it

//Instead of res.end, I can also write res.write
//But then you'll see that output is same but it is still loading
//Coz client doesn't know that response has ended
//So I'll also need to write res.end()

//Where to use write, instead of end?
//when I want to write multiple things.
//like 
//res.write("this")
//res.write("that")
//res.end()

//I need to run server to use it
//so to run server, I need to listen
//listen the logic 
//I am runnign my server on port 8080
//callback is not required, but for my information that server is running, I can put callback.
server.listen(8080, ()=>{
    console.log("Server is running at port 8080")
})


//Nodemon
//Nodemonitor
//Constantly see if there is any change in server logic
//If change found, it will automatically stop and restart the server for you//
//npm i nodemon
//package.json  
    //"server": "nodemon index.js"


//BenchMarking :
//Testing the limits
//Beyond this limit, the device will break

//How many requests my servre can handle at a time

//AutoCannon
//Using without installing
//npx  --node package execute
//npm--node package manager
//in gitbash
//npx autocannon link of server

//some req/sec

//if i do /read
//it will reduce req/sec, coz it takes time
