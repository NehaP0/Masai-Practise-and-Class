import React, { useState } from 'react'

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [age, setage] = useState("")

    const HandleSubmit = ()=>{
        const payload = {
          name, email, password, age
        }
        
        fetch("http://localhost:8080/users/register", {
          method : "POST",
          headers : {
            "Content-type" : "application/json"
          },
          body: JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <input type="text" placeholder='Enter Nmae' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type="text" placeholder='Enter password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <input type="text" placeholder='Enter age' value={age} onChange={(e)=>setage(e.target.value)}/>
        <button onClick={HandleSubmit}>Signup</button>
    </div>
  )
}

export default Signup