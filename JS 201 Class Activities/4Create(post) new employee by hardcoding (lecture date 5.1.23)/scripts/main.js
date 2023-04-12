// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;

let getTodoButton = document.getElementById("fetch-todos");

//The above things were already provided

  //CRUD:

    
   
  
  let employeebtn = document.getElementById("fetch-employees")
  
  
  let employeeNameInput= document.getElementById("employee-name")
  let employeImageInput= document.getElementById("employee-image")
  let employeeDeptInput= document.getElementById("employee-dept")
  let employeeSalaryInput= document.getElementById("employee-salary")
  let createEmployeebtn= document.getElementById("add-employee")


  //Meta data--Information about information

  //C-Create


  //for creating, the method is "POST"
  //what type of data we gonna give is "JSON" (not object, Object is different from JSON)
  //then finally give the data
  //we want to give metadata, so here we want to give information about body
  //So meta data is given in headers

  

let obj={
    name: "Ranbeer Kapoor",
    image: "/images/avatar/avatar1.jpeg",
    department: 10,
    salary: 100000000000
}
  


fetch(employeeURL, {
  method: 'POST',
  headers: {
    'Content-Type' : 'application/json'
  },
  body: JSON.stringify(obj)
})
  .then((res)=>{
      //console.log(res.json())
      return res.json()
    })
      .then((outputarray)=>{
        console.log(outputarray)
      
      })    


  
//R-Read
  //ye to apan pehele se karte aae hai
  //fetch takes 2 arguments
  //1 is the url
  //2nd is the object wherein we tell it the method, i.e. GET, PUT, PATCH, DELETE
  // for GET even if we dont specify the metgod, it still works, coz, http default method is "GET"
  // fetch(employeeURL,{
  //   method: 'GET'             //even if you don't do this its okay in case of "GET" 
  // })
  // .then((res)=>{
  //   //console.log(res.json())
  //   return res.json()
  // })
    // .then((outputarray)=>{
    //   console.log(outputarray)      
    // })  



