//Enums 

// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// Enums allow a developer to define a set of named constants. 
// TypeScript provides both numeric and string-based enums
// ie. types nahi dalte isme. kuch b words daal skte

// An enum can be defined using the `enum` keyword.

// ### Numeric Enums:
//------------------
        
        enum Direction {
          Up = 1,
          Down,
          Left,
          Right,
        }

        // // Up is initialised with 1. 
        // // All of the following members are auto-incremented from that point on. 
        // // In other words, Direction.Up has the value 1,  
        // // Down  has  2, Left has  3, and  Right  has  4.
        
        // - You can leave off the initialisers entirely

        
        enum Pirection {
          Up,
          Down,
          Left,
          Right,
        }

        // // Up would have the value 0, Down would have 1, etc. 
        // // This auto-incrementing behavior is useful for cases where 
        // // we might not care about the member values themselves, 
        // // but do care that each value is distinct from other values in the same enum.
        
        //Matlab initialize kar dia to values vaha se chalu honge and accordingly increase honge
        //Initilise nahi kia to by default values 0 se chalu honge aur accordingly increase hinge.

// - Using Enums:
//--------------

let direction = Direction.Left; 


// ### String Enums:
//-----------------

// In a string enum, each member has to be constant - initialised with a string literal, or with another string enum member.


    // enum Direction {
    //     Up = "UP",
    //     Down = "DOWN",
    //     Left = "LEFT",
    //     Right = "RIGHT",
    //   }

//Matlab number enum me initialise nahi kia to b chalta hai pr string enum me values dene padte hai.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Tuple:  (How to remember. Arre usko tapli maar)
//-------- (                 Array     tupple    )

//types defined in array, and are also used in array

// type user = {name: string, id: number, address: string, score: number};
//Instead of storing "user" as object, I can store it as array

//Tupple - Defining types in the array

type user = [string, number, number, string];
//not arr1:user[] = bla, but 
//    arr1:user = bla
let arr1: user = ["Ankit", 23, 5, "1 street"];    //correct
//let arr1: user = [23,"Ankit",  5, "1 street"];  //error

//If we are doing it this way(ie storing type as array), the order matters.

//--------------------------------------------------------------------------

//Generic Functions:
//-----------------

//i.e Parameters of the function have varying data types based on the requirement.

//I want that the user should pass the "value" based on requirement. i.e somewhere I  want it as number, somewhere boolean, somewhere string etc
//i.e data type is varying

function fun <WantType>(value : WantType){
    return value;
}

fun<string>("Ankit")
fun<number>(3)
fun<boolean>(false)
// fun<boolean>(1) ----error //If I have said I want boolean, but user passes number so tgrows error
// fun<number>("bro")  ----error
// fun<string>(2)   ----error

//--------------------------------------------------------------------------

//Interface:     ("extends" use kar skte isme, kuch b words use kr skte)(inheritance) (How to remember, Interface hard word hai, "extends" bhi hard word hai)
//---------



//interface declares the data types in object.
//But for that I already had object, so why do I need interface?
//person2 has all props of person1 and some additional props also

// 1. we can define object only 
// 2. can inherit properties
// 3. can also give values and not just data types

//This can also be done using union or intersection and interface is also a method



interface Person1 { //as a naming convention, interface's nme should start with capital letter i.e. Person1
    id : number,
    name : string
}

//inheritance bro
interface person2 extends Person1 {   //person2 has all props of person1 and some additional props also
    address : string,
    role : "FontEnd" | "BackEnd" //we can also put value, not just data types. Interface allows this. i.e kuch bhi words use kr skte
}

let obj2 : person2 = {
    id : 2,
    name: "Aman",
    address : "abc Street",
    role : "FontEnd" //should be "FontEnd" or "BackEnd" only 
}



//--------------------------------------------------------------------------

//Class:  
//------

class Car {
    name: string //we have to define types
    brand: string
    constructor(name: string, brand : string){ //we have to define types
        this.name = name;
        this.brand = brand;
    }
}

let c = new Car("Thar", "Mahindra")

class Suv extends Car{
    sunRoof : boolean
    constructor(name: string, brand: string, sunRoof: boolean){
        super(name, brand);
        this.sunRoof = sunRoof
    }
}

//I want SUV to have all the properties of Car, and also some additional properties
//So I'll use keywords "extends" and "Super"
//And add the additional props as usual
