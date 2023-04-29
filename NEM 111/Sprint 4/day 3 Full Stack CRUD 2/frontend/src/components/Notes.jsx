import React, { useState, useEffect } from 'react'

const Notes = () => {

    //const [notes, setNotes] = useState("")

    const [title, settitle] = useState("")
    const [body , setbody] = useState("")
    const [category , setcategory] = useState("")


    useEffect(()=>{
        fetch("http://localhost:8080/notes", {
            headers : {
                "Authorizartion" : `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res)=>res.json())
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))        
    })


const HandleCreate = ()=>{
  const data = {title, body, category}
   
  fetch("http://localhost:8080/notes/create", {
          method : "POST",
          headers : {
            "Content-type" : "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>{console.log(res)})      
        .catch(err=>console.log(err))   
}

const HandleDelete = ()=>{
  
}

  return (
    <div>
      <input type="text" placeholder='Title' onChange={(e)=>settitle(e.target.value)}/>
      <input type="text" placeholder='Body' onChange={(e)=>setbody(e.target.value)}/>
      <input type="text" placeholder='Category' onChange={(e)=>setcategory(e.target.value)}/>
      <button type="submit" onClick={HandleCreate}>Create Note</button>
      <button type="submit" onClick={HandleDelete}>Delete Note</button>
    </div>
  )
}

export default Notes
