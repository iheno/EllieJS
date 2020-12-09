'use strict';
// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

// object = { key : value } 오브제트는 '키' 와 '벨류' 의 집합체

// 1. Literals and properties
const name = 'heno'; // 변수 하나당 값 하나를 담을 수 있다
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

function print2 (person) {
  console.log(person.name);
  console.log(person.age);
} 
const rodel = { name: 'heno', age: 40 };
print2(rodel);

rodel.hasJob = true; // 추가 가능 : 가능 하면 X
delete rodel.hasJob; // 삭제 도 가능 : 가능 하면 x


// 2. Computed properties
// key should be always string
console.log(rodel.name);
console.log(rodel['name']); // 배열로도 접근 가능 

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(rodel, 'name'); // Key는 항상 문자열로 전달!
printValue(rodel, 'age');

// 3. Property value shorthand : 3가지 오브젝트 생성
const person1 = { name: 'bob', age: 2 }; 
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('heno', 30); // good
const person5 = new Person( 'heno', 20); // better
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

// better
function Person(name, age) {
  this.name = name;
  this.age = age;
}
