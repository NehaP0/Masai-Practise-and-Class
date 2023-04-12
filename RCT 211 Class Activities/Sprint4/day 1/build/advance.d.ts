type u1 = [string, number, number, string];
declare let arr1: u1;
declare function fun<Type>(value: Type): Type;
interface person {
    id: number;
    name: string;
}
interface person2 extends person {
    address: string;
    role: "FontEnd" | "BackEnd";
}
declare let obj2: person2;
declare class Car {
    name: string;
    brand: string;
    constructor(name: string, brand: string);
}
declare let c: Car;
declare class Suv extends Car {
    sunRoof: boolean;
    constructor(name: string, brand: string, sunRoof: boolean);
}
