// // arrow function 
// let getMynaeme = function(name){
//     console.log("My name is " + name);
// }
// getMynaeme("Jana"); // calling the function anonymous function

// // using arrow function
// let getMyName = (name) => {
//     console.log("My name is " + name);
// }
// getMyName("Jana"); // calling the arrow function

// let getFullName = (fname, lname) => {
//     console.log("My full name is " + fname + " " + lname);
// }
// let fullN = getFullName("Jana", "Panch"); // calling the arrow function with two parameters

// let getFullName2 = (fname, lname) => "My full name is " + fname + " " + lname; 
// // if there is only one statement in the function body, we can omit the curly braces and the return keyword
// let fullN2 = getFullName2("Jana", "Panch"); // calling the arrow function with two parameters


// let sum = (a, b) => a + b; // arrow function with two parameters and implicit return
// console.log(sum(5, 10)); // calling the arrow function and logging the result


// let calculate = (a, b, operation) => {
//     if (operation === "add") {
//         return a + b;
//     } else if (operation === "subtract") {
//         return a - b;
//     } else if (operation === "multiply") {
//         return a * b;
//     } else if (operation === "divide") {
//         return a / b;
//     } else {
//         return "Invalid operation";
//     }
// }
// console.log(calculate(10, 5, "add"));

// let getMyName = name => "My name is " + name; // arrow function with one parameter and implicit return
// console.log("My name is " + name); // calling the arrow function and logging the result

// getMyName("Jana"); // calling the arrow function with one parameter 
// // no breakets needed when there is only one parameter


// ((name) => {
//     console.log("My name is " + name);
// })("Jana"); // immediately invoked function expression (IIFE) using arrow function

// // IIFE stands for Immediately Invoked Function Expression. It is a JavaScript function that runs as soon as it is defined. The syntax for an IIFE is as follows:
// (function (name) {
//     console.log("My name is " + name);
// })("Jana");

setTimeout(() => {
    console.log("This is a delayed message");
}, 2000); // using arrow function with setTimeout to log a message after a delay of 2 seconds






