//Responsible to tell the amount of time for a request to get fulfilled
 

const timeLogger = (req, res, next)=>{   //My middleware
    console.log("Hello from middleware");
    let startTime = new Date().getTime()   //user has sent request, so its time =  startTime
    next()                                 //request execution in whatever is the next function
    let endTime = new Date().getTime()      //request execution successful, so its time =  endTime
    console.log(`${endTime - startTime}ms`); //ms--Milliseconds             //Time needed
} 

module.exports = timeLogger