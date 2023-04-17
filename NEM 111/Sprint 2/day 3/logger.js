const fs = require("fs")

//Responsible to keep logs of all the routes that user visits, their method and the time and add this info to logs.txt file

const logger = (req, res, next)=>{
    fs.appendFileSync("./logs.txt", `Route: ${req.url}, Method: ${req.method} Time: ${Date()} \n`)
    next()
}

module.exports = logger