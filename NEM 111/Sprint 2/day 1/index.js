const express = require("express")
const app = express()

const fs = require("fs")

app.use(express.json())

app.get("/students", (req,res)=>{
    // const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    // console.log(data)
    // res.end(data.students) 

    const studentStream = fs.createReadStream("./logs.txt", "utf-8")
    studentStream.pipe(res)
    //use autocannon to check

})
app.post("/adddata", (req, res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    data.students(req.body)
    console.log(data)
    fs.writeFile("./db.json", JSON.stringify(data))
    res.end("data is added")
})

app.patch("/updatestudent", (req,res)=>{//we also need id which we will learn later
    
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    for(let i=0; i<data.students.length; i++){//can use for each also
        if(data.students[i].name=="Rahul"){
            data.students[i].city = req.body.city
        }
    }
    fs.writeFile("./db.json", JSON.stringify(data))
    res.end("data is updated")
})

app.delete("/deletestudent", (req, res)=>{//we also need id which we will learn later

    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))

    let newstuarray = data.students.filter((item)=>{
        return item.name!=="Rahul"
    })

    data.students = newstuarray

    fs.writeFile("./db.json", JSON.stringify(data))
    res.end("data is deleted")
})

// app.post("/adddata", (req, res)=>{
//     console.log(req.body);
//     res.send("data added")
// })

app.listen(8000)