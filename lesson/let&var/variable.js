'use strict';

// 2. Variables rw(read/write)
// let (added in ES6)

// Block score
{
  let name = 'heno';
  console.log(name);
  name = 'hello';
  console.log(name);
}

// var (don't ever use this!)
// var hoisting (move declareation from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}

console.log(age);

// 3. Contants
// favor immutable data type always for a few reasons:
// - security (보안성)
// - thread safety (변하지 않는 값)
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, date structure
const heno = { name: 'heno', age: 30 };
console.log(heno);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); //hello
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //1
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //75
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //4
