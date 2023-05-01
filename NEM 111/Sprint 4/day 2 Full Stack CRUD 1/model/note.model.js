const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    title : {type: String, required: true},
    body : {type: String, required: true},
    author : {type: String, required: true},
    category : {type: String, required: true},
},{
    versionKey: false
})

const NoteModel = mongoose.model("note", noteSchema)

module.exports = NoteModel



// {
//     "title" : "Study Node",
//     "body" : "Node Study",
//     "author" : "Neha",
//     "category" : "Study"
// }