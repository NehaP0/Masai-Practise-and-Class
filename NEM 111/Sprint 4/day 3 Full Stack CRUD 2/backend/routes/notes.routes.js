const express = require("express")
const {NoteModel} = require("../model/Note.model")
const noteRouter = express.Router()
noteRouter.use(express.json())

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
    try{
        const notes = await NoteModel.find({authorID : req.body.authorID})
        res.status(200).send(notes)
    }
    catch(err){
        res.status(400).send({"err": err})
    }
})

noteRouter.patch("/update/:noteID", async(req,res)=>{
    const {noteID} = req.params
    const note = await NoteModel.findOne({_id: noteID})
    try{
        if(req.body.authorID !== note.authorID){
            res.status(200).send("You are not authorized to do this")
        }
        else{
            await NoteModel.findByIdAndUpdate({_id: noteID}, data)
            res.status(200).send("Note updated")
        }
        
    }
    catch(err){
        res.status(400).send({"err": err})
    }

})

noteRouter.delete("/delete/:noteID", async(req,res)=>{
    const {noteID} = req.params
    const note = await NoteModel.findOne({_id: noteID})

    try{
        if(req.body.authorID !== note.authorID){
            res.status(200).send("You are not authorized to do this")
        }
        else{
            await NoteModel.findByIdAndDelete({_id: noteID})
            res.status(200).send("Note deleted")
        }
        
    }
    catch(err){
        res.status(400).send({"err": err})
    }

})

module.exports = {noteRouter}