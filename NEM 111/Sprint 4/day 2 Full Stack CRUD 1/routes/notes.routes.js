const express = require("express")
const {NoteModel} = require("../model/Note.model")
const noteRouter = express.Router()

noteRouter.post("/create", async(req,res)=>{
    try{
        const note = new NoteModel(req.body)
        await note.save()
        res.status(200).send({"msg": "New note has been added"})
    }
    catch(err){
        res.status(400).send({"err": err})
    }

})

noteRouter.get("/", async(req,res)=>{
    const query = req.query
    try{
        const note = await NoteModel.find(query)
        res.status(200).send(note)
    }
    catch(err){
        res.status(400).send({"err": err})
    }
})

noteRouter.patch("/update/:noteID", async(req,res)=>{
    const noteID = req.params
    const data = req.body
    try{
        await NoteModel.findByIdAndUpdate({_id: noteID}, data)
        res.status(200).send("User updated")
    }
    catch(err){
        res.status(400).send({"err": err})
    }

})

noteRouter.delete("/delete/:noteID", async(req,res)=>{
    const noteID = req.params
    try{
        await NoteModel.findByIdAndDelete({_id: noteID})
        res.status(200).send("User deleted")
    }
    catch(err){
        res.status(400).send({"err": err})
    }

})

module.exports = {noteRouter}