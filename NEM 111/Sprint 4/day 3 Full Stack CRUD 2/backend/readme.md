
### Today's Agenda
Relationship implementation
Frontend (using React)
How to connect Frontend and Backend

### Tomorrow's Agenda
Deploy everything
API Documentation (Swagger)

### ----------------------------------------------------

Whenever you make api and a request, test it first, then code the next part.

if there are 2 users. Pulkit and aman.
Aman should not be able to read, delete or update the notes created by Pulkit and vice versa.

So i have to create a relation between users and notes collection. So than I can verify before any user reads/updates/deletes that is it the same user who created the note. 

User is independent collection and notes is dependent collection .
so put userid in notes schema as well.

But before creating note, if I try to put userID manually, it will be very hectic, coz I want to search the userID first.

Hence we will automate it.

We know that token can also be used to transfer data.

What is connecting users and  notes is my auth middleware.
And I also know auth middleware is using jwt as well.

In jwt, Payload can be used to transfer data.

So transfer author id as payload while generating token.

In middleware, get access of author id from decoded, and pass this author id in req.body of notes.
So now I don't need to pass it manually everytime.


While getting notes, get only those notes


