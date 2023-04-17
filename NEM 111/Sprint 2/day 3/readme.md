## Middleware
Middleware has access to req, res, next

Compiler goes to middleware first, then goes to route
i.e. Whenerver I visit any route, first my middleware will get executed
step 1 = request
step 2 = middleware
step 3 = response

Before all the routes, middleware will be executed

Middleware will work for only those routes that are written below it.
Hence write middleware at the top.

## next()
when middleware gets executed, "next()" tells the compiler to go to the next thing that is there in the execution stack.

Takes compiler to the next thing that is to be executed as per your execution stack.

If I dont write next(), compiler will execute middleware but then it will get stuck. It doesn't know where it has to go now.

## Execution   **IMPORTANT**

app.use((req, res)=>{
    console.log(1)
    next()
    console.log(2)
})

app.use((req, res)=>{
    console.log(3)
    next()
    console.log(4)
})

app.get("/", (req,res)=>{
    console.log(5)
    res.send("home")
})

if I visit "/" route
output in console:

1
3
5
4
2


Follow top to bottom, bottom to top approach:

1 |---\
3 |   Top to bottom
5 |---/

4 |---\
        Bottom to top
2 |---/


### Types of middlewares:
 1. Inbuilt middlewares -- eg 
    a. express.json() - it just basically parse the json.
    b. express.text() - If we need to parse a text only, then ⇒ express.text()
    c. express.Router() :-

        ### index.js :-
            const express=require("express")

            const {studentRouter} = require("./routes/student.router")
            const {teacherRouter} = require("./routes/teacher.router")

            const app=express()

            app.use(express.json())
            app.use("/students",studentRouter)
            app.use("/teachers",teacherRouter)

            app.get("/",(req,res)=>{
                res.send("This is the home page")
            })


        ### student.router.js : 
            const express=require("express")

            const studentRouter=express.Router()

            studentRouter.get("/",(req,res)=>{                            this route will mean /students, coz that's how we have declared in index.js
                res.send("All the students")
            })
            studentRouter.post("/addstudent",(req,res)={                  this route will mean /students/addstudent
                console.log(req.body)
                res.send("Added the student")
            })
            module.exports={studentRouter}

        ### teacher.router.js : 
            const express=require("express")

            const teacherRouter=express.Router()

            teacherRouter.get("/",(req,res)=>{                          this route will mean /teachers, coz that's how we have declared in index.js
                res.send("All the teachers")
            })
            teacherRouter.post("/addstudent",(req,res)={                this route will mean /teachers/addstudent
                console.log(req.body)
                res.send("Added the teacher")
                Notes 7
            })
            module.exports={teacherRouter}

        


 2. Custom middleware  -- That developer writes, like we did, logger, timeLogger 
 3. Community midleware -- Created by someone else and you can install and use them

## Community Middlewares
 Cors - Cross Origin Resource Sharing
        Resource Sharing -- 
        Cross Origin -- Things that are not originated from the same place

        Like in our case
            for frontend, react is the origin
            for Backend, express is the origin

        To connect them, they should have resource sharing between them.
        By default, resouce sharing between two things having different origins is prohibited.
        We need to allow it explicitly.

        npm i cors
        const cors = require("cors")
        app.use(cors())

        //go through the documentation


 Multer -  Normally in mongodb we don't have an option to save image.
 Hence we use multer.

 Morgan - You want to ann something to textfile like method, status, time
