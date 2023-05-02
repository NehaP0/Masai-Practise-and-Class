import React, { useState, useEffect } from 'react'

const Notes = () => {

    const [notes, setNotes] = useState("")

    const [title, settitle] = useState("")
    const [body , setbody] = useState("")
    const [category , setcategory] = useState("")
    const [author , setauthor] = useState("")
    const [noteID, setnoteID] = useState("")


    useEffect(()=>{
        fetch("http://localhost:8000/notes", {
            headers : { //getting the token from localstorage
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res)=>res.json())
        .then((res)=>{console.log(res)
            setNotes(res)
        })
        .catch((err)=>console.log(err))        
    },[])


// const HandleCreate = ()=>{
//   const data = {title, body, category}
   
//   fetch("http://localhost:8080/notes/create", {
//           method : "POST",
//           headers : {
//             "Content-type" : "application/json"
//           },
//           body: JSON.stringify(data)
//         })
//         .then(res=>res.json())
//         .then(res=>{console.log(res)})      
//         .catch(err=>console.log(err))   
// }

const HandlePatch = ()=>{
    // const data = {title, body, category, author}
    

    // fetch("http://localhost:8000/notes/update/notes",{
    //     method : "PATCH",
    //     headers : {
    //         "Authorization" : `Bearer ${localStorage.getItem("token")}`,
    //         "Content-type" : "application/json"
    //     },
    //     body : JSON.stringify(data)
    // })
    // .then(res=>res.json())
    // .then(res=>{console.log(res)})      
    // .catch(err=>console.log(err)) 
}



return (
    <>
    <h2>Notes</h2>
    {notes.length===0? <h3>This user has no notes</h3> :  
    
        notes.map((item) => {
            return<>
            <input value={item.title} placeholder='Title' onChange={(e)=>settitle(e.target.value)} />
            <input value={item.body} placeholder='body' onChange={(e)=>setbody(e.target.value)} />
            <input value={item.author} placeholder='author' onChange={(e)=>setauthor(e.target.value)}/>
            <input value={item.category} placeholder='category' onChange={(e)=>setcategory(e.target.value)}/>    
            <button onClick={HandlePatch}>Update</button>
            <button>Delete</button>
            </>
            
        })
    }
     
    
   
    </>
    
)
}

export default Notes
