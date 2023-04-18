I don't want the connection to hyappen automatically, it should happen when I want
Only when I call the main, the connection will happen

URL of mongo: in shell, do mongosh
you'll get 
Connecting to:          mongodb:127.0.0.1:27017/?directConnection=true&serverSelection
                                localhost | Port num           

if I put wrong link,
I'll get connected to db and
 I'll get error after some time
Why?
Because it is asynchronous in nature

But if link is wrong, it should not say "Connected to db"
so to solve this I use try catch. 
So now if I put wrong link, it will say "cannot connect to db "
and will give me error msg


server should always be connected to database
But if I want to disconnect at any time, I can simply do
 connection.disconnect()
 console.log("Disconnected");


-------------------------------------------------------------------------------------------------------

schema ===> model ===> document
  |           |          |
structure  our icetray  our ice

Schema
const userSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String
},{
    versionKey: false
})

Model
const UserModel = mongoose.model("user", userSchema) 
takes collection name and schema name
user is the collection name in which I will put my document
userSchema is the schema with help of which I am creating the model

Now give database name in line number 7
if I run the file, and in shell I do show dbs, I'll not see my data base
coz I haven;t yet put any document in collection
so write line number 15
Always use the word await at line no 15

in shell now you can check
you'll see that the collection name has become "users" and not "user"
Mongodb will automatically do it, coz collection has various documents
Youl'll also see "__v: 0" --- this is the version key
Version key is created by mongoose
It will keep the track of inter nal revision of document
i.e how many times I have changed or updated the document
When I update the document later, the "__v" will increment by 1 
If I don;t want it, so in schema I write {versionKey: false}

In line no. 15, I am not able to do insertOne
Because mongoose have a different method to insertOne document

Observe that "UserModel" has capital "U"
We know taht such naming convention is followed for Contructor functions
So my UserModel is actually a constructor function.
Hence if I wanty to insert one docuemnt, I'll make use of my UserModel constructor using new keyword as in line num 9
and then do await user.save()


## INTERVIEW QUEST:

How am I able to userModel in line number 15, as I have declared it at line num 36?
Ans- I have accessed useModel inside Main function. 
My main function is asynchronous in nature
So before line number 15, Line num 36 will be executed.


--------------------------------------------------
## Validation: 

    ## require

I have written
    name : {type: String, require:true} 

So during adding data, if I miss adding the name, it will not get added .

Even name : ""

also will not work, because empty string is a falsy value.

----------------------------------------------------

Every kind of important logic like validation etc should not be written in the frontend, it should be written in the backend, so that even if some one takes your code from the internet, he does not has access to the logic that you have implemented. Frontend should only contain the UI part.

-----------------------------------------------
## Typecasting

Typecasting: If string can be converted to a number, it will get converted to a number, and will get added to the db.
Similarly if number can be converted to string, it will get converted to string.


1. I have put age data type to be number
    But if I do age: "35"
    In my db, I'll see age : 35
    why because mongoose does typecasting
    So it has typecasted string to number

2. I have put name data type to be string
    But if I do name: 35
    In my db, I'll see name : "35"
    why because mongoose does typecasting
    So it has typecasted number to string


3. I have put age data type to be number
    But if I do age:"thirty five"
    It will not be added, because this string cannot get converted to number


4. I have put age data type to be number
    But if I do age : true
    In my db, I'll see age : 1

    Beacuse if mongoose wants to convert boolean values to numbers, then true is taken as 1 by mangoose and false is taken as 0

5. I have put age data type to be number
    But if I do age : "true"
    It will not be added, because this not a boolean anymore, it is string and mongoose is not able to convert this string to a number





   