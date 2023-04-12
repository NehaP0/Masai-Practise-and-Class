// Defining Datauser:

//Primitive:

//1. Number
let n: number = 10

n = 20    //allowed
//n = "ab"  //error, coz its not a number

//if I also do :

//let k = 10

//and hover over this, it will say k: number
//Because if you don't assign type, it will by default take type based on the value we have assigned to it like 10.

//---------------------------------------------------------------------

//2. String
let s: string = "abc"
s = "pqr" //allowed
//s = 1     //error

let s1: string ='S1'
let s2: number =10

let res: string = `${s1} + ${s2}`      //allowed
//let res2: number = ${s1} + ${s2}      //error

//---------------------------------------------------------------------

//3. Boolean

let b:boolean = false

//-----------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------

//Non Primitive data types

//1. Array:

    //1st way:
        let arr: number[] = [1,2,3];  //Array of nos. 
        //arr.push("abc") //error
        arr.push(5)       //allowed

        let arr2: string[] = ["a", "b", "c"];  //Array of string
        //arr2.push(1)   //error
        arr2.push("abc")  //allowed

    //2nd way:
        let arr3 : Array<string> = ["a","b", "c"]

//---------------------------------------------------------------------

//2. Objects

let obj: types = {
    name : "Ankit",
    id : 34,
    address : "1 street",
    score: 5 //because this comes as string from i/p box, so we make it number
};
type types = {name: string, id: number, address: string, score: number}
//if you don't define type, it will  by default take the type according to the values provided.

//"type" you can declare anywhere in File, its not "let" or "const" that you need to declare at before accessing it. You can declare anywhere.
//Like here I am accessing "types" before declaring it 😁

//---------------------------------------------------------------------

//Array of objects


let ArrayBro :types[] = [{name : "Ankit",id : 34,score: 5,address : "1 street"},
{name : "Ankit",id : 34,address : "1 street",score: 5},
{name : "Ankit",id : 34,address : "1 street",score: 5}
]

//or let ArrayBro :Array<types>

//Objects with array inside



//---------------------------------------------------------------------
//---------------------------------------------------------------------

//Union and intersection
//----------------------


//Union i.e OR operator (how to remeber "Union" has "O" and "OR" also has "O")
//---------------------
let x : number | string = 2   //we can put number or string so union of number and string
x = 'a'
x = 10
//x=false  //error


//Intersection i.e. AND operator
//------------------------------
type developer = {name: string, role: string}

let ia: types & developer = { //Our "ia" to have properties of "types" also and "developer" also, 
    name:"abc",
    id:4,
    address: "a",
    score: 50, 
    role : "frontEnd"
};

//If props are conflicting for eg, if "types" has id:string, and "developer" has id:number, it will throw error "id never" i.e not able to assign any
// value.


//If I use Union, so even if I miss a property, it won't throw me an error, but in case of Intersection it will.

//---------------------------------------------------------------------
//---------------------------------------------------------------------


//Function 

function sum (a : number,b : number){  //jaha parameters accept karre hai vaha
    return a + b;
}

sum(1,2);
//sum("1",2) - -- -error
//In normal JS, it would not have given any error

//Now read advance.ts file


//------------------------------------------------------------------------------------------------------------------------------------

//Passing optionally : 
//-------------------------


//parameter_name ? : type
//eg name ?: string 

//i.e if name is availaible, it should be of type string, otherwise if its not there still no problem. 

//eg:

function func (a: number, b?:number  ){
    if(b){
        return a+b
    }
    else{
        return a
    }
}

fun(1)