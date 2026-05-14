function calculate (a, b, operation) {
    return operation(a, b);
}

let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

console.log(calculate(5, 5, add));
console.log(calculate(56, 42, subtract));
console.log(calculate(20, 10, multiply));
console.log(calculate(250, 50, divide));