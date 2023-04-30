### Today's Agenda
Yesterday's Revision
Better way of passing token
Hashing  --npm package
Plan backend application --Notes taking app
Make express appluication (with basic routes)

### Tomorrow's Agenda
Relationship implementation
Frontend (using React)
How to connect Frontend and Backend

### Day after Tomorrow's agenda
Deploy everything
API Documentation (Swagger)

### ----------------------------------------------------

### Yesterday's revision
Authentication: verifying identity
Authorization: Access permission
Register route - posted data in db
login route - comparing email and password with one in db and authetication
For authentication and authorisation I need token.
Token should be always unique and random hence I used JWT.
JWT- JSON Web Token
Can be used for Authentication, Authorisation and Transfering data
3 importatnt components of JWT: 
    1. Header - it has-> Encryption algorithm, type of token
    2. Payload - Any random data which will help us in creation of token
    3. Verifying signature - Secret key by the help of which I can decode token

While visiting private routes, I can use this decoded token


### To see my database and all in GUI, I am using mongodb compass app that I have installed. Just click connect and you will see all your databases.

So whenever you do some changes to your database, just do a refresh in compass and the changes will reflect over there as well.



### Better way of passing token and accessing token
In fronyent, we used to pass token like this
fetch(backend url,{
    method : "POST",
    headers : {
        authorization : `Bearer ${token}`
    }
})

In backend I should access token like: 
Accessing token:
    const token = req.headers.authorization



### Hashing 

    Converting one string into another unreadable string.
    abc ---------->  hgsdufygwsy

    (Check diff between hashing and encryption)

    for hashing:  Refer npm doc of bcrypt
    npm i bcrypt

    Where to write code for it?
    I want to hash my passord before storing it inside the db
    i.e during registration.

    bcrypt is designed to slow dow n the process.
    If someone tries to hack so he'll have a hard time coz bcrypt is designed to slow down the process
    saltRounds: Number of times passsword hasa to be hashed.
    abc ---------->  hgsdufygwsy -------> hsdgfuhysdfgs ----> ghdsfuhasduh
                    saltRound 1           saltRound 2         saltRound 3

    The more the saltrounds, the more slower it is so 5 is more than enough


### Notes taking app


    User routes:
            /users/register  ==> To register a new user
            /users/login     ===> For Authenticating the registered user

For below routes to work, the user needs to be authenticated (that user should have a token)
    Notes Routes
            /notes/create ==> Creating a new note about a concepy you have learnt

            (Need to check who is making changes or getting notes)
            user is an independent collection and notes is a dependent collection
            i.e one to many relationship
            /notes  ===> To get all created notes
            /notes/update/:noteID : To update any note
            /notes/delete/:noteID : To delete a note


Write remsining logics