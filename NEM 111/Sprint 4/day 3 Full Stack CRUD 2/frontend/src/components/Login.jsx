import React, { useState } from 'react'

const Login = () => {

  
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const HandleSubmit = ()=>{
        const data = {email, password }
        
        fetch("http://localhost:8000/users/login", {
          method : "POST",
          headers : {
            "Content-type" : "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res) //{msg: 'Login Successful', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JJR…DQwfQ.SG4mGylaDbrxBgMvLHGnfGaBA5V46S2Y02RgJTA3Dwc'}
            localStorage.setItem("token" , res.token) //if I want to use this token I need to save it into local storage.
    })
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type="text" placeholder='Enter password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={HandleSubmit}>Login</button>
    </div>
  )
}

export default Login