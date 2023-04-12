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
   
let catsURL = `${baseServerURL}/cats`
let dataListWrapper= document.getElementById("data-list-wrapper")
let sortLtoHBtn= document.getElementById("sort-low-to-high")



//if doubt, watch vivek sir ne Slack pe bheja hua video date: 5 Jan 2023 (2nd video)

  //Goal: On clicking "sort low to high" btn, I want to make a fetch request of already sorted data
  //(iske pehele ham "sort low to high" btn click krne pe apne paas jo already data aya tha usko sort krre the, par abhi ham server se hi sorted data mang re hai)
 
  
  //if I check json json server github on google
  //open the documentation and seacrch search (by ctrl F) "sort"
  //you'll get GET /posts?_sort=views&_order=asc
  //i.e this is the way we have to fetc sorted data
  //so in apis.rest, I check it GET http://localhost:9090/cats?_sort=name&_order=asc
  //                                                                  |          |
  //                                                  i want to sort names       in asc order

  //so Step1, add event listener to "sort low to high" btn and call apna fetching vala function
  //fetch krte time, give this url http://localhost:9090/cats?_sort=name&_order=asc

  function fetchingsortedCatsbro(){
  fetch(`${catsURL}?_sort=name&_order=asc`)
  .then((res)=>{
      return res.json()
  })
    .then((data)=>{
      console.log(data)
      let catsarray= data.map((item)=>{
        return{                            //creating object and dont forget to write return
          name: item.name,
          cost: item.cost,
          likes: item.likes,
          image: `${baseServerURL}${item.image}`,
          description: item.description.substring(0,100),   //want only 100 characters
          breed: item.breed,
        }
      })
      createlistandDOMit(catsarray)
    })
  }  



function sortingLtoH(catsarray){
  sortLtoHBtn.addEventListener("click",()=>{
    fetchingsortedCatsbro()
  
  })
}

sortingLtoH()


function createlistandDOMit(array){
  //dont forget to write return
  let list= `<div> ${array.map((item)=>{return createCard(item.name, item.cost, item.likes, item.image, item.description, item.breed)})}</div>`
  

  dataListWrapper.innerHTML = list
}
  

function createCard(name, cost, likes, image, description, breed){
  let card=`
    <div>
      <h2>${name}</h2>
      <h3> Rs ${cost}</h3>
      <h4> Likes: ${likes}</h4>
      <img src= ${image}></img>
      <p>${description}</p>
      <p>${breed}</p>
    </div>
  `

  return card
}
