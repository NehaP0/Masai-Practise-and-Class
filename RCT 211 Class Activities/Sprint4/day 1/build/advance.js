//Enums (Read and tryu to implement)
let arr1 = ["Ankit", 23, 5, "1 street"];
//Generic Functions:
//-----------------
function fun(value) {
    return value;
}
fun("Ankit");
fun(3);
fun(false);
let obj2 = {
    id: 2,
    name: "Aman",
    address: "abc Street",
    role: "FontEnd"
};
//Class:
//------
class Car {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
}
let c = new Car("Thar", "Mahindra");
class Suv extends Car {
    constructor(name, brand, sunRoof) {
        super(name, brand);
        this.sunRoof = sunRoof;
    }
}
//# sourceMappingURL=advance.js.map