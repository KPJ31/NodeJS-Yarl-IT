// // let x = 10;
// // let y = 20;
// let x,y;
// // x = 10;
// // y = 20;
// // x = y = 20;
// let z = x + y;
// console.log(x=10);
// console.log(y=20);
// console.log(`x: ${x}`);
// console.log('x = ' + x);
// console.log("x = ", x);
// console.log(`y: ${y}`);
// console.log(`x + y: ${z}`);

// let a = 5;
// let b = 3;
// let c = a * b;
// console.log(`a: ${a}`);
// console.log(`b: ${b}`);
// console.log(`a * b: ${c}`);

// let d = 15;
// let e = 4;
// let f = d / e;
// console.log(`d: ${d}`);
// console.log(`e: ${e}`);
// console.log(`d / e: ${f}`);

// let g = 7;
// let h = 3;
// let i = g - h;
// console.log(`g: ${g}`);
// console.log(`h: ${h}`);
// console.log(`g - h: ${i}`);


// let x = 10;
// console.log(x**3);

// let y = 5;
// console.log()


// let a = 100;
// a??='jana';
// console.log(a);

// let a = null;
// a??='jana';
// console.log(a);

// x = 10;
// x = x + 5;
// console.log(x);

// x+=5 // x = x + 5
// console.log(x);

// x-=5 // x = x - 5
// console.log(x);

// x++
// console.log(x);

// ++x
// console.log(x);

// x--
// console.log(x);

// --x
// console.log(x);

// x=10;
// console.log(++x); // 11
// console.log(x); // 11

// console.log(x++); // 11
// console.log(x); // 12

// x = 10;
// y = 20;
// z = x++ + y++
// console.log(z); // 30
// console.log(x); // 11
// console.log(y); // 21

// a = 10;
// b = 20;
// c = ++a + ++b;
// console.log(c); //32
// console.log(a); //11
// console.log(b); //21

// a = 10;
// b = 20;
// c = a++ + ++b;
// console.log(c); //31
// console.log(a); //11
// console.log(b); //21


// a = 10;
// b = 5;
// console.log(a<b); // true
// console.log(a>b); // false
// console.log(a<=b); // false
// console.log(a>=b); // true
// console.log(a==b); // false
// console.log(a!=b); // true
// console.log(a===b); // false
// console.log(a!==b); // true

// // and, or, not
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false 

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// console.log(!true); // false
// console.log(!false); // true 

// console.log(true && (false || true)); // true
// console.log((true && false) || true); // true
// console.log((true && false) || false); // false
// console.log(!(true && false)); // true

// console.log(true && !false); // true
// console.log(!true || !false); // false

// console.log('a'<'b'); // true
// console.log('a'>'b'); // false
// console.log('a'<= 'b'); // true
// console.log('a'>= 'b'); // false
// console.log('a'=='a'); // true
// console.log('a'!='b'); // true


// console.log('a' < 'A'); // false
// console.log(65 > 97); // false
// console.log('A'.toLocaleLowerCase() < 'a'.toLocaleLowerCase()); // false
// console.log('A'.toLocaleLowerCase() === 'a'); // true

// let str = "jana";
// let sum = 0;
// for (let i = 0; i < str.length; i++) {
//     sum += str.charCodeAt(i);
// }
// console.log(sum);

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(0 == false); // true
// console.log(0 === false); // false

// console.log('' == false); // true
// console.log('' === false); // false

// console.log([] == false); // true
// console.log([] === false); // false

// console.log({} == false); // true
// console.log({} === false); // false

// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false

// x = 10;
// console.log(Number.isNaN(x)); // false
// console.log(isNaN(x)); // false

// y = 'jana';
// console.log(Number.isNaN(y)); // false
// console.log(isNaN(y)); // false

x = true;
y=10;
z = x + y;
console.log(z); // 11
console.log(Number.isNaN(z)); // false
console.log(isNaN(z)); // false