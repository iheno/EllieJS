'use strict';
// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

// object = { key : value } 오브제트는 '키' 와 '벨류' 의 집합체

// 1. Literals and properties
const name = 'rodel'; // 변수 하나당 값 하나를 담을 수 있다
const age = 40;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}

// 이것을 개선 하고자 Object를 쓴다
// 오브젝트를 만드는 2가지 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print2(person) {
  console.log(person.name);
  console.log(person.age);
}
const rodel = { name: 'rodel', age: 40 };
print2(rodel);

rodel.hasJob = true; // 추가 가능 : 가능 하면 X
delete rodel.hasJob; // 삭제 도 가능 : 가능 하면 x

// 2. Computed properties
// key should be always string
console.log(rodel.name);
console.log(rodel['name']); // 배열로도 접근 가능
rodel['hasJob'] = true;
console.log(rodel.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(rodel, 'name'); // Key는 항상 문자열로 전달!
printValue(rodel, 'age');

// 3. Property value shorthand : 3가지 오브젝트 생성
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('rodel', 30); // good
const person5 = new Person('rodel', 20); // better
console.log(person4);
console.log(person5);

// good
function makePerson(name, age) {
  return {
    // key 와 value의 이름이 동일 하다면 생략 가능
    // name: name,
    // age: age,
    name,
    age,
  };
}

// 4. Constructor Function
// better
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in rodel); // true
console.log('age' in rodel); // true
console.log('random' in rodel); // false
console.log(rodel.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
for (const key in rodel) {
  console.log(key);
}

// for (value of iterable)
// 배열 리스트 등을 쓴다.

const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

for (const value of array) {
  console.log(value);
}

// 7. Fun cloning : 오브젝트 복사하기
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'rodel', age: '40' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// 오브젝트 복사 방법 : old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}

console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// better
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
