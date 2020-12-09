'use strict';
// Object-oriented programming
// class: template (붕어빵 틀)
// objectL instance of a class (붕어빵 종류)
// JavaScript in ES6
//  - introduced in ES6
//  - syntactical sugar over  prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor (생성자)
  constructor(name, age) {
    // fields (필드에 바로 할당)
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const heno = new Person('heno', 20);
console.log(heno.name);
console.log(heno.age);
heno.speak();

// 2. Getter and Setters (커피 자판기 -1, 프라이벳 캡슣화)
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) { // set은 값을 설정해야 하기 때문에 value를 받아와야 한다
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Jobs',  -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dreammer';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance (상속)
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;  
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape { // 필요한 함수만 재정의 over writting
  draw() {
    super.draw(); // 부모 함수도 가져오기
    console.log('▲');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const rectangle = new Rectangle(20, 20, 'red');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'green');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);