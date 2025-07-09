'use strict';


const ul = document.querySelector('.to-do-list');

let itemsArray = JSON.parse(localStorage.getItem('items')) || [];

function addTask(text) {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

itemsArray.forEach(item => addTask(item));

const input = document.getElementById('item');

window.add = function () {
  const text = input.value.trim();
  if (text === '') return;

  itemsArray.push(text);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(text);
  input.value = '';
};

window.del = function () {
  localStorage.clear();
  itemsArray = [];
  ul.innerHTML = '';
};
