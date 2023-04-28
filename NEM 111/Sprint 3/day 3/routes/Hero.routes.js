const express = require("express")
const {heroesModel} = require("../models/Hero.model")

const heroRouter = express.Router()


heroRouter.post("/", async(req, res)=>{
    const data = req.body
    try{
        const hero = heroesModel(data)
        await hero.save()               //addition of data shoul be done in async function 
        res.send("Added the new hero")
    }
    catch(err){
        res.send(err)
    }
   
})


module.exports = {heroRouter}