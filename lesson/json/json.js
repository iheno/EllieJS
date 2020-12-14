'use strict';

// JSON
// JavsScript Object Notation

// 1. Object to JSON
// stringfy(Obj)
let json = JSON.stringify(true);
console.log(json);

// 배열을 Json으로 변환해 보기
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// 오브젝트를 Json으로 변환해보기
const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

// 해당하는 프로퍼티만 Json으로 변환
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'Heno' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);

// json으로 부터 오브젝트를 만들어 보기
// const obj = JSON.parse(json);

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj);

rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
