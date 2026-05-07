// let x = 1;
// while (x<=10) {
//     console.log(x);
//     x++;
// }
// console.log('Loop ended');
// console.log("value of x after loop" + x);

// let x = 1;
// is_running = true;

// while (is_running) {
//     console.log(x);
//     if (x == 10) {
//         is_running = false;
//     }
//     x++;
// }


// let x = 1;
// is_running = true;

// while (is_running) {
//     console.log(x);
//     if (x == 10) {
//         break;
//     }
//     x++;
// }

// let x = 1;
// do {
//     console.log(x);
//     x++;
// } while (x == 0);
// console.log('Value of x after loop' + x);

// let y = 1;

// while(y==0){
//     console.log(y);
//     y++;
// }
// console.log('Value of y after loop' + y);

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// console.log(i); // ReferenceError: i is not defined

// for(var i=1; i<=10; i++){
//     console.log(i);
// }
// console.log(i); // 11

// let marks = [80, 90, 75, 85, 95];

// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i]);
// }

// console.log('_'.repeat(20));

// let x = 0;
// while (x < marks.length) {
//     console.log(marks[x]);
//     x++;
// }

// console.log('_'.repeat(20));

// for (let y of marks) {
//     console.log(y)
// }

// console.log('_'.repeat(20));

// for (let key in marks) {
//     console.log(marks[key]);
// }

// for(let a of "jana") {
//     console.log(a);
// }

// for (let a of "jana") console.log(a);

// for (let i = 1; i <= 10; i ++) {
//     if(i%2==0) {
//         console.log(i);
//     }
// }// even number

// for (let i = 1; i <= 10; i ++) {
//     if(i%2==0) {
//         break;
//     }
//     console.log(i);
// } // 1 and stop the loop

// for (let i = 1; i <= 10; i ++) {
//     if(i%2==0) {
//         return;
//     }
//     console.log(i);
// } // 1 and stop the loop must use return keyword in function

// for (let i = 1; i <= 10; i ++) {
//     if(i%2==0) {
//         continue;
//     }
//     console.log(i);
// } // odd number

// for (let i=1; i<=5; i++) {
//     for(let j = 1; j<= i; j++) {
//         console.log(i + "x" + j + " = " + (i*j));
//     }
// }

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

for (let i = 0; i < marks.length; i++) {
    console.log("Marks of student " + (i + 1) + ":");
    for (let j = 0; j < marks[i].length; j++) {
        console.log(marks[i][j]);
    }
}