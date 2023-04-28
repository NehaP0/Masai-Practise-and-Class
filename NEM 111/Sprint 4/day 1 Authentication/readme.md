### findOne v/s find

const user = await UserModel.findOne({email, password})
if user found, you'll get an object,
if user NOT found, you'll get "null"

BUT
const user = await UserModel.find({email, password})
if user found, you'll get an array,
if user NOT found, you'll get "undefined"


### A movie app has these pages

homepage -- I can acess even without loging in
/about   -- I can acess even without loging in
/contacts-- I can acess even without loging in
/movie   -- I canNOT acess if not logged in i.e if not authenticated -- Protected Route
/tvseries -- I canNOT acess if not logged in i.e if not authenticated ---- Protected Route
/registration-- I can acess even without loging in
/login    -- I can acess even without loging in


### Token :
Unique identification assigned to a client to check whether he/she is authorised to visit a particular route.

So if successfully logged in i.e sucessfully authenticated only then  I will provide him the token




### JWT:
JSON Web Token
used to aunthenticate, authorise, transfer data.

refer jwt.io 
also refer npm jwt webpage

used in real world as well.
Token will be new everytime I login.


//Watch this part again
Header: algorithm, type
        Algorithm: responsible for encrypting the token.
                    Encryption : converting token into a non understandable code.

                    by default : HS256 
        type : type of 

Payload : help us further generate encoded token

    Security key to decode the token


Process:
npm i jsonwebtoken
const jwt = require("jsonwebtoken")

While login: (generating token)
Refer npm jwt webpage for these codes
const token = jwt.sign({ course: 'backend' }, 'masai');
                                |               |
                        (Random payload)      (Secret Key)

res.status(200).send({"msg": "Login Successful", "token" : token})


While giving access to protected pages:

const jwt = require("jsonwebtoken")
const {token} = req.query
                    (secret key that we passed while generating)
                     |
jwt.verify(token, 'masai', function(err, decoded) {
    if(decoded){
        res.status(200).send("Movie Page")
    }
    else{
        res.status(200).send("Please login first")
    }
    });


i.e to make token--->jwt.sign
    to verify token-->jwt.verify


