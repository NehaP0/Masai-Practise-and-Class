import React, { useState } from 'react'

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [age, setage] = useState("")

    const HandleSubmit = ()=>{
        const data = {name, email, password, age}

        //console.log(data);  //{name: 'djnf', email: 'jdfnk', password: 'djf', age: 'kjsnd'}
        
        fetch("http://localhost:8000/users/register", {
          method : "POST",
          headers : {
            "Content-type" : "application/json"
          },
          body: JSON.stringify(data) //its in object form, we need to send in json form, hence stringify
        })
        .then(res=>res.json())
        .then(res=>console.log(res)) //{msg: 'New user registered'}
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