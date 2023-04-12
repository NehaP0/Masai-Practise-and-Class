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
   
  
 
  
  
  let employeeNameInput= document.getElementById("employee-name")
  let employeImageInput= document.getElementById("employee-image")
  let employeeDeptInput= document.getElementById("employee-dept")
  let employeeSalaryInput= document.getElementById("employee-salary")
  let createEmployeebtn= document.getElementById("add-employee")


  //Meta data--Information about information

  //C-Create
  // on click of the button, this function will
  // only create the obhject of the employee detail and give that object to "createemployee"
  // function to put that object in our api

  
  createEmployeebtn.addEventListener("click",()=>{
    // console.log("works")

    let obj={
        name: employeeNameInput.value,
        image: employeImageInput.value,
        department: employeeDeptInput.value,
        salary: employeeSalaryInput.value
    }

    createEmployee (obj)

  })

  

function createEmployee (obj){
  fetch(employeeURL, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
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

}
