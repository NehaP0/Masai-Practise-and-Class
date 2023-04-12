let n = 10;
n = 20; //allowed
//n = "ab"  //error
let s = "abc";
s = "pqr"; //allowed
//s = 1     //error
let s1 = 'S1';
let s2 = 10;
let res = `${s1} + ${s2}`;
//Boolean
let b = false;
//Non Primitive data types
//Array:
let arr = [1, 2, 3];
//arr.push("abc")
arr.push(5);
let arrStr = ["a", "b", "c"];
//arrStr.push(1)
arrStr.push("abc");
let arr2 = ["a", "b", "c"];
//Objects
let obj = {
    name: "Ankit",
    id: 34,
    address: "1 street",
    score: 5
};
//type user = {name: string, id: number, address: string, score: number}
//Array of objects
let arrayed = [{ name: "Ankit", id: 34, address: "1 street", score: 5 },
    { name: "Ankit", id: 34, address: "1 street", score: 5 },
    { name: "Ankit", id: 34, address: "1 street", score: 5 }
];
//Objects with array inside
//Union and intersection
//----------------------
let x = 2;
x = 'a';
x = 10;
let ia = {
    name: "abc",
    id: 4,
    address: "a",
    score: 50,
    role: "frontEnd"
};
//Function 
function sum(a, b) {
    return a + b;
}
sum(1, 2);
//sum("1",2) - -- -error
//# sourceMappingURL=index.js.map