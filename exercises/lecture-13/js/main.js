'use strict';

const classes = ['first', 'second', 'third', 'fourth'];

const p1 = document.querySelector('#p1');
p1.style.backgroundColor = 'gold';

const p2 = document.querySelector('#p2');
p2.style.backgroundColor = 'gold';
p2.style.color = 'blue';
p2.style.fontSize = '2rem';

const p3 = document.querySelector('#p3');
p3.classList.add('third');

const p4 = document.querySelector('#p4');
p4.classList.add('fourth', 'border');

const button1 = document.querySelectorAll('button')[0];
button1.style.backgroundColor = 'gold';
button1.style.color = 'blue';

const button2 = document.querySelectorAll('button')[1];
button2.addEventListener('click', () => {
  p1.style.display = 'none';
});

const button3 = document.querySelectorAll('button')[2];
button3.addEventListener('click', () => {
  p1.style.display = 'block';
});

const button4 = document.querySelectorAll('button')[3];
button4.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
