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

