function greeter(greeting) {
    return function(name) {
        console.log(greeting + ", " + name);
    }
}

// const greetHello = greeter("hello");
// greetHello("Jana");

// function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     }
// }

// const counter = createCounter();
// counter(10);

function multiplier(factor) {
    return  function(number) {
        return number * factor;
    }
}
