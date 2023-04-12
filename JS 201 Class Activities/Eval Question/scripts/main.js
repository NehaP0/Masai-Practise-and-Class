// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${ import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT ? import.meta.env.REACT_APP_JSON_SERVER_PORT : 9090 }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById('fetch-recipes');
let fetchEmployeesBtn = document.getElementById('fetch-employees');

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

let catsData = [];

let catsURL=`${baseServerURL}/cats`
let EmpURL= `${baseServerURL}/employees`
let recipeURL= `${baseServerURL}/recipes?_limit=25&_page=1`




window.addEventListener("load", ()=>{
    fetch(catsURL)
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        let dataarray= data.map((item)=>{
            return{
                //name,cost,description
                name:item.name,
                cost: item.cost,
                description: item.description.substring(0,75),
                id:item.id,
                image: `${baseServerURL}${item.image}`
            }
        })
        cardlist(dataarray)
        sortItLH(dataarray)
        sortItHL(dataarray)

        Filter(dataarray)
        MoreFilter(dataarray)
        //greet(dataarray)
    })
})

 function cardlist(data){
    let list=`
        <div class="data-list-wrapper" id="data-list-wrapper">
        <div class="card-list">
        ${data.map((item)=>{
            return card(item.name, item.cost, item.description, item.id, item.image)
        }).join("")}</div>
        </div>      
    
    `
    mainSection.innerHTML=list

}






function card(name, cost, description, id, image){
    let card=`<div class="card" data-id=${id}>
                <div class="card-image">
                    <img src =${image} alt="cat">
                </div>
                <div class ="card-body">
                    <h3 class="card-item card-title">${name}</h3>
                    <div class="card-item card-description">
                        ${description}
                    </div>
                    <div class="card-item card-additional-info">${cost}</div>
                </div>
            </div>`
    return card
}



//--SORTING ASC
function sortItLH(dataarray){
    sortAtoZBtn.addEventListener("click", ()=>{        
        let newarr = dataarray.sort((a,b)=>{
            return a.cost - b.cost
        })
        cardlist(newarr)
    })
}

//--SORTING DSC
function sortItHL(dataarray){
    sortZtoABtn.addEventListener("click", ()=>{        
        let newarr = dataarray.sort((a,b)=>{
            return b.cost - a.cost
        })
        cardlist(newarr)
    })
}



//Emp fetch and display


fetchEmployeesBtn.addEventListener("click", ()=>{
    fetch(EmpURL)
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        let dataarray= data.map((item)=>{
            return{
                //name,cost,description
                name:item.name,
                salary: `RS. ${item.salary}`,
                id:item.id,
                image: `${baseServerURL}${item.image}`,
                text: `Greet`
            }
        })
        EmpList(dataarray)
        //sortItLH(dataarray)
        //sortItHL(dataarray)
        
    })
})



function EmpList(data){
    let list=`
        <div class="data-list-wrapper" id="data-list-wrapper">
        <div class="card-list">
        ${data.map((item)=>{
            return Empcard(item.name, item.salary, item.id, item.image, item.text)
        }).join("")}</div>
        </div>
        
    
    `
    mainSection.innerHTML=list

}




function Empcard(name, salary,  id, image,text){


    let card=`<div class="card" data-id=${id}>
                <div class="card-image">
                    <img src =${image} alt="cat">
                </div>
                <div class ="card-body">
                    <h3 class="card-item card-title">${name}</h3>
                    <div class="card-item card-description">
                        ${salary}
                    </div>                    
                    <a href="#" class-id=${id} data-name=${name} class="card-item card-link" )>${text}</a>                    
                    </div>
            </div>`
            
    return card
    
}



//greet
// function greet(dataarray){
//     dataarray.forEach((item) => {
//         let btn=item.text
//         btn.addEventListener("click",()=>{
//             console.log("yes")
//         })
//     })
// //     let link=document.getElementById("card-item card-link")
// //     console.log(link)
// //    for(let i=0; i<link.length; i++){
// //     link[i].addEventListener("click",()=>{
// //         console.log("yes")
// //     })
// //    }

// }



//Fetch Recipes

fetchRecipesBtn.addEventListener("click", ()=>{
    fetch(recipeURL)
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        let dataarray= data.map((item)=>{
            return{
                //name,cost,description
                name:item.name,
                price: `RS. ${item.price}`,
                id:item.id, 
                image: `${baseServerURL}${item.image}`
            }
        })
        RecipeList(dataarray)
        //sortItLH(dataarray)
        //sortItHL(dataarray)
    })
})

function RecipeList(data){
    let list=`
        <div class="data-list-wrapper" id="data-list-wrapper">
        <div class="card-list">
        ${data.map((item)=>{
            return Recipecard(item.name, item.price, item.id, item.image)
        }).join("")}</div>
        </div>
        
   
    `
    mainSection.innerHTML=list

}

function Recipecard(name, price,  id, image){
    let card=`<div class="card" data-id=${id}>
                <div class="card-image">
                    <img src =${image} alt="cat">
                </div>
                <div class ="card-body">
                    <h3 class="card-item card-title">${name}</h3>
                    <div class="card-item card-description">
                        ${price}
                    </div>
                    <div class="card-item card-additional-info"></div>
                </div>
            </div>`
    return card
}


//Filtering

function Filter(dataarray){
    filterLessThan50Btn.addEventListener("click", ()=>{
        let newarr; 
        dataarray.map((item)=>{
                 return  newarr = dataarray.filter(item=> item.cost<50)
        })
      
        cardlist(newarr)
    })
}


function MoreFilter(dataarray){
    filterMoreThanEqual50Btn.addEventListener("click", ()=>{
        let newarr; 
        dataarray.map((item)=>{
                 return  newarr = dataarray.filter(item=> item.cost>=50)
        })
      
        cardlist(newarr)
    })
}