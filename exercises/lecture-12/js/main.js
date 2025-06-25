'use strict';

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

const checkAgeAlt = (age) => (age > 18 ? true : confirm('Did parents allow you?'));

function min(a, b) {
  if (a < b) return a;
  else return b;
}

const minAlt = (a, b) => (a < b ? a : b);

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("Enter x:");
let n = prompt("Enter n:");
if (n < 1) {
  alert("n must be a positive integer");
} else {
  alert(pow(x, n));
}

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

const askArrow = (question, yes, no) => (confirm(question) ? yes() : no());

function A() { console.log('A was called'); return undefined; }
function B() { console.log('B was called'); return false; }
function C() { console.log('C was called'); return "foo"; }

A() || C(); 
B() || C(); 

let person = {
  name: 'John',
  age: 30
};
console.log(person.name, person.age);

person.name = {
  firstName: 'John',
  lastName: 'Doe'
};
console.log(person.name.firstName, person.name.lastName);

const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

i = 0;
do {
  console.log(fruits[i]);
  i++;
} while (i < fruits.length);

const Numbs = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < Numbs.length; i++) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}

const names = ['Batman'];
names.push('Joker'); // додати в кінець
names.unshift('Bane'); // додати на початок

if (!names.includes('Alfred')) {
  names.push('Alfred');
}

if (names.includes('Batman')) {
  names.splice(names.indexOf('Batman'), 1);
}

console.log(names);
