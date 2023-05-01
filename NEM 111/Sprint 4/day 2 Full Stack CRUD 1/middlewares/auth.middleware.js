const jwt = require("jsonwebtoken")

const auth = (req, res, next) =>{
    const token = req.headers.authorization
    if(token){
        try{
            const decoded = jwt.verify(token.split(" ")[1], 'masai') //got rid of the callback and stored it here
            if(decoded){
                next()
            }
            else{//If token is incorrect
                res.send({"msg" : "Please Login!!!"})
            }
        }
        catch(err){ //if there was some problem in getting the token
            res.send({"err" : err.message})
        }

    }
    else{ //if I don't have the token at all
        res.send({"msg" : "Please Login!!!"})
    }
    
}

module.exports = auth