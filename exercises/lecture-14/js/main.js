'use strict';

const btnPrimary = document.querySelector('.btn-primary');
btnPrimary.onclick = () => {
  const alertBox = document.getElementById('alert');
  alertBox.className = 'alert alert-primary';
  alertBox.textContent = 'A simple primary alert—check it out!';
};

const btnSecondary = document.querySelector('.btn-secondary');
btnSecondary.addEventListener('click', () => {
  const alertBox = document.getElementById('alert');
  alertBox.className = 'alert alert-secondary';
  alertBox.textContent = 'A simple secondary alert—check it out!';
});

const btnSuccess = document.querySelector('.btn-success');
btnSuccess.addEventListener('mouseover', () => {
  const alertBox = document.getElementById('alert');
  alertBox.className = 'alert alert-success';
  alertBox.textContent = 'A simple success alert—check it out!';
});
btnSuccess.addEventListener('mouseout', () => {
  const alertBox = document.getElementById('alert');
  alertBox.className = 'alert';
  alertBox.textContent = '';
});

const btnDanger = document.querySelector('.btn-danger');
btnDanger.addEventListener('focus', () => {
  const alertBox = document.getElementById('alert');
  alertBox.className = 'alert alert-danger';
  alertBox.textContent = 'A simple danger alert—check it out!';
});
btnDanger.addEventListener('focusout', () => {
  const alertBox = document.getElementById('alert');
  alertBox.className = 'alert';
  alertBox.textContent = '';
});

const btnDark = document.querySelector('.btn-dark');
const btnLight = document.querySelector('.btn-light');

function toggleMode() {
  document.body.classList.toggle('dark-mode');
  btnDark.classList.toggle('hide');
  btnLight.classList.toggle('hide');
}

btnDark.addEventListener('click', toggleMode);
btnLight.addEventListener('click', toggleMode);

const btnInfo = document.querySelector('.btn-info');
btnInfo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const alertBox = document.getElementById('alert');
    alertBox.className = 'alert alert-info';
    alertBox.textContent = 'A simple info alert—check it out!';
  }
});

const cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
  const title = cards[i].querySelector('.card-title');
  console.log(title.textContent);
}

for (let i = 0; i < cards.length; i++) {
  const button = cards[i].querySelector('.add-to-cart');
  const title = cards[i].querySelector('.card-title');
  button.addEventListener('click', () => {
    console.log(`Clicked on: ${title.textContent}`);
  });
}
