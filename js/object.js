// let Student = {
//     name: "Jana",
//     age: 23,
//     grade: "A",
// };

// let user = {};

// console.log(typeof Student);
// console.log(typeof user);


// let student = new Object();
// console.log(typeof student);


// let proto = {};
// let student = Object.create(proto);
// console.log(typeof student);

let student = {};
student.name = "Jana",
student.age = 24;

console.log(student);

student.totalMarks = function() {
    return 90;
}

console.log(student.totalMarks());