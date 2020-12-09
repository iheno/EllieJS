'use strict';

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x+y;
x -= y; // x = x-y;
x *= y; // x = x*y;
x /= y; // x = x/y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first turthy value
console.log(`or: ${value1 || value2 || check()}`);
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('oops!');
  }
  return true;
}

// && (and), finds the first falsy valu e
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.somethig

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('oops!');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (타입을 변경해서 검사)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion (타입 체크)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// obeject equality by reference
const heno1 = { name: 'heno' };
const heno2 = { name: 'heno' };
const heno3 = heno1; //true
console.log(heno1 == heno2); //false
console.log(heno1 === heno2); //false
console.log(heno1 === heno3); //true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const myName = 'heno';
if (myName === 'heno') {
  console.log('welcome heno');
} else if (myName === 'coder') {
  console.log('you are amzaing coder');
} else {
  console.log('unkwon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(myName === 'heno' ? 'yes' : 'no');

// 10. Switch statment
// use for multiple if chekcs
// use for enum-like value check()
// use multiple type checks in TSX
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i <= 10; i++) {
  if ( i % 2 !== 0) {
    continue;
  }
  console.log(`qi. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers untill reaching 8 (use break)
for (let i = 0; i <= 10; i++) {
  if ( i > 8 ) {
    break;
  }
  console.log(`q2. ${i}`);
}