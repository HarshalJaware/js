const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', ({ target }) => {
    body.style.backgroundColor = target.id ?? '#212121';
  });
});
