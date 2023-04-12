// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
//const urlTodosBase = `${baseServerURL}/todos/`;

//Above things were already given

//Read question from README file




//Now if I amke a request of login, (like how it is done in api.rest)
//and I put wrong password or wrong username
//and send request I'll not be allowed"
// But if I put correct username and password, I'll get the access token

//How to do it in JS
//method as 'POST'
//make fetch request as regular, in the headers, put Autorization: 'Bearer (paste your token here)'

loginUserButton.addEventListener("click", ()=>{
  
let obj={
        username: loginUserUsername.value,
        password: loginUserPassword.value
}

  fetch (userLoginURL,{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }
  )
  
  .then((res)=>{
    console.log(res)  //click on response object if you get ok:true, means user has put correct username and password
    if(res.ok==true){ //if its fine, you have to show in DOM, hey admin welcome back
      notificationWrapper.innerHTML=  
          `<h5 class="notification info">
                hey ${obj.username}, welcome back!
          </h5>`
    }
    return res.json()
  })

  .then((data)=>{
    console.log(data) //you'll get your access token here
                //you are told to store token, and userid in localstorage
    localStorage.setItem("localAccessToken", data.accessToken)
    localStorage.setItem("userId", data.user.id)
  })
 
})




getTodoButton.addEventListener('click', ()=>{
  fetch(urlAllTodosOfUser,{
    headers:{
      "Content-Type": "application/json",
      Authorization:`Bearer ${userAuthToken}`
    }
  })
  .then((res)=>{
    console.log(res)
    return res.json()
  })
  .then((mydata)=>{
    console.log(mydata)

   let myarray= mydata.map((item)=>{
      if(item.completed==true){
        return`<label><input class="todo-item-checkbox" data-id=${item.id} type="checkbox" checked="">actual Siberian</label>`
      }
      else{
        return`<label><input class="todo-item-checkbox" data-id=${item.id} type="checkbox">fickle Snowshoe</label>`
      }
     
    })
    //console.log(myarray)
    mainSection.innerHTML=`<div id="todo-list-wrapper" class="todo-list-wrapper">
                            ${myarray.join("")}
                          </div>`
  })
})

