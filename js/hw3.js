function calculate(operation) {
    return function(a, b) {
        console.log(operation(a, b));
    };
}

let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

let addNumbers = calculate(add);
let subtractNumbers = calculate(subtract);
let multiplyNumbers = calculate(multiply);
let divideNumbers = calculate(divide);

addNumbers(5, 5);
subtractNumbers(56, 42);
multiplyNumbers(20, 10);
divideNumbers(250, 50);