let bool = true;

console.log(bool);
console.log(typeof bool);

let x;
console.log(x);
console.log(typeof x);

let y = null;
console.log(y);
console.log(typeof y);


let ar = [1, 2, 3, 4, 5];
console.log(ar);
console.log(typeof ar);

let obj = {
    name:"Jana",
    age:23
}
console.log(obj);
console.log(typeof obj);

let fun = function() {
    console.log("Hello World");
}
console.log(fun);
console.log(typeof fun);

let sym = Symbol("hello");
console.log(sym);
console.log(typeof sym);

let bigInt =1n;
console.log(bigInt);
console.log(typeof bigInt);

let first_name = "Jana";
console.log(first_name);
console.log(typeof first_name);

const PI = 3.14;
console.log(PI);
console.log(typeof PI);

let a = 10;
let b = a;
console.log(`a: ${a}`);
console.log(`b: ${b}`);
b = 20;
console.log(`a: ${a}`);
console.log(`b: ${b}`);

let a = {name: "Jana"};
let b = a;
console.log(`a: ${a.name}`);
console.log(`b: ${b.name}`);
b.name = "John";
console.log(`a: ${a.name}`);
console.log(`b: ${b.name}`);

let a = [1, 2, 3];
let b = a;
console.log(`a: ${a}`);
console.log(`b: ${b}`);
b.push(4);
console.log(`a: ${a}`);
console.log(`b: ${b}`);