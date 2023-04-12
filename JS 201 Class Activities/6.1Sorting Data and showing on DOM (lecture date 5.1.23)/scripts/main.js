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





  //Goal: On page load, I want to show all the cats
  //On click of button "sort low to high",  I wanted it sorted by name
 
  
  //step1: add event listener of page load and fetch the cats---Done
  //step2:create card html--------------------------------------Done
  //step3:create card list html and show on DOM-----------------Done

  //step4:add event listener "sort low to high" btn to sort cats by name

window.addEventListener("load", ()=>{
  fetch(catsURL)
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
      sortingLtoH(catsarray)
    })
    
})


function sortingLtoH(catsarray){
  sortLtoHBtn.addEventListener("click",()=>{
    let newarr= catsarray.sort((a,b)=>{
      if (a.name>b.name){
        return 1
      }
      if(a.name<b.name){
        return -1
      }
      return 0
    } )
    createlistandDOMit(newarr)
  })
}









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
