const express = require("express")
const noteRouter = express.Router()
const NoteModel = require("../model/note.model")

noteRouter.get("/", async(req, res)=>{
    try{
        const note = await NoteModel.find()
        res.status(200).send(note)
    }
    catch(err){
        res.status(400).send({"msg" : err.message})
    }
})

//----------------------------------------------------

noteRouter.post("/create", async(req, res)=>{
    const data = req.body
    try{
        const note = new NoteModel(data)
        await note.save()
        res.status(200).send({"msg" : "New Note created"})
    }
    catch(err){
        res.status(400).send({"msg" : err.message})
    }
})

//----------------------------------------------------


noteRouter.patch("/update/:noteID",async(req, res)=>{
    const {noteID} = req.params
    const updationdata = req.body
    try{
        const note = await NoteModel.findByIdAndUpdate({_id : noteID}, updationdata)
        res.status(200).send(note)
    } 
    catch(err){
        res.status(400).send({"msg" : err.message})
    }
})

//----------------------------------------------------

noteRouter.delete("/delete/:noteID",async(req, res)=>{
    const {noteID} = req.params
    try{
        const note = await NoteModel.findByIdAndDelete({_id : noteID}, updationdata)
        res.status(200).send(note)
    } 
    catch(err){
        res.status(400).send({"msg" : err.message})
    }
})


module.exports = noteRouter