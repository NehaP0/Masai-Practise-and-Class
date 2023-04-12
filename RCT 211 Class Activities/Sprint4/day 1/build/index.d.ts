declare let n: number;
declare let s: string;
declare let s1: string;
declare let s2: number;
declare let res: string;
declare let b: boolean;
declare let arr: number[];
declare let arrStr: string[];
declare let arr2: Array<string>;
declare let obj: user;
declare let arrayed: Array<user>;
declare let x: number | string;
type user = {
    name: string;
    id: number;
    address: string;
    score: number;
};
type developer = {
    name: string;
    role: string;
};
declare let ia: user & developer;
declare function sum(a: number, b: number): number;
