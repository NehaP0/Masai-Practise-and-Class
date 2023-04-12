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

//My goal is to fetch reciepes but there are a lot of receipes, so I want only 10 of them. So how to do that?
// Every server has its own way, we are using JSON server, so search json server github on google
// In its documentation, search "limit", you'll get how you can limit the fetch results
// so documentation says that while fetching after theb link/receipes, we put query parameters(whatever we pass after "?")
//like http://localhost:9090/recipes?_limit=10&_page=1
//                                           ⬇      ⬇
//                         limit my results to 10   show me first page(you can request any page)
// so I'll fetch only 10 recipes and of page no. 1
//you can test this in apis.rest     
//Like if there are totak of 30 results but I want only 10, It will do 30/10=3. 
//So total of 3 pages will be created each having 10 results, and whatever page number I ask it to show, it will show

// Step 3 create receipes url
const recipesURL= `${baseServerURL}/recipes?_limit=10&_page=1`

// Step 4 take fetch recipes button
let getrecipesButton = document.getElementById("fetch-recipes")

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

//Goal is whwnever I click the button, I should be able to show 10 receipes in DOM

// Step 5 handling click of recipes button 
let cardData;
getrecipesButton.addEventListener("click", ()=>{  
    fetch(recipesURL)  //returns a promise object
      .then((res)=>{
          return res.json()
        })
          .then((data)=>{
            console.log(data)

            //We want an array of objects
            //Step 6: What all things should one card have only that we take
            //i.e. Data massaging
            //data is array of objects, so we use array.map
            cardData = data.map((item)=>{
              return{                        //don't forget to write return
                title: item.name, 
                description: item.instructions ? item.instructions.substring(0,100):"No Instruction Available" , //I want that if the item had instructions, only give me 100 characters, but if item does not have a instruction just print "no instruction available"
                linkText: "Read Me", 
                linkURL: "https://google.com", 
                imageURL: `${baseServerURL}${item.image}`
                //remember to give base url to image link if not already there
              }
            })


            Cardformat()
                     
          })
})






// Step8: HTML of all cards list (Structure of all cards in form of list)
//this function needs array of objects [{},{}, {}..]
//each object should have-title, description, linkText, linkURL, imageURL
function Cardformat(){
          let cardlist=`
          <div>
            ${cardData.map((item)=>{      //don't forget to write return
              return Cardhtml(item.title, item.description, item.linkText, item.linkURL, item.imageURL )
            }).join("")}              
          </div>
        `  //its a string so it was giving a comma between cards in DOM, hence converted it to array using .join("")
          //its a string so that I can save it in a variable and able to return/use that variable


// appending cardlist to webpage DOM
//innerHTML- converts to DOM
mainSection.innerHTML = cardlist

}






//Now we know what all details our card will have now we have to give it a structure 
// Step7: HTML of card(you can say) what will be the structure of one card

function Cardhtml(title,description,linkText,linkURL,imageURL){  
      let card= `
      <div>
          <h2> ${title} </h2>
          <p> ${description} </p>
          <a href=${linkURL}> ${linkText} </a>
          <img src= ${imageURL} ></img>
      <div>
      ` ///its a string so that I can save it in a variable and able to return that variable

      return card
}