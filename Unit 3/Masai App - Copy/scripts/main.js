// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

let receipeUrl= `${baseServerURL}/employees`


let employeebtn = document.getElementById("fetch-employees")

//fetching employees

employeebtn.addEventListener("click", ()=>{
  console.log("I am working")
  fetch(receipeUrl)
  .then((res)=>{console.log(res.json())
    return res.json()    
  })
  .then((data){
    console.log(data)  
  })
})