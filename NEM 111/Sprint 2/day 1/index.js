const express = require("express")
const app = express()

const fs = require("fs")

app.use(express.json())

app.get("/", (req,res)=>{ 

    res.setHeader("content-type", "text/html")
    res.write(`<h1>Home Page</h1>`)
    res.end()
})

app.get("/students", (req,res)=>{
    // const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    // console.log(data)
    // res.end(data.students) 

    const studentStream = fs.createReadStream("./logs.txt", "utf-8")
    studentStream.pipe(res)
    //use autocannon to check
})

app.post("/adddata", (req, res)=>{
    //In postman, select method "POST"
    //url = http://localhost:3000/adddata
    //Select -> Body, raw, JSON
    //write data in json format, like {"name":"yeah"}
    //Send
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    data.students.push(req.body)
    console.log(data)
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.end("data is added")
})

                                        
app.patch("/updatestudent", (req,res)=>{//we also need id which we will learn later
    //In postman, select method "PATCH"
    //url = http://localhost:3000/updatestudent
    //Select -> Body, raw, JSON
    //write data in json format, like { "city" : "pune"}
    //Send
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    for(let i=0; i<data.students.length; i++){//can use for-each also
        if(data.students[i].name=="Rahul"){
            data.students[i].city = req.body.city
        }
    }
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.end("data is updated")
})

                            
app.delete("/deletestudent", (req, res)=>{//we also need id which we will learn later
    //In postman, select method "DELETE"
    //url = http://localhost:3000/deletestudent
    //Select -> none
    //Send
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))

    let newStuArray = data.students.filter((item)=>{
        return item.name!=="Rahul"
    })

    data.students = newStuArray

    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.end("data is deleted")
})


app.listen(3000,()=>{
    console.log("server running at port 3000")
})