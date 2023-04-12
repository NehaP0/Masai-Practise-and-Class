const timeLogger = (req, res, next)=>{   //My middleware
    //logic
    console.log("Hello from middleware");
    let startTime = new Date().getTime()
    next()
    let endTime = new Date().getTime()
    console.log(`${endTime - startTime}ms`); //ms--Milliseconds
}

module.exports = timeLogger