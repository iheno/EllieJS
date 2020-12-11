'use strict';
// Q1. make a string out of am array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join();
  console.log(result); // apple, banana, orange
}

// Q2. make an array out of a string
{
  const fruits = '🍏,🍎,🍐,🍊';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result); // [3, 4, 5]]
  console.log(array); // [1, 2, 3 ,4 ,5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 40, true, 90),
  new Student('D', 30, true, 79),
  new Student('E', 18, false, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students scores
// result shoud be: [45, 80, 90 ,79 ,88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // 조건 중에 하나만 만족해도 되먄 : some
  const result = students.some((student) => student.score < 50);
  console.log(result); // true

  // 조건 중에 모두 만족시켜야 하는 경우 : every
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); // false
}

// Q9. compute students' average score
{
  // 배열에 있는 모든 값을 누적 할때 쓰는 함수 : reduce
  // 배열에 제일 뒤에서 부터 시작할때는 : reduceRight
  const result = students.reduce((acc, student) => acc + student.score, 0);
  console.log(result);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 79, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
  // const result2 = result.join(',');
  // console.log(result2);
}

// Q11. Do Q10 sorted in ascending order
// result should be : '45, 79, 80, 90, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
