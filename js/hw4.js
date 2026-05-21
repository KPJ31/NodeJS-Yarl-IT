let students = [
    { name: "kamal", marks: [80, 75, 90] },
    { name: "nimal", marks: [65, 70, 60] },
    { name: "raju", marks: [88, 92, 85] },
    { name: "vimala", marks: [55, 60, 58] },
    { name: "kamala", marks: [78, 82, 80] }
];

for (let i = 0; i < students.length; i++) {
    let total = 0;
    for (let j = 0; j < students[i].marks.length; j++) {
        total = total + students[i].marks[j];
    }

    let average = total / students[i].marks.length;

    console.log("Student Name: " + students[i].name);
    console.log("Total Marks: " + total);
    console.log("Average Marks: " + average);
}