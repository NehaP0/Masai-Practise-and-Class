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

## Execution   IMPORTANT

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
 1. Inbuilt middlewares -- eg express.json()
 2. Custom middleware  -- That developer writes, like we did, logger, timeLogger 
 3. Community midleware -- Created by someone else and you can install and use them

## Community Middlewares
 Multer -  //go through the documentation
 Cors - Cross Origin Resource Sharing
        Resource Sharing -- 
        Cross Origin -- Things that are not originated from the same place

        Like for frontend, react is the origin
        for Backend, express is the origin

        To connect them, they should have resource sharing between them.
        By default, resouce sharing between two things having different origins is prohibited.
        We need to do it.

        npm i cors
        const cors = require("cors")
        app.use(cors())

        //go through the documentation


