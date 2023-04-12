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
let RegisterUserBtn = document.getElementById("register-user")

let username = document.getElementById("register-user-username")
let firstname = document.getElementById("register-user-firstname")
let lastname = document.getElementById("register-user-lastname")
let email = document.getElementById("register-user-email")
let password = document.getElementById("register-user-passowrd")


//Registration of new user/new admin


// in api.rest
//we've to create a POST request to your base url/register
//Content-Type: application/json
//Along with registering in you need to some some data, i.e. the username ,password, email, firstname, lastname, avatar
//That user will be created for us



  


  //Do hello (username), welcome to the site
  
  RegisterUserBtn.addEventListener("click", ()=>{    
        
    let obj={
      username : username.value,
      password: password.value,
      email: email.value,
      firstname:firstname.value,
      lastname:lastname.value,
    }
    registering(obj)
  })
  
function registering(obj){
   fetch(userRegisterURL, {
    method:'POST',
    headers:{   
      'Content-type':'application/json'
    },
    body:JSON.stringify(obj)
  })
  .then((res)=>{      
      console.log(res)
      if(res.ok===true){
        dataListWrapper.innerHTML=`<h1>hello ${obj.firstname}, welcome to the site  </h1>`
      }
      return res.json()
  })
  .then((data)=>{
    console.log(data)
  })
}
 






  
  