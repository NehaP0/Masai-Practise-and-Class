import React, { useState, useEffect } from 'react'

const Notes = () => {

    const [notes, useNotes] = useState("")

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

  return (
    <div>Notes</div>
  )
}

export default Notes
