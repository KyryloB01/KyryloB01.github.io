'use strict';

const message1 = "Hello";
const message2 = "JavaScript";
alert(`${message1} ${message2}!`);

const x = +prompt("Введіть число x:");
const y = +prompt("Введіть число y:");
alert(`Сума: ${x + y}`);

const guess = +prompt("Вгадай число (від 1 до 5):");
const target = 3;

if (guess === target) {
  alert("Congratulations, You did it!");
} else if (guess > target) {
  alert("The number is too long");
} else {
  alert("The number is short");
}

const day = prompt("Введіть день тижня (наприклад: Понеділок або Monday)");

if (day === "Понеділок" || day === "Monday") {
  alert("Start of the work week!");
} else if (day === "П'ятниця" || day === "Friday") {
  alert("End of the work week!");
} else {
  alert("A regular day");
}

switch (day) {
  case "Понеділок":
  case "Monday":
    alert("Start of the work week!");
    break;
  case "П'ятниця":
  case "Friday":
    alert("End of the work week!");
    break;
  default:
    alert("A regular day");
}

const score = +prompt("Введіть свій бал (0-100):");

let grade;
if (score < 50) {
  grade = 'F';
} else if (score < 70) {
  grade = 'D';
} else if (score < 80) {
  grade = 'C';
} else if (score < 90) {
  grade = 'B';
} else {
  grade = 'A';
}

alert(`Ваша оцінка: ${grade}`);
