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

// Step 3 got fetch employees button by its id
let getemployeesButton = document.getElementById("fetch-employees")

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

//Goal is whwnever I click the button, I should be able to console.log the employee data

// Step 4 handling click of employees button 

getemployeesButton.addEventListener("click", ()=>{
    fetch(employeeURL)  //returns a promise object
      .then((res)=>{
          //console.log(res)   //By using  the reponse contructor function internally  javascript returns response object 
          // In prototype of response, we have a method called "json"
          //so for actual data, we need to invoke json
          //so we do
          // res.json() it also returns does not return a value, it returns a promise, so we need to rersolve it again using .then
          return res.json()
        })
          .then((data)=>{
            console.log(data)
          })
})