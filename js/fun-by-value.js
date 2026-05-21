function increment(x) {
    x = x + 1;
    return x;
}

let a = 5;
let b = increment(a);
console.log(a);
console.log(b);

function changeMyName(obj) {
    obj.name = "Alice";
}

let person = { name: "Jana" };
changeMyName(person);
console.log(person.name)

console.log(changeMyName.name);
console.log(changeMyName.length);
console.log(changeMyName.toString());

changeMyName.age = 30;
console.log(changeMyName.age);


