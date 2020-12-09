'use strict';

// function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - preforms a task or calculates a  value

// 1. function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndpoint -> createCard, creatPoint
// function is object on JS

function printHello() {
  console.log('hello!');
}
printHello();

function log(message) {
  console.log(message);
}
log('hey!');

// 2. Parameters
// premitive parameters: passed by value
// obeject parameters: passed by reference

function changeName(obj) {
  obj.name = 'coder';
}
const heno = { name: 'heno' };
changeName(heno);
console.log(heno); // {name: "coder"}

// 3. Default parameters (before ES6)
function showMessage(message, from) {
  if (from === undefined) {
    from = 'unknown';
  }
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // simple Ver.
  for (const arg of args) {
    console.log(arg);
  }

  // more simple by use forEach
  args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'heno');

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log (`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 조건이 맞지 않을때 빨리 리턴
  }
  // long upgrade logic...
  // 조건이 맞을때는 그담에 로직을 실행
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () { // 함수에 이름이 없는 함수 : anonymous function
  console.log('print');
};
print();

const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint1 = function () {
  console.log('simplePrint!');
};

// use Arrow function
const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b; 
const simpleMultiply = (a, b) => {
  return a * b;
};

// IIFE : Immediately Invoked Function Expression
// 선언 함과 동시에 호출 하려면 전체를 () 로 감싸준다.
(function hello() {
  console.log('IIFE');
})();
