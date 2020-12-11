'use strict';
// 배열에는 index가 지정되어 져 있고 0 부터 순서대로 시작한다.
// Array

// 1. Declaration
// 기본 배열 생성 방법
const arr1 = new Array();

// 더 흔한 방법
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 베열 첫 번째 아이템을 찾을 때
console.log(fruits[fruits.length - 1]); // 배열 맨 마지막 아이템을 찾을 때

// 3. Looping over an array
console.clear();
// print all fruitss
// a. use for

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach : forEach에서 보통은 [array]를 받아오지 않는다
fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
});

// use arrow fn
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end (뒤에서 부터 아이템 넣기)
fruits.push('🍒', '🍍');
console.log(fruits);

// pop: remove an item from the end (뒤에서 부터 아이템 빼기)
fruits.pop(''); // 뒤에서 부터 -1로 배열 아이템 제거
console.log(fruits);

// unshift: add an item to the benigging (앞에서 부터 아이템 넣기)
fruits.unshift('🥑', '🥥');
console.log(fruits);
// shift: remove an item from the benigging (앞에서 부터 아이템 빼기)
fruits.shift();
console.log(fruits);

// note~~!!!!!!!!!!!!!!! shift, unshift are sloe than pop and push
// 배열에 길이가 길면 길수록 앞에서 부터 데이터 조작은 느려진다!!!!!!!!

// splice: remove an item by index position (지정된 위치에서 삭제)
fruits.push('🍏', '🍈', '🍓');
console.log(fruits);
fruits.splice(1, 3); // 1부터 3개를 지우기 : 시작 지점 부터 몇개를 지울까
console.log(fruits);
fruits.splice(0, 1, '🍖', '🧀', '🥚'); // 0부터 1개를 지우고 그 자리에 다른것을 넣어주기
console.log(fruits);

// combine two arrays : 두개의 배열을 결합시키기
const fruits2 = ['🥩', '🍕'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf : 1find the index
console.log(fruits.indexOf('🍓')); // 5
console.log(fruits.indexOf('🍉')); // -1
// includes
console.log(fruits.includes('🍓')); // true
console.log(fruits.includes('🍉')); // false

// lastIndexOf
console.log(fruits);
fruits.push('🥚');
console.log(fruits); // 계란이 두개에요~
console.log(fruits.indexOf('🥚'));
console.log(fruits.lastIndexOf('🥚'));
