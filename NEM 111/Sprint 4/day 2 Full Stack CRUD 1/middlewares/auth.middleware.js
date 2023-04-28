const jwt = require("jsonwebtoken")

const auth = (req, res, next)=>{
    const token = req.headers.authorization
    if(token){
        try{
            const decoded = jwt.verify(token.spilt(" ")[1], 'masai');
            if(decoded){
                next()
            }
            else{
                res.send({"msg" : "Please Login !!!"})
            }
        }
        catch(err){
            res.send({"err" : "Please Login !!!"})
        }
    }    

}

module.exports = {auth}