// const isEven = require("is-even")

// console.log(isEven(10))

const fs = require("fs")

// fs.readFile("./text.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })
// console.log("BYE")

const data = fs.readFileSync("./text.txt", "utf-8")
console.log(data)
console.log("BYE")



// fs.writeFile("./text.txt", "I am writing", (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// fs.appendFile("./text.txt", "\n I am writing also", (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })