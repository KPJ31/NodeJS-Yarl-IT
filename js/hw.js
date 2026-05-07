let marks = [[], [], []];

marks[0][0] = 90;
marks[0][1] = 80;
marks[0][2] = 85;
marks[1][0] = 75;
marks[1][1] = 70;
marks[1][2] = 80;
marks[2][0] = 95;
marks[2][1] = 90;
marks[2][2] = 85;

let total = 0;
let count = 0;

for (let i = 0; i < marks.length; i++) {
    for (let j = 0; j < marks[i].length; j++) {
        total = total + marks[i][j];
        count++;
    }
}
let average = total / count;
console.log("Total: " + total);
console.log("Average: " + average);