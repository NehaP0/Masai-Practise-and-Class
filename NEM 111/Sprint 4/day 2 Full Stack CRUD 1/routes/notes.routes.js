const express = require("express")
const noteRouter = express.Router()
const NoteModel = require("../model/note.model")

noteRouter.get("/",(req, res)=>{})
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
noteRouter.patch("/update/:noteID",(req, res)=>{})
noteRouter.delete("/delete/:noteID",(req, res)=>{})


module.exports = noteRouter