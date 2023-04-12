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
   
let todoURL = `${baseServerURL}/todos`
let dataListWrapper= document.getElementById("data-list-wrapper")


//JWT Token: You sign in using your credentials
//Server gives you back a token
//You store the token and using that token, you can access different things
//Like if you try to access "todos" without a token, you'll get a msg saying "Its a protected route/method. You need an auth token to access it."
//So you need to sigin using your credentials so that server will give you a token
//Every backen sysytem has its own way of authorisation
//In backend provided to us, 

// in api.rest
//we've to create a POST request to your base url/login
//Along with loging in you need to some some data, i.e. the username and password
//As a developer username:"admin", password:"admin"
//try doing it in api.rest
//you'll get an access token using which you can access protected routes, and you got other details also like id, name etc
 
//so now that you have the token, put GET request for todos an before hitting Send Request
//Autorization: Bearer (paste your token here without quotes)
//Now hit Send Request and you'll get todos


//How to do it in JS
//method as 'POST'
//make fetch request as regular, in the headers, put Autorization: 'Bearer (paste your token here)'
  
  //step1: add event listener of page load and fetch the todos using token
  //step2:create card html
  //step3:create card list html and show on DOM
  

  ///NOT COMPLETED, WATCH SIR'S VIDEO

window.addEventListener("load", ()=>{
  fetch(todoURL, {
    headers:{   
      'Content-type':'application/json',   
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImZpcnN0bmFtZSI6IkFkIiwibGFzdG5hbWUiOiJNaW5pc3RlciIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRsTG01THA0MHVCUjlDVXJabjU4Q2RPbDh5dTVHcDJ1bUFPLjZseS52V2NaMGEwdlVLc0hpQyIsImF2YXRhciI6Imh0dHBzOi8vY2xvdWRmbGFyZS1pcGZzLmNvbS9pcGZzL1FtZDNXNUR1aGdIaXJMSEdWaXhpNlY3NkxoQ2taVXo2cG5GdDVBSkJpeXZIeWUvYXZhdGFyLzc2Mi5qcGciLCJ1c2VyTGV2ZWwiOjQsImNyZWF0ZWRBdCI6MTY3MDE2NTk4MDYzOCwiaWF0IjoxNjczMTIzMjMzLCJleHAiOjE2NzMxMzQwMzN9.g9-0Hgwc4V1q7TuDQzBycnXkCvyjXvFoegstawg8jac'

    }})
  .then((res)=>{
      return res.json()
  })
    .then((data)=>{
      console.log(data)
     
    })
    
})









