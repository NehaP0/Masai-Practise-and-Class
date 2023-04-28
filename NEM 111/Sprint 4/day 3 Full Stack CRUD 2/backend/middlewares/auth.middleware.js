const jwt = require("jsonwebtoken")

const auth = (req, res, next)=>{
    const token = req.headers.authorization
    if(token){
        try{
            const decoded = jwt.verify(token.spilt(" ")[1], 'masai');
            if(decoded){
                console.log(decoded); //{authorID: bla, author:bla, iat: 1682609879}// i.e I got the payload over here that I passed while creating token
                req.body.authorID = decoded.authorID
                req.body.author = decoded.author
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