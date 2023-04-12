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

//Goal is whwnever I click the button, I should be able to show employee in DOM

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
            //We see in index.html, we have a data list wrapper and we have already taken it in js in variable mainSection
            //pre tag inside `` to preserve white spaces
            //One way
            //telling JS what we need
            //Used mostly nowadays
            //Declare kar dia mujhe kya kya chaiye, ab JS apna kaam kare

            //***Declarative Approach***
            mainSection.innerHTML=`
              <pre class= "emp-wrapper">
                <code>
                  ${JSON.stringify(data, null, 2)} 
                </code>
              </pre>
            `


            //Another way
            //giving JS step by step instructions

            ////***Imperative Approach***
            // let dataPre = document.createElement('pre')
            // dataPre.classList.add("emp-wrapper")

            // let dataCode = document.createElement("code")
            // dataCode.append(JSON.stringify(data, null, 2))
            // dataPre.append(dataCode)

            // mainSection.append(dataPre)
          })
})



// mainSection.innerHTML=`${ ${(data)} }`template string always creates a string,
//so when JS tries to convert an array or object to a string, it give us [object Object],[object Object],[object Object],[object Object],[object Object]
// Hence a trick to to convert an array or object to a string is mainSection.innerHTML=`${JSON.stringify(data)}`  
// <pre> tag is used to preserve white spaces
//<pre> ${JSON.stringify                 (data, null,       2)} </pre>
//                ⬇                         ⬇     ⬇         ⬇        
// converts JS value into a string        value, replacer, how many space I want to indent them (kitna indentation dena hai. can give anything)                         
//<code></code> Does nothing much, just created a light blue box. Its okay even if you don't use