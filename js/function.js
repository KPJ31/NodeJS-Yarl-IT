// // default function
// function getName() {
//     console.log("My name is Janarthan");
// }

// getName(); // calling the function


// //Parameters function 
// function getMyName(name) {
//     console.log("My name is " + name + ".")
// }

// getMyName("Janarthan") // calling the function with an argument


// //return function
// function getFullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// let fullName = getFullName("Panchalingam", "Janarthan");
// console.log(fullName);

// //undefined function
// let fullName2 = getFullName();
// console.log(fullName2); // undefined because we did not pass any arguments to the function, so it returns undefined.

// //function with default parameters
// function getFullName2(firstName = "John", lastName = "Doe") {
//     return firstName + " " + lastName;
// }

// let fullName3 = getFullName2();
// console.log(fullName3); // John Doe because we did not pass any arguments to the function, so it uses the default parameters.

// //anonymous function
// let getMyName = function() {
//     console.log("My name is Janarthan");
// }

// getMyName(); // calling the anonymous function


// //anonymous function with parameters
// let getMyName2 = function(name) {
//     console.log("My name is " + name + ".");
// }
// getMyName2("Janarthan"); // calling the anonymous function with an argument


// getName(); // calling the function before it is defined, this is called hoisting.
// function getName() {
//     console.log("My name is Janarthan");
// }

// console.log(x); // undefined because of hoisting, the variable x is hoisted but not its value.
// var x = 10;


// console.log(x); // 10 because the variable x is hoisted and its value is assigned after the hoisting.
// let x = 10;

// "use strict"; // this is called strict mode, it helps to write cleaner code and avoid some common mistakes.
// getName(); // calling the function before it is defined, this is called hoisting.
// function getName() {
//     console.log("My name is Janarthan");
// }

// let getMyName = function(name) {
//     console.log("My name is " + name + ".");
// }

// let a = getMyName("Janarthan"); // calling the anonymous function with an argument and assigning the return value to a variable, but since the function does not return anything, a will be undefined.
// console.log(a); // undefined because the function does not return anything.

// let getMyName = function(name) {
//     console.log("My name is " + name + ".");
//     return name; // returning the name parameter, so that when we call the function and assign it to a variable, it will return the name instead of undefined.
// };

// let a = getMyName("Janarthan"); // calling the anonymous function with an argument and assigning the return value to a variable, since the function returns the name, a will be "Janarthan".
// console.log(a); // Janarthan because the function returns the name parameter, so when we call the function and assign it to a variable, it will return the name instead of undefined.

// function sum(a, b, c) {
//     return a + b + c;
// }

// let result = sum(10, 20, 30);
// console.log(result); // 60 because the function returns the sum of a, b and c, which is 10 + 20 + 30 = 60.

// function sum(a, b, c) {
//     return [a + b + c, a * b * c, a - b - c, a / b / c, a % b % c];
// }

// let result = sum(10, 20, 30);
// let [sumResult, productResult, differenceResult, quotientResult, modulusResult] = result; 
// // destructuring the array returned by the function into separate variables.
// console.log(sumResult); // 60
// console.log(productResult); // 6000
// console.log(differenceResult); // -40
// console.log(quotientResult); // 0.016666666666666666
// console.log(modulusResult); // 10


// let marks=[10, 20, 30, 40, 50];

// function calculateTotal(marks) {
//     let total = 0;
//     for (let mark of marks) {
//         total = total + mark;
//     }
//     return total;
// }

// let total = calculateTotal(marks);
// console.log(total); // 150



// function calculateTotal(...marks) {
//     let total = 0;
//     for (let mark of marks) {
//         total = total + mark;
//     }
//     return total;
// }

// let totalMarks = calculateTotal(10, 20, 30, 40, 50);
// console.log(totalMarks); // 150 because the function takes a variable number of arguments using the rest parameter syntax, and calculates the total of all the marks passed as arguments.

// console.log("hello", "world", "this", "is", "a", "test"); // hello world this is a test because the console.log can take multiple arguments and will print them all separated by a space.
// // a funtion have one rest parameter, and it must be the last parameter in the function definition. It allows the function to accept an indefinite number of arguments as an array. In the example above, the rest parameter is used to calculate the total of all the marks passed as arguments to the calculateTotal function.


user get marks rest parameter total avg result a return pannum 
marks get time name and class 