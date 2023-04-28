As long as my server is running, it should be connected to the db.
and server.listen is the function which is running my server.

So I should put my connection logic inside server.listen function
For connection logic, I'll make the callback function of server.listen as async.
Coz connection function should always be async.


separated my Database logic and server logic.
So database logic is inside db.js and server logic is inside index.js
And I called it in index.js and used it inside server.listen

Schema and model is not required to connect to db

always put collection name singular. i.e "user" not "users", coz mongoose is going to add the "s" for us. So if we do "users", I will get "userss" in mongoose.

I'll need usermodel in server, hence we export it from db.js and import it in index.js.

Why we are using UserModel?
Coz that is our collection. And to post or do some changes to our db data, I need collection.
Like how in mongoose we do collectionName.find()
so here or collection is UserModel

