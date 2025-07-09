'use strict';

function calculate(operation, initialValue, numbers) {
  let total = initialValue;
  for (const number of numbers) {
    total = operation(total, number);
  }
  return total;
}

function sum(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

console.log("Sum:", calculate(sum, 0, [1, 2, 4])); // => 7
console.log("Multiply:", calculate(multiply, 1, [1, 2, 4])); // => 8

let student_names = ["Wick", "Malcolm", "Smith"];

student_names.map((name, index, array) => {
  console.log(`name: ${name} | index: ${index} | array: ${JSON.stringify(array)}`);
});

let students_information = [
  { name: "Wick", degree: 375 },
  { name: "Malcolm", degree: 405 },
  { name: "Smith", degree: 453 }
];

let maxDegree = 600;

let withPercentages = students_information.map(student => {
  let percentage = (student.degree / maxDegree) * 100;
  return {
    ...student,
    percentage: +percentage.toFixed(1)
  };
});

withPercentages.forEach(info => {
  console.log(info);
});

let nested = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

let flat = nested.reduce((acc, item) => acc.concat(item), []);
console.log("Flattened array:", flat);
