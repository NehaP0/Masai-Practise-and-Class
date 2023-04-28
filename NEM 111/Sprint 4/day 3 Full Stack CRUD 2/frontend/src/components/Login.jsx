import React, { useState } from 'react'

const Login = () => {

  
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const HandleSubmit = ()=>{
        const payload = {
          email, password
        }
        
        fetch("http://localhost:8080/users/login", {
          method : "POST",
          headers : {
            "Content-type" : "application/json"
          },
          body: JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            localStorage.setItem("token" , res.token)
    })
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type="text" placeholder='Enter password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={HandleSubmit}>Signup</button>
    </div>
  )
}

export default Login